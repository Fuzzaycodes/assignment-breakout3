function sumOfNumbers(n){
    let sum = 0;
    let i = 1;
    while(i <= n){
        sum += i;
        i++;
    }
    console.log("The sum of all inetgers from 1 to "+n+" is " + sum);
}
sumOfNumbers(10);