
showCalendar();

function showCalendar(){
    let now = new Date();
    console.log(now.getDate(), now.getDay());
    firstDay = (now.getDate() % 7) - 1 - now.getDay();
    console.log(firstDay);
    let daysInMonth = daysInThisMonth(now);
    console.log(daysInMonth);
    console.log(now.getMonth());

    //This function gets the number of days of this month by:
    //getting the day before next months first day.
    function daysInThisMonth(n){
        return new Date(n.getFullYear(), n.getMonth()+1, 0).getDate();
    }
}

