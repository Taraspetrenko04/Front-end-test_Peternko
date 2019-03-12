let num = parseInt(prompt("Enter a positive number, please", ""));
console.log(typeof(num));
 //Написать блок гкоторый будет делить число на все елементы массыва
// if (num <=3 ){
//         alert("Number is prime or negative, please enter again");
//     }else{
//         let k=Math.round(Math.sqrt(num));
//         let flag = false; 
//             for(i=2; i<k+1; i++)
//                 if(num %i==0)
//                 {
//                 flag = true;
//                 findPrimes(num);
//                 break;
//                 }
                    
//             if (flag == false)
//             alert("Number is prime, please enter again");
//             }
// //___ Searching prime numbers from 1 to given number______
// function findPrimes (x){
//     let arrPrime = [];
//     for(let i = 1, flag = false; i <= x; i++, flag = 0){
//         for(let j = 2; j * 2 <= i; j++){
//             if(i % j == 0){
//                 flag = true;
//                 break;
//             }
//         }
//         if(!flag)
//             arrPrime.unshift(i);
//     } return console.log(arrPrime);// return arrPrime;  
// }  
// // __________________________________________________________