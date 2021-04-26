//Switch statement -  really challenging 

const generalLabel = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"];
const isInteger = (n) => (!isNaN(n) && n >= 0);
const general = (label3) => generalLabel.indexOf(label3)!== -1;

const minute = 60;
const hour = minute * 60;
const day = hour * 24;

const template = (n, label3) => {
  switch (label3) {
    case "second":''
    case "minute":''
    case "hour":''
    case "day":''
      return (n === 1) ? true : false;
    case "seconds":''
    case "minutes":''
    case "hours":''
    case "days":''
      return (n === 1) ? false : true;
    default:
      console.log("not recognized");
      return false;
  }
}
const templateBis = (n, label3) => {
  switch (label3) {
    case "second":''
    case "seconds":''
      return n;
    case "minute":''
    case "minutes":''
      return n * minute;
    case "hour":''
    case "hours":''
      return n * hour;
    case "day":''
    case "days":''
      return n * day;
    default:
      console.log("Not recognized");
      return false;
  }
}
  

const templateBisBis = (seconds) => {
  if (seconds % day === 0) {
    const days = seconds / day;
    return (days === 1) ? [days,'day'] : [days,'days'];
  } else if (seconds % hour === 0) {
    const hours = seconds / hour;
    return (hours === 1) ? [hours,'hour'] : [hours, 'hours'];
  } else if (seconds % minute === 0) {
    const minutes = seconds / minute;
    return (minutes === 1) ? [minutes,'minute'] : [minutes,'minutes'];
  } else {
    return (seconds === 1) ? [seconds,'second'] : [seconds,'seconds'];
  }
}


const timeAdder = (value1, label1, value2, label2) => {
      if (!isInteger(value1)) {
         return false;
         } else if (!isInteger(value2)) {
         return false;
         } else if (!general(label1)) {
         return false;
         } else if (!general(label2)) {
        return false;
         } else if (!template(value1, label1)) {
        return false;
         } else if (!template(value2, label2)) {
    return false;
  }

  const first = templateBis(value1, label1);
  const secondRes = templateBis(value2, label2);
  const result = first + secondRes;
  return templateBisBis(result);
}

//Outputs
console.log(timeAdder( 2, "days",   11, "minutes"));
console.log(timeAdder( 1, "minute",  21, "seconds"));
console.log(timeAdder(1,"minute", 240,"seconds"));
console.log(timeAdder(5,"hour",5,"minutes"));
console.log(timeAdder(false,false,5,"minutes") );
