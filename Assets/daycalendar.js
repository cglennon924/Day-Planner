var currentDate = Date(Date.now())//Actual date & time
var calendarBtn = $(".btn");
var currentHour = new Date().getHours();//Current hour in military time

// Current Day
$("#currentDay").append(currentDate)

//Saving data into local storage once clicked
calendarBtn.on("click", function() {

    // console.log($(this))
  console.log($(this).val());
  var hourToSave = $(this).val();
  localStorage.setItem("hour" + hourToSave, $("#text" + hourToSave).val().trim());
});
for (let i = 9; i < 17; i++) {
    var timeSelected = localStorage.getItem("hour"+i)
    //Time Selected
    if(timeSelected !== null){
        $("#text"+i).val(timeSelected)
    }
    console.log(currentHour)
    //Past hours (if it's within 9-5)
    if(currentHour>i){
        $("#text"+i).addClass("past")
    }
    //Present time (if within 9-5)
    else if (parseInt(currentHour)=== i){
        $("#text"+i).addClass("present")
    }
    // Future (if in the time frame)
    else {
        $("#text"+i).addClass("future")
    }
}
