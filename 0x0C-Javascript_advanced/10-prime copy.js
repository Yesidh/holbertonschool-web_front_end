function countPrimeNumbers() {
    let countPrimeNum = 97;
    for(let i = 3; i<= 100; i++ ){
        if ((i % 2 == 0) || (i % 3 == 0) || (i % 5 == 0)){
            countPrimeNum --;
        }
    }
    return countPrimeNum
}

let firstTimePerformance = performance.now();
for(let i = 0; i < 100; i++){
    countPrimeNumbers();
}
let secondTimePerformance = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${ secondTimePerformance - firstTimePerformance} milliseconds.`);