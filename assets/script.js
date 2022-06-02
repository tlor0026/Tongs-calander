var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

var interval = setInterval(function() {
    var ct = moment();
    $('#currentDay').html(ct.format('YYYY MMMM DD') + ' '
                        + ct.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + ct.format('hh:mm:ss A'));
  }, 100);
