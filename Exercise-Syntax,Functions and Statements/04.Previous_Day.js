function solve(year, month, day) {

    let date = year + '-' + month + '-' + day;

    let event = new Date(date);
    event.setDate(day -1);
    let fullyear = event.getFullYear().toString();
    let fullMonth = Number(event.getMonth()+1);
    let fullDate = event.getDate();
    console.log(`${fullyear}-${fullMonth}-${fullDate}`);
    
}

solve (2016, 9, 30);