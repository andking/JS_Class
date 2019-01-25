// var salary = document.getElementById("salary").value;
// let salaryContent = Number(salary);
// console.log(salary);

// 'use strict' - command which is cheking definition of variables - we can't assign variable without defining the type before(Ex. let deductions insterad of just deductions- without LET )

function CalcDeductions() {
  alert ("Hello we are in the Quebec tax calculator");
  let salary1 = document.getElementById("salary").value;
  let salary = parseInt(salary1);
  if (salary>=42705 && salary<85405) {
    deductions = (salary-42705)*.2;
console.log(deductions);
document.getElementById("deductions").innerHTML = deductions +" "+ "CAD";
addDeductions =0;
addDeductions2 = 0;
total = salary - deductions-addDeductions-addDeductions2;
document.getElementById("netSalary").innerHTML = total + " "+"CAD";
// tax = (salary - 42705)*.2;
  }
// else  if (salary==85405 && salary==103915) {
//     deductions = salary*.24;
//     console.log(deductions);
//     document.getElementById("deductions").innerHTML = deductions +" "+ "CAD";
//   addDeductions = 0;
//   addDeductions2 = 0;
//   }
  else if (salary>=85405 && salary<103915) {
    deductions = 85405*.2;
    addDeductions = (salary-85405)*.24;
document.getElementById("deductions").innerHTML = deductions +" "+ "CAD";
document.getElementById("addDeductions").innerHTML = "After 85405 CAD: " + addDeductions +" "+ "CAD";
addDeductions2 = 0;
total = salary - deductions-addDeductions-addDeductions2;
document.getElementById("netSalary").innerHTML = total + " "+"CAD";
// tax = (salary-85405)*.24 + (85405-42705)*.2;
  }
  else if (salary>=103915) {
    deductions = 85405*.2;
    addDeductions = (salary-85405)*.24;
    document.getElementById("addDeductions").innerHTML = "After 85405 CAD: " + addDeductions +" "+ "CAD";
    addDeductions2 = (salary-103915)*.2575;
    document.getElementById("deductions").innerHTML = deductions +" "+ "CAD";
    document.getElementById("addDeductions2").innerHTML ="After 103915 CAD: "+ addDeductions2 +" "+ "CAD";
    console.log(addDeductions2);
    total = salary - deductions-addDeductions-addDeductions2;
    document.getElementById("netSalary").innerHTML = total + " "+"CAD";
    // tax=(103915-85405)*.24+(salary-103915)*.2575;
  }
  else if (salary<42705) {
  deductionsLess = salary*.15;
total = salary - deductionsLess;
document.getElementById("deductionsLess").innerHTML = total + " "+"CAD";
  }
// total = salary - deductions-addDeductions+addDeductions2;
// document.getElementById("netSalary").innerHTML = total + " "+"CAD";

console.log(total);
}
function ReloadPage(){
  location.reload();
}
