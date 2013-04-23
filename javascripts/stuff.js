// Generated by CoffeeScript 1.4.0

jQuery(function() {
  var setTime, timeDiff, updateNums;
  setTime = function() {
    var time;
    time = new Date();
    time.setUTCDate(23);
    time.setUTCHours(23);
    time.setUTCMinutes(0);
    time.setUTCSeconds(0);
    return time;
  };
  window.time = setTime();
  timeDiff = function(now) {
    var aMinute, anHour, diff_in_seconds, hours, minutes, seconds;
    aMinute = 60;
    anHour = 60 * aMinute;
    diff_in_seconds = (time - now) / 1000;
    hours = Math.floor(diff_in_seconds / anHour);
    minutes = Math.floor((diff_in_seconds - (hours * anHour)) / aMinute);
    seconds = Math.floor(diff_in_seconds - (hours * anHour) - (minutes * aMinute));
    return {
      "hours": hours.addZero(),
      "minutes": minutes.addZero(),
      "seconds": seconds.addZero()
    };
  };
  Number.prototype.addZero = function() {
    if (this.toString().length === 1) {
      return "0" + this.toString();
    } else {
      return this.toString();
    }
  };
  $("#countdown").removeClass("clear");
  updateNums = function() {
    var time;
    time = new Date();
    $(".hour").text(timeDiff(time).hours);
    $(".minute").text(timeDiff(time).minutes);
    return $(".second").text(timeDiff(time).seconds);
  };
  return setInterval(function() {
    return updateNums();
  }, 1000);
});
