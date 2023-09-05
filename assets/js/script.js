// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  loadEvents();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // if user clicks on save button, it saves user input to local storage
  $(".saveBtn").on("click", function() {
    var timeBlockId = $(this).parent().attr("id");
    var hour = timeBlockId.split("-")[1];
    var description = $(this).siblings(".description").val();
    console.log("hour:", hour);
    console.log("description:", description);
    localStorage.setItem("event_" + hour, description);
    console.log("Saved:", "event_" + hour, description);
    
    
    console.log("click");
    loadEvents();
  });

  function loadEvents() {
    $(".time-block").each(function() {
      var hour = $(this).attr("id").split("-")[1];
      var eventText = localStorage.getItem("event_" + hour);
      $(this).find(".description").val(eventText);
    });
  }


   // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

// gets the current date (year, month, day of month)
// gets the time (hours, minutes, seconds)

$(document).ready( function() {
  blockColorChange ();
});
var today = new Date();
// var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var currentTime = time;
console.log(currentTime);

function blockColorChange() {
  var userTime = parseInt($(this).attr("hour-9"));
    if (currentTime > userTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (currentTime < userTime) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }

  };

  
 

  

 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  
  // TODO: Add code to display the current date in the header of the page.
  // Use day.js library to set the day, month, and day of month that updates every day
  const currentDate = dayjs();
  const formattedDate = currentDate.format('dddd, MMMM D');
  console.log(formattedDate);
  document.querySelector('#currentDay').textContent = formattedDate;


  // const nthNumber = (number) => {
  //   if (number > 3 && number < 21) return "th";
  //   switch (number % 10) {
  //     case 1: 
  //       return "st";
  //     case 2:
  //       return "nd";
  //     case 3:
  //       return "rd";
  //     default:
  //       return "th";

  //   }
  // };

});
