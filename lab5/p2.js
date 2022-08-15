let arrayInput = [1,2,3,4];
let userInput = 0;
while (userInput >= 0) {
    userInput = Number(prompt("Enter a positive integer"));
    if(userInput < 0){
        break;
    } 
    else {
        if (!isNaN(userInput)) {
            arrayInput.push(userInput);
        }
    }
}
let avg = arrayInput.reduce((pre, curr) => pre + curr, 0)/arrayInput.length;
let min = Math.min(...arrayInput);
let max = Math.max(...arrayInput);
alert("for n = " +(arrayInput.length)+ " the average is " + avg + " the minimum is " + min + " the maximum is " + max)
