jQuery ->

  # Extract this out for opensourcing

  setTime = () ->
    time = new Date()
    time.setUTCDate(23)
    time.setUTCHours(23)
    time.setUTCMinutes(0)
    time.setUTCSeconds(0)
    time

  window.time = setTime()

  timeDiff = ( now ) ->
    aMinute = 60
    anHour = 60 * aMinute
    diff_in_seconds = ( now - time ) / 1000

    hours = Math.floor( diff_in_seconds / anHour )
    minutes = Math.floor( ( diff_in_seconds - ( hours * anHour ) ) / aMinute )
    seconds = Math.floor( diff_in_seconds - ( hours * anHour ) - ( minutes * aMinute ) )

    { "hours": hours.addZero(), "minutes": minutes.addZero(), "seconds": seconds.addZero() }

  Number::addZero = () ->
    if @toString().length == 1 then "0" + @toString() else @toString()

  $("#countdown").removeClass "clear"
  updateNums = () ->
    time = new Date()
    $(".hour").text timeDiff(time).hours
    $(".minute").text timeDiff(time).minutes
    $(".second").text timeDiff(time).seconds

  setInterval () ->
    updateNums()
  , 1000
