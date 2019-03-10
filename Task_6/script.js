 
let num = 40;
let arrPrime = [];
    for ( let i = num; i <= num; i--){
         for (let j = 2; j>=num; j++) {
             if(i % j != 0 ){
                arrPrime.push(i);
          } 
        }
        console.log(arrPrime);
    }