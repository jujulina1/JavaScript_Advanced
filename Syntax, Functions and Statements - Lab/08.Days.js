function solve(month, year) {

    function daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }

    console.log(daysInMonth(month, year));

}

//solve(1, 2012);
solve(2, 2021);