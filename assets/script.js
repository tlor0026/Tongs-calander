var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

var interval = setInterval(function () {
  var ct = moment();
  $('#currentDay').html(ct.format('YYYY MMMM DD') + ' '
    + ct.format('dddd')
      .substring(0, 3).toUpperCase());
  $('#currentDay').html(currentDate + " " + ct.format('hh:mm:ss A'));
}, 100);

$("#clr").on("click", function(){
  localStorage.clear();
  beggin()
}) 

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
var eightAm = $("#8am");
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenPm = $("#11pm");
var twelveAm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");

function beggin() {
  console.log("Current Hour " + hour);
  var tim8 = JSON.parse(localStorage.getItem("9:00 am"));
  eightAm.val(tim8);
  var tim9 = JSON.parse(localStorage.getItem("10:00 am"))
  nineAm.val(tim9);
  var tim10 = JSON.parse(localStorage.getItem("11:00 am"))
  tenAm.val(tim10);
  var tim11 = JSON.parse(localStorage.getItem("12:00 pm"))
  elevenPm.val(tim11);
  var tim12 = JSON.parse(localStorage.getItem("1:00 pm"))
  twelveAm.val(tim12);
  var tim1 = JSON.parse(localStorage.getItem("2:00 pm"))
  onePm.val(tim1);
  var tim1 = JSON.parse(localStorage.getItem("3:00 pm"))
  twoPm.val(tim2);
  var tim2 = JSON.parse(localStorage.getItem("4:00 pm"))
  threePm.val(tim4);
  var tim3 = JSON.parse(localStorage.getItem("5:00 pm"))
  fourPm.val(tim3);
  var tim4 = JSON.parse(localStorage.getItem("6:00 pm"))
  fivePm.val(tim4);
  var tim5 = JSON.parse(localStorage.getItem("7:00 pm"))
  sixPm.val(tim5);
} 

$(document).ready(function(){
  background()
  beggin()
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