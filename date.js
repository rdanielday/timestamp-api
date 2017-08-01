function parseDate(date) {
  var months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
  var now = Date.now();
  var uDate = /\d*/
  if (uDate.test(date) != -1 && date >= 0 && date <= now) {
    var dateObj = new Date(date*1000);
    var day = dateObj.getDate();
    var month = dateObj.getMonth();
    var year = dateObj.getFullYear();
    var humanDate = months[month] + " " + day.toString() + ", " + year.toString();
    return {
      unix: date,
      natural: humanDate
    };
  }
  
  var dateArr = date.replace(/,/, '').split(' ');
  var dateObj = new Date(dateArr[2], months.indexOf(dateArr[0]), dateArr[1]);
  if (dateObj.toDateString() != "Invalid Date") {
    var unix = dateObj.getTime() / 1000;
    var day = dateObj.getDate();
    var month = dateObj.getMonth();
    var year = dateObj.getFullYear();
    var humanDate = months[month] + " " + day.toString() + ", " + year.toString();
    return {
      unix: unix,
      natural: humanDate
    };
  }
  
  return {
    unix: null,
    natural: null,
  };
}

module.exports = parseDate;