// JavaScript Document
/*Execute the function to run and disply the countdown clock */
runClock();
setInterval("runClock()", 1000);
/*Function to create and run countdown clock */
function runClock() {
  /*Calculate the days until next show*/
  var newYear= new Date("May 8, 2021");
  var nextYear = currentDay.getFullYear() + 1;
  newYear.setFullYear(nextYear);
  var daysLeft = (newYear - currentDay)/(1000*60*60*24);

  /*Calculate the hours left in the current day */
  var hrsLeft = (daysLeft-Math.floor(daysLeft))*24; 

  /*Calculate the minutes and seconds left in the current hour*/
  var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
  var secsLeft = (minLeft - Math.floor(minsLeft))*60;


  /*Display the time left until next show */
  document.getElementById("days").textContent = Math.floor(daysLeft);
  document.getElementById("hrs").textContent = Math.floor(hrsLeft);
  document.getElementById("mins").textContent = Math.floor(minsleft);
  document.getElementById("secs").textContent = Math.floor(secsLeft);

  /* Store the current date and time */
  var currentDay = new Date();
  var dateStr = currentDay.toLocaleDateString();
  var timeStr = currentDay.toLocaleDateString();
}
