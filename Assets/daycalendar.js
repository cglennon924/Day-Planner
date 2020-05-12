$(document).ready(function(){

    var currentDate = Date(Date.now())//Actual date & time
    var currentHour = moment().format('H')

    // Current Day
    $("#currentDay").append(currentDate)

    var plannerContent = JSON.parse(localStorage.getItem("savedPlans"));

    if(plannerContent !== null) {
    plannerArray = plannerContent
    } else {
    plannerArray= []
    };

    for (var i = 9; i < 17; i++) {

        var input0 = $("#input-0")
        input0.val(plannerArray[0])
        var input1 = $("#input-1")
        input1.val(plannerArray[1])
        var input2 = $("#input-2")
        input2.val(plannerArray[2])
        var input3 = $("#input-3")
        input3.val(plannerArray[3])
        var input4 = $("#input-4")
        input4.val(plannerArray[4])
        var input5 = $("#input-5")
        input5.val(plannerArray[5])
        var input6 = $("#input-6")
        input6.val(plannerArray[6])
        var input7 = $("#input-7")
        input7.val(plannerArray[7])
        var input8 = $("#input-8")
        input8.val(plannerArray[8])

        var timeOfDay = $("<input>")

        if (parseInt(currentHour) === i) {
            timeOfDay.attr("style", "background-color: #ff6961; color: white;");
        } else if (parseInt(currentHour) < i) {
            timeOfDay.attr("style", "background-color: #77dd77; color: white;");
        } else if (parseInt(currentHour) > i) {
            timeOfDay.attr("style", "background-color: #d3d3d3;")};
    };
   
    //Saving data into local storage once clicked
    $(document).on("click", "i", function(event) {
        event.preventDefault();

        var saveIdNum = $(this).attr("save-id");                                
        var inputId = "#input-"+saveIdNum;                              
        var activityValue = $(inputId).val();

        plannerArray[saveIdNum] = activityValue;
        localStorage.setItem("savedPlans", JSON.stringify(plannerArray));
    });



});
