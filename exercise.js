
/*Congratulations Prepsters, you've been selected for a top secret mission. Should you choose to accept it, do a git fetch and a git pull to find your specific mission. After you complete your mission, commit your work and do a pull request.

This repo will self-destruct in five seconds. Good luck!*/

/*Mission 1: 
Team Member: Alavi

Create a function that will double the value of each number in the array and return the array*/

var numArr = [2, 3, 10];

function doubleTrouble(){
  for(var i=0;i<numArr.length;i++){
    console.log(numArr[i]);
    numArr.splice(i,1,numArr[i]*2);
  }
}
doubleTrouble(numArr);
console.log(numArr);


/*Mission 2: 
Team Member: Mckarl

Create a function that will sum up only the even indexed numbers in the array and return a new array.*/

var numBox = [1,3,5,7,9,11,13,15];
function getSum(numb){
  for(i=0; i<numb; i++)
    if(i%2 !== 0)
      numb += i;
}
console.log(getSum(numBox));

/*Mission 3:
Team Member: Abby

Create a function that will convert the value of Bitcoin to USD based on today's rate. If the Bitcoin to USD rate is greater than $10,000 return 'Too expensive to buy' otherwise return "I'm going all in!"*/
function bitCoinRate(num){
	var bitcoinToUsd = num * 7755 ;
	if(bitcoinToUsd > 10000){
		console.log("Too expensive to buy");
	}else{
		console.log("I'm going all in!");
	}
}
bitCoinRate(1);
/*Mission 4:
Team Member: Kenny

Create a function that will calculate the total gas cost of filling up a car. Using the reference below, create conditional statements to check type of car based on gallon tank size.

Reference:
small car: 12 gallons
large car: 18 gallons
SUV: 25 gallons
*/

var smallCar = 12;
var largeCar = 18;
var SUV = 25;

function totalGas(car){
  if (car === smallCar){
    console.log(12 + ' gallons');
  }
  if (car === largeCar){
    console.log(18 + ' gallons');
  }
  if (car === SUV){
    console.log(25 + ' gallons');
  }
}

totalGas(SUV);








