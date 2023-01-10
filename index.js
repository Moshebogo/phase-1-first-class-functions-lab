// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const  returnFirstTwoDrivers = function() {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function() {
    return drivers.slice(2, 4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (integer) => {
  const fareDoubler = (fare) => {
    return fare * integer;
 }
 return fareDoubler;
}

function fareDoubler(fare) {
  return fare * 2;
}

fareTripler = (fare) => fare * 3;

function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers);
}