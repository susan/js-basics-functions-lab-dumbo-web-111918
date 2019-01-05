// Code your solution in this file!

function distanceFromHqInBlocks(aNum){
  return Math.abs(aNum - 42);
}

function distanceFromHqInFeet(aNum) {
	return Math.abs(aNum - 42) * 264;
}

function distanceTravelledInFeet(num1, num2) {
return Math.abs(num1 - num2) * 264;
}



function calculatesFarePrice(start, destination) {
  let fare = 0;
  let totalFeet = 264 * Math.abs(destination - start);

  if (totalFeet <=2000 && totalFeet > 400){
    fare = ((totalFeet - 400) * 0.02);
  }
  if (totalFeet > 2000 && totalFeet <= 2500){
  	fare = 25;
  }
  if (totalFeet > 2500){
    return 'cannot travel that far';
  }
  return fare;
}

