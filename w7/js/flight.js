function Flight(airline,
                depTime,
                arrTime,
                stops,
                priceInUSD,
                from,
                to,
                fligtClass) {
  this.airline = airline;
  this.depTime = depTime;
  this.arrTime = arrTime;
  this.stops = stops;
  this.priceInUSD = priceInUSD;
  this.from = from;
  this.to = to;
  this.fligtClass = fligtClass;

  this.numberOfStops = function () {
    return this.stops.length;
  }

  this.priceInCad = function () {
    return this.priceInUSD*1.32;
  }

  this.durationTime = function () {
    return (this.arrTime - this.depTime)/(1000*60*60);
  }

  this.numberOfOverNights  = function () {
    return (this.arrTime.getDate() - this.depTime.getDate());
  }
}

let torAirport = new Airport('Peterson', 'Toronto', 'YYZ');

let myFancyFlight = new Flight('Air Canada',
        new Date('2019-03-17T22:24:00'),
        new Date('2019-03-18T03:45:00'),
        [torAirport],
        8500.58,
        mtlAirport,
        lndAirport,
        'First Class'
        );
console.log(myFancyFlight);
console.log(myFancyFlight.priceInUSD);
console.log(myFancyFlight.stops[0].name);
console.log(myFancyFlight.arrTime);
console.log(myFancyFlight.numberOfStops());
console.log(myFancyFlight.priceInCad());
console.log(myFancyFlight.arrTime.getHours());
console.log(myFancyFlight.durationTime());
console.log(myFancyFlight.numberOfOverNights());
