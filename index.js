// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    let Hq = 42;
  return Math.abs(pickUpLocation - Hq);
}

function distanceFromHqInFeet(pickUpLocation){
    let feet = 264
    let distanceInFeet = Math.abs(pickUpLocation - 42);
    return distanceInFeet * feet;
}

function distanceTravelledInFeet(pickUpLocation,destination){
let distanceTravelled = Math.abs(destination - pickUpLocation);
return distanceTravelled * 264
}

function calculatesFarePrice(start, destination){
    let distanceTravelled = Math.abs(destination - start);
    let distanceInFeet = distanceTravelled * 264;
    if (distanceInFeet <= 400) {
        return 0; }
    else if (distanceInFeet >= 400 && distanceInFeet <= 2000){
        return (distanceInFeet - 400) * 0.02;
    }
    else if (distanceInFeet >= 2000 && distanceInFeet <= 2500){
        return 25;
    }
    else (distanceInFeet > 2500);{
        return ('cannot travel that far');
    }
    }

