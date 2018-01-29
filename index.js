var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
				  'July', 'August', 'September', 'October', 'November', 'December'];

var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function daysToDate(days) {
	days = Math.min(364.9999999999999, days);
	days = Math.max(0, days);
	
	var month;
	var day = days;
	for (i = 0; i < 12; i++) {
		month = i;
		var rest = day - daysInMonth[i];
		if (rest < 0) break;
		day = rest;
	}
	month++;
	day++;
	
	hour = 24 * (day % 1);
	minute = 60 * (hour % 1);
	second = 60 * (minute % 1);
	second = parseInt(second * 1000) / 1000.0

	return [parseInt(month), parseInt(day), parseInt(hour), parseInt(minute), second];
}

function daysAgoToDate(days) {
	return daysToDate(365.0 - days);
}

function dateArrayToString(dateArray) {
	var month = monthNames[dateArray[0] - 1];
	var day = dateArray[1];
	var hour = dateArray[2];
	var minute = dateArray[3];
	var second = dateArray[4];
	
	if (hour < 10) hour = '0' + hour;
	if (minute < 10) minute = '0' + minute;
	if (second < 10) second = '0' + second;

	return ordinal(day) + ' of ' + month + ' ' + hour + ':' + minute + ':' + second;
}

function ordinal(i) {
    var j = i % 10, k = i % 100;
    if (j == 1 && k != 11) return i + "st";
    if (j == 2 && k != 12) return i + "nd";
    if (j == 3 && k != 13) return i + "rd";
    return i + "th";
}

function yearsAgoToDateString(years) {
	var totalYears = 13.799 * 1000000000;
	var days = (years / totalYears) * 365.0
	return dateArrayToString(daysAgoToDate(days));
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
		vars[key] = value;
    });
    return vars;
}

