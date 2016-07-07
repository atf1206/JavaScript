
function makeFriendlyDates(arr) {
  
  var returnArray = ["", ""];
  var myDate1 = arr[0].split("-");
  var myDate2 = arr[1].split("-");
  var monthsArray = ['blank', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  //checking if same year
  if (myDate1[0] == myDate2[0]) {
    if (myDate1[0] == "2016") {
      returnArray[0] = monthsArray[parseInt(myDate1[1])] + " " + dayName(myDate1[2]);
    } else {
      returnArray[0] = monthsArray[parseInt(myDate1[1])] + " " + dayName(myDate1[2]) + ", " + myDate1[0];
    }
    //checking if same month
    if (myDate1[1] == myDate2[1]) {
      //checking if same day
      if (myDate1[2] == myDate2[2]) {
        returnArray.splice(1,1);
      } else {
        returnArray[1] = dayName(myDate2[2]);
      }
    } else {
      //same year but different month
      returnArray[1] = monthsArray[parseInt(myDate2[1])] + " " + dayName(myDate2[2]);
    }
  }
  //checking if within 1 year
  else if (myDate2[0] - myDate1[0] == 1) {
    console.log("Exactly 1 year difference");
    if ( myDate1[1] == myDate2[1]) {
      console.log("also same months");
      //same months 1 year apart
      if (myDate1[2] > myDate2[2]) {
        //yes within one year -- same month but fewer days
          //checking if within one year and starts in 2016
          if (myDate1[0] == "2016") {
            returnArray[0] = monthsArray[parseInt(myDate1[1])] + " " + dayName(myDate1[2]);
          } else {
            returnArray[0] = monthsArray[parseInt(myDate1[1])] + " " + dayName(myDate1[2]) + ", " + myDate1[0];
          }
        //second date has no year
        returnArray[1] = monthsArray[parseInt(myDate2[1])] + " " + dayName(myDate2[2]);
      } else {
          console.log("far away");
          returnArray[0] = monthsArray[parseInt(myDate1[1])] + " " + dayName(myDate1[2]) + ", " + myDate1[0];
          returnArray[1] = monthsArray[parseInt(myDate2[1])] + " " + dayName(myDate2[2]) + ", " + myDate2[0];
        }
    } else if (myDate1[1] - myDate2[1] > 0) {
      console.log("within 1 year based on months");
      //yes within one year
        //checking if within one year and starts in 2016
        console.log("checking if 2016");
        if (myDate1[0] == "2016") {
            //yes 2016, drop first year
            returnArray[0] = monthsArray[parseInt(myDate1[1])] + " " + dayName(myDate1[2]);
          } else {
            //not 2016, keep first year
            returnArray[0] = monthsArray[parseInt(myDate1[1])] + " " + dayName(myDate1[2]) + ", " + myDate1[0];
          }
        //second date has no year
        returnArray[1] = monthsArray[parseInt(myDate2[1])] + " " + dayName(myDate2[2]);
      }
  } 
  //all other cases
  else {
    console.log("far away");
    returnArray[0] = monthsArray[parseInt(myDate1[1])] + " " + dayName(myDate1[2]) + ", " + myDate1[0];
    returnArray[1] = monthsArray[parseInt(myDate2[1])] + " " + dayName(myDate2[2]) + ", " + myDate2[0];
  }
  console.log(returnArray);
  return returnArray;
}

function dayName(string) {
  var day = string;
  if (parseInt(string) < 10) {
    day = day[1];
  }
  if (day == "1" || day == "21" || day == "31") {
    day += "st";
  } else if (day == "2" || day == "22") {
    day += "nd";
  } else if (day == "3" || day == "23") {
    day += "rd";
  } else {
    day += "th";
  }
  return day;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
