var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
console.log(todayDate);

$(document).ready(function() {
    $('.time-block').each(function() {
        $(this).attr('hour');
        var hour = $(this).attr('hour');
        hour = moment().hour(hour);
        var currentTime = moment();
        console.log(hour);
        if (currentTime.hour() === hour) {
            $(this).children('textarea').addClass('present');
        }
        if (currentTime.hour() < hour) {
            $(this).children('textarea').addClass('past');
        }
        if (currentTime.hour() > hour) {
            $(this).children('textarea').addClass('future');
        }
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


// past present and future color blocking

// when I click the save button it saves to local storage
