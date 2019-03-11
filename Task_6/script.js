let num = parseInt(prompt("Enter a number", ""));
console.log(typeof(num));

// НАПИСАТЬ ПРОГРАМУ НА ПРОВЕРКУ ПРОСТОГО ЧИСЛА
    function isPrime (x){
        let flag = false;
        for(let k = 1, flag = false ; k<x; k++ flag = 0){
            if(x % k == 0 ){
                flag = true;
                return console.log(findPrimes(num)) ;
            }  return alert("Вы ввели простое число");
                break;
    }
}

function findPrimes (x){
    let arrPrime = [];
    for(let i = 1, flag = false; i <= x; i++, flag = 0){
        for(let j = 2; j * 2 <= i; j++){
            if(i % j == 0){
                flag = true;
                break;
            }
        }
        if(!flag)
            arrPrime.unshift(i);
    }
    return arrPrime;
    console.log(arrPrime);
}
// console.log(findPrimes(num));
console.log(isPrime(num));