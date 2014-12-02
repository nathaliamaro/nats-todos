/**
 * Created by nathaliamaro on 10/3/14.
 */
//Write a javascript function that takes any single number (max) and returns all
//the numbers below (max) that are divisible by five or two but not by both five and two.

function divisibleByTwoOrFive (number) {

    if (number % 2 == 0){
        return true;
    }

    if (number % 5 == 0 ) {
        return true;
    } else {
        return false;
    }


}



function divisibleByTwoAndFive(number){
    if (number % 2 == 0){
        if (number % 5 == 0 ) {
            // if divisible by 2 and 5
            return true;
        } else {
            // if divisible by 2 but not 5
            return false;
        }
    } else {
        // if not divisible by 2
        return false;
    }

}


function  auston (max){
    var number= 1;

    while (number <= max){
      if (divisibleByTwoOrFive(number) && !divisibleByTwoAndFive(number)){
          console.log(number );
      }
      number++;
    }
}


function divisibleByTwoOrFive (number) {
    return (number % 2 == 0 || number % 5 == 0);
}



function divisibleByTwoAndFive(number){
    return (number % 2 == 0 && number % 5 == 0);
}














function numsUnder(maxNum){
    for(var i = 1; i <=  maxNum; i++){
        ((i % 2 == 0 || i % 5 == 0) && !(i % 2 == 0 && i % 5 == 0)) ? console.log(i) : x=0;
    }
}


function numsUnder(maxNum){
    var numsToReturn = [];

    for(var i = 1; i <=  maxNum; i++){
        if(divisibleByTwoOrFive(i) && !divisibleByTwoAndFive(i)) {
            numsToReturn.push(i);
        }
    }
    return numsToReturn;
}












