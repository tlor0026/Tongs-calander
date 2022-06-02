var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

var interval = setInterval(function () {
  var ct = moment();
  $('#currentDay').html(ct.format('YYYY MMMM DD') + ' '
    + ct.format('dddd')
      .substring(0, 3).toUpperCase());
  $('#currentDay').html(currentDate + " " + ct.format('hh:mm:ss A'));
}, 100);


var hour = moment().hours();
function background () {
  $(".task").each(function () {
      var hourly = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      //console.log(hourly);
      console.log(hour);
//      console.log(this);
      if (hour > hourly) {
          $(this).addClass("past");
      } else if (hour < hourly) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
  background()
});
var toDo;
var doThis;
$(".saveBtn").on("click", function(){
  toDo = $(this).siblings(".push").val().trim();
  console.log(toDo);
  doThis = $(this).siblings(".push").text().trim();
  console.log(toDo);
  localStorage.setItem(doThis, JSON.stringify(toDo));
})