let arrayInput = [];
let userAnswer = 0;
while (true) {
    let userAnswer = Number(prompt("Enter a positive integer"));
    if(userAnswer < 0){
        break;
    } 
    else {
        if (Number.isInteger(userAnswer) && !isNaN(userAnswer)) {
            arrayInput.push(userAnswer);
        }
    }
}
let avg = arrayInput.reduce((pre, curr) => pre + curr, 0)/arrayInput.length;
let min = Math.min(...arrayInput);
let max = Math.max(...arrayInput);
alert("for n = " +(arrayInput.length)+ " the average is " + avg.toFixed(2) + " the minimum is " + min + " the maximum is " + max)

function showPrimes(userAnswer) {
    for (i = 2; i < userAnswer; i++) {
        if (!isPrime(i)) continue;
        factorArrey.push(i);
    }
    return factorArrey
}
function isPrime(userAnswer) {
    for (let i = 2; i < userAnswer; i++) {
        if (userAnswer % i == 0) return false;
    }
    return true;
}
