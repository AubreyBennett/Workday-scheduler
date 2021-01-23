// the current day is displayed at the top of the calendar
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
console.log(todayDate);
// time blocks with color coding
$(document).ready(function() {
    $('.time-block').each(function() {
        $(this).attr('hour');
        var hour = $(this).attr('hour');
        hour = moment().hour(hour);
        var currentTime = moment();
        console.log(hour);
        if (currentTime.hour() == hour) {
            $(this).children('textarea').addClass('present');
        }
        else if (currentTime.hour() < hour) {
            $(this).children('textarea').addClass('past');
        }
        else if (currentTime.hour() > hour) {
            $(this).children('textarea').addClass('future');
        }
    // local storage
    var something = localStorage.getItem(hour.hour());
    $(this).children('textarea').val(something);
    console.log(something);
    console.log(hour);
    });

    $('.time-block').children('button').click(function () {
        var hour = $(this).parent().attr('hour');
        var text = $(this).prev().val();

        localStorage.setItem(hour, text);
    });
});