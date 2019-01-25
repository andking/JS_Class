// console.log("Calling function...");
let salary = 65000;

function CalculateTax(salary){
  if (salary<42000) {
    return 0;
  }else {
    return salary*.2;
  }
}

let tax = CalculateTax(salary);
// console.log(salary-tax);

let day = document.getElementById("day").value;

console.log(day);
function isWorkingDay(){
  let day = document.getElementById("day").value;
  switch (day) {
    case 'Monday':
       alert("Working Day!")
      console.log(day);
      break;
      case 'Tuesday':
       alert("Working Day!")
      break;
      case 'Wednesday':
       alert("Working Day!")
      break;
      case 'Thursday':
       alert("Working Day!")
      break;
      case 'Friday':
       alert("Working Day!")
      break;
      case 'Saturday':
       alert("Weekend!!!!")
      break;
      case 'Sunday':
       alert("Weekend!!!!")
      break;
    default:
    alert("Type the day correctly, plz....")

  }
}
