// this ensures that the code is not run until the browser has finished rendering all the elements in the html.
$(function () {

  // calls the loadEvents function
  loadEvents();


  // if user clicks on save button, it saves user input to local storage
  $(".saveBtn").on("click", function() {
    var timeBlockId = $(this).parent().attr("id");
    var hour = timeBlockId.split("-")[1];
    var description = $(this).siblings(".description").val();
    
    localStorage.setItem("event_" + hour, description);
    
    
  });

  // saves the text in local storage and displays it on the webpage in the appropriate time block
  function loadEvents() {
    $(".time-block").each(function() {
      var hour = $(this).attr("id").split("-")[1];
      var eventText = localStorage.getItem("event_" + hour);
      $(this).find(".description").val(eventText);
    });
  }

function blockColorChange() {
  // gets current hour of the day
  var currentHour = parseInt(dayjs().format("H"));
  

  // Loop through each time block to get the id and separate the word hour from the letter number
  $(".time-block").each(function() {
    var userHour = parseInt($(this).attr("id").split("-")[1]);

    // conditional statements that add the classes of present, future, and past to the appropriate time block
    if (currentHour === userHour) {
      $(this).addClass("present");
    } else if (currentHour < userHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("past");
    }
  });
}

// Call function blockColorChange during initializing
$(document).ready(function() {
  blockColorChange();
});



  // using day.js libarary to set the day, month, and day of month which updates every day
  const currentDate = dayjs();
  const formattedDate = currentDate.format('dddd, MMMM D');
  document.querySelector('#currentDay').textContent = formattedDate;


});