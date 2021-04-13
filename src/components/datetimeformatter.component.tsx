let MonthsMap = new Map([[1,"Jan"], [2,"Feb"], [3,"Mar"], [4, "Apr"], [5, "May"], [6, "Jun"], [7, "Jul"], [8, "Aug"], [9, "Sep"], [10, "Oct"], [11, "Nov"], [12, "Dec"]]);
const dateTimeFormatter = (time: string) => {
let newDate = new Date(time);
let month = MonthsMap.get(newDate.getMonth()+1);
let day = newDate.getDay();
let minutes = newDate.getMinutes() < 10 ? 0 + '' + newDate.getMinutes() : newDate.getMinutes();
let amOrPm = (newDate.getHours() < 12) ? "AM" : "PM";
let hours = (newDate.getHours() < 12) ? newDate.getHours() : newDate.getHours() - 12;
let year = newDate.getFullYear();

return month + ' ' + day + ', ' + year + ', ' + hours + ':' + minutes + ' ' + amOrPm; 
};

export default dateTimeFormatter;