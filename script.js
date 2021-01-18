var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    var currentHour = moment().hours();
    var todayDate = moment().format("dddd, MMMM Do YYYY");
    console.log(currentHour);
    console.log(todayDate);
});

