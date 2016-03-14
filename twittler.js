$(document).ready(function(){
  var $timeline = $('#timeline');
  var startIndex = 0;

  var showTweets = function(user) {
    var counter = 0;
    var args = Array.prototype.slice.call(arguments);
    if(args.length){
      $(timeline).empty();
    }
    var endIndex = streams.home.length - 1;
      for (var i = 0; i <= endIndex; i++) {
        if(!args.length){
          user = streams.home[i].user;
        }
        if(user === streams.home[i].user){
          console.log("hi");
          var tweet = streams.home[i];
          var $user = $('<div class="user-container"><a href="#" class="user" data-name="' + tweet.user + '">' + "@" + tweet.user + '</a></div>');
          var $tweet = $('<div class="tweet">' + tweet.message + '</div>');
          var $today = $('<div class="today">' + tweet.created_at + '</div>');
          $user.prependTo($tweet);
          $tweet.prependTo($timeline);
          $today.appendTo($tweet);
          if(counter % 2 === 0){
            $tweet.addClass('every-Other-Tweet');
          }
          counter++;
        }
      }
  };
  //setTimeout(showTweets, 1000, endIndex + 1); (new tweets without button)

  showTweets();
  $('button').on('click', function(){
    showTweets();
    $('.user').on('click', function(){
     var $user = $(this).data('name');
     console.log($user);
      showTweets($user);
    });
  });

  $('.user').on('click', function(){
     var $user = $(this).data('name');
     console.log($user);
     showTweets($user);
  });


});
