let factorArrey = [];
while (true) {
    let userAnswer = Number(prompt("Enter a positive integer"));
    if (userAnswer > 0) {
        if (Number.isInteger(userAnswer)) {
            showPrimes(userAnswer);
            alert("for n = " + userAnswer + " prime numbers are " + factorArrey);
            break
        }
    }
}
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
