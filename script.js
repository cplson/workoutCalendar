
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar();

function getDaysInMonth(today){
    return new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
}
function showCalendar() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();

    let firstDay = (today.getDate() % 7) - 1 - today.getDay();
    let daysInMonth = getDaysInMonth(today);
    
    console.log(daysInMonth);
    tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}
/*function showCalendar(){
    let now = new Date();
    console.log(now.getDate(), now.getDay());
    firstDay = (now.getDate() % 7) - 1 - now.getDay();
    console.log(firstDay);
    let daysInMonth = daysInThisMonth(now);
    console.log(daysInMonth);
    console.log(now.getMonth());


    let tbl = document.getElementById('calendar-data');
    tbl.innerHTML = '';

    monthAndYear .innerHTML = now.getMonth() + " " + now.getFullYear();
    selectYear.value = now.getFullYear();
    selectMonth.value = now.getMonth();

    let date = 1;
    for(let i = 0; i < 6; i++){
        //Creates table rows
        let row = document.createElement("tr");

        //Creates individual rows
        for(let j = 0; j < 7; j++){
            if(i === 0 && j < firstDay){
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }else if(date > daysInMonth){
                break;
            }else{
                cell = document.createElement("td");
                cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row);
    }
    
    //This function gets the number of days of this month by:
    //getting the day before next months first day.
    function daysInThisMonth(n){
        return new Date(n.getFullYear(), n.getMonth()+1, 0).getDate();
    }
}*/

