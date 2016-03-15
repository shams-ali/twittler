$(document).ready(function(){
  var $timeline = $('#timeline');

var elapsedTime = function(endTime, startTime){
  var elapsedDays = endTime.getDay() - startTime.getDay();
  var elapsedHours = endTime.getHours() - startTime.getHours();
  var elapsedMin = endTime.getMinutes() - startTime.getMinutes();
  if(elapsedDays > 0){
    return "-Tweeted " + elapsedDays + " day(s) ago";
  }else if(elapsedHours > 0){
    return "-Tweeted " + elapsedHours + " hour(s) ago";
  }else if(elapsedMin > 0){
    return "-Tweeted " + elapsedMin + " minute(s) ago";
  }else{
    return "-Tweeted less than a minute ago";
  }
};

  var showTweets = function(user) {
    var counter = 0;
    var args = Array.prototype.slice.call(arguments);
    $(timeline).empty();
    var endIndex = streams.home.length - 1;
      for (var i = 0; i <= endIndex; i++) {
        if(!args.length){
          user = streams.home[i].user;
        }
        if(user === streams.home[i].user){
          var tweet = streams.home[i];
          var endTime = new Date();
          var startTime = tweet.created_at;
          var $user = $('<div class="user-container"><a href="#" class="user" data-name="' + tweet.user + '">' + "@" + tweet.user + '</a></div>');
          var $tweet = $('<div class="tweet">' + tweet.message + '</div>');
          var $today = $('<div class="today">' + elapsedTime(endTime, startTime) + '</div>');
          $user.prependTo($tweet);
          $tweet.prependTo($timeline);
          $today.appendTo($tweet);
          if(counter % 2 === 0){
            $tweet.addClass('every-other-tweet');
          }
          counter++;
        }
      }
  };
  //setTimeout(showTweets, 1000, endIndex + 1); (new tweets without button)

  showTweets();

  $(document).on('click', 'button', function(){
    showTweets();
  });

  $(document).on('click', '.user', function(){
     var $user = $(this).data('name');
     showTweets($user);
  });


});
