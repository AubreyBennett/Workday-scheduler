// the current day is displayed at the top of the calendar
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
// console.log(todayDate);
// time blocks with color coding
$(document).ready(function () {
    $('.time-block').each(function () {
        var hour = parseInt($(this).attr('hour'));
        var currentTime = moment();
        // console.log(hour);
        console.log(currentTime.hour());
        if (currentTime.hour() == hour) {
            $(this).children('textarea').addClass('present');
        }
        else if (currentTime.hour() < hour) {
            $(this).children('textarea').addClass('future');
        }
        else if (currentTime.hour() > hour) {
            $(this).children('textarea').addClass('past');
        }
        // local storage
        var storage = localStorage.getItem(hour);
        $(this).children('textarea').val(storage);
        // console.log(storage);
        // console.log(hour);
    });

    $('.time-block').children('button').click(function () {
        var hour = $(this).parent().attr('hour');
        var text = $(this).prev().val();

        localStorage.setItem(hour, text);
    });
});