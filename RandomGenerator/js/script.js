'use strict'

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

document
.querySelector("#randomOutput")
.innerHTML = randomIntFromInterval(0,1000);

function ReloadPage(){
  location.reload();
}

// Arrow function but not correct
let value = (min,max)=>{Math.floor(Math.random()*(max-min+1)+min);}
console.log(value);
