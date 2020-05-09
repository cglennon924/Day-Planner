$(document).ready(function() {

    // Added Current Date and Time to Jumbotron
    var todaysDate = moment().format("MMMM Do YYYY, h:mm a");
    $("#currentDay").text(todaysDate);

    //Variable setting clock to 24 hour time
    var current24Hour = moment().format('H');

    var myPlans = JSON.parse(localStorage.getItem("savedPlans"));

    if(myPlans !== null) {
    activityArray = myPlans
    } else {
    activityArray= []
    }

    //Empties Div with Id Day Planner before for loop is run.
    var dayPlanner = $("#dayPlanner");
    dayPlanner.empty();



    //For Loop setting variable i equal to hours day planner is avaliable.
    for (var i = 9; i<= 17; i++) {

    //Set Identifier equal to index in array
    var identifier = i - 9

    // Create Row for Each Hour In For Loop
    rowDiv = $("<div>");
    rowDiv.addClass("row");
    rowDiv.attr("index", i)

    // Column 1 - Display Hour of the Day on Each Row
    timeDiv = $("<div>");
    timeDiv.addClass("col-md-2");
    timeSpan = $("<span>");
    timeSpan.attr("class", "hour");

    // If Statements for AM and PM Hours
    var displayTime = 0;
    var morningAfternoon = "";
    if(i > 12) {
        displayTime = i - 12;
        morningAfternoon = "pm";
    } else {
        displayTime = i;
        morningAfternoon = "am";
    }
    };

    // Add Hour to Each Row
    timeSpan.text(displayTime + morningAfternoon);

    // Append Display Hour to DOM Column 1
    rowDiv.append(timeDiv);
    timeDiv.append(timeSpan);
      

});                                                        
