//time and date
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

var interval = setInterval(function () {
  var ct = moment();
  $('#currentDay').html(ct.format('YYYY MMMM DD') + ' '
  + ct.format('dddd')
  .substring(0, 3).toUpperCase());
  $('#currentDay').html(currentDate + " " + ct.format('hh:mm:ss A'));
}, 100);
//runs in the background
$(document).ready(function(){
  background()
  beggin()
});
//changes color of text area
var hour = moment().hours();
function background () {
  $(".task").each(function () {
    var hourly = parseInt($(this).attr("id"));
    hour = parseInt(hour);
    console.log(hour);
    if (hour > hourly) {
      $(this).addClass("past");
    } else if (hour < hourly) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
};
// saving to local storage
var eightAm = $("#8am");
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenPm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");

function beggin() {
  var tim8 = JSON.parse(localStorage.getItem("8:00 am"))
  eightAm.val(tim8);
  var tim9 = JSON.parse(localStorage.getItem("9:00 am"))
  nineAm.val(tim9);
  var tim10 = JSON.parse(localStorage.getItem("10:00 am"))
  tenAm.val(tim10);
  var tim11 = JSON.parse(localStorage.getItem("11:00 am"))
  elevenPm.val(tim11);
  var tim12 = JSON.parse(localStorage.getItem("12:00 pm"))
  twelvePm.val(tim12);
  var tim1 = JSON.parse(localStorage.getItem("1:00 pm"))
  onePm.val(tim1);
  var tim2 = JSON.parse(localStorage.getItem("2:00 pm"))
  twoPm.val(tim2);
  var tim3 = JSON.parse(localStorage.getItem("3:00 pm"))
  threePm.val(tim3);
  var tim4 = JSON.parse(localStorage.getItem("4:00 pm"))
  fourPm.val(tim4);
  var tim5 = JSON.parse(localStorage.getItem("5:00 pm"))
  fivePm.val(tim5);
};
var toDo;
var doThis;
$(".saveBtn").on("click", function(){
  toDo = $(this).siblings(".push").val().trim();
  doThis = $(this).siblings("#ti9").text().trim();
  localStorage.setItem(doThis, toDo);
});
//clear button
$("#clr").on("click", function(){
  localStorage.clear();
  beggin()
}); 