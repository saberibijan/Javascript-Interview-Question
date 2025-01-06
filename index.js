// Print out Odd Numbers from 0 to 100=>

// for(let i=1; i<=100; i+=2){
//     console.log(i);
// };

////////////End of Print out Odd Numbers from 0 to 100////////////

//////////// Print out Even Numbers from 0 to 100=>

// for(let i=0; i<=100 ; i +=2){
//     console.log(i);
// }

////////////End of  Print out Even Numbers from 0 to 100 ////////////

//////////// a function that prints out even numbers from 0 to given number=>

// function printEvenNumber(n){
//     let even = []
//  for(let i=0; i<=n; i+=2){
//      even.push(i)
//  }

// return even.join()
// }

// console.log(printEvenNumber(30));

//////////// End of a function that prints out even numbers from 0 to given number ////////////

//////////// a function that prints out even numbers from given number to given number =>

// function printEvenNumber(n,m) {
//   let even = [];
//   for (let i = n; i <= m; i += 2) {
//     even.push(i);
//   }

//   return even.join();
// }

// console.log(printEvenNumber(30,40));

//////////// End of  a function that prints out even numbers from given number to given number ////////////

//////////// a function that prints out even numbers from a given array =>

// let numbers = [1,4,6,5,7,8,9,67,56,32]

// function evenNum (m){
//     let even = [];

//     for(let i = 0; i < m.length; i++) {
//         if (numbers[i] % 2 == 0){
//             even.push(numbers[i]);}

//  }

//  return even
// }

// console.log(evenNum(numbers));

////////////End of a function that prints out even numbers from a given array ////////////

//////////// Sum of Even Numbers from a given array =>

// let numbers = [1, 4, 6, 5, 7, 8, 9, 67, 56, 32];

// let sum = 0
// for(let i =0; i< numbers.length ; i++){
//     if(numbers[i] % 2 == 0){
//         sum += numbers[i]
//     }
// }
// console.log(sum);

////////////End of Sum of Even Numbers from a given array ////////////

////////////Sum of Odd Numbers from a given array =>

// let numbers = [1, 4, 6, 5, 7, 8, 9, 67, 56, 32];

// function evenNum(m) {
//   let sum = 0

//   for (let i = 0; i < m.length; i++) {
//     if (numbers[i] % 2 != 0) {
//         sum += numbers[i]
//     }
//   }
//   return sum;
// }

// console.log(evenNum(numbers));

////////////End of Sum of Odd Numbers from a given array ////////////

//////////// absolute value of (Sum of even numbers from a given array) - (Sum of Odd numbers from a given array )=>

// let numbers= [3,-57,2,-22]
// function evenNum(m) {
//   let sumOdd = 0;
//   let sumEven = 0;

//   for (let i = 0; i < m.length; i++) {
//     if (numbers[i] % 2 != 0) {
//         sumOdd += numbers[i]
//     }
//   }
//   for (let i = 0; i < m.length; i++) {
//     if (numbers[i] % 2 == 0) {
//       sumEven += numbers[i]
//     }
//   }
//   return Math.abs(sumEven - sumOdd);
// }

// console.log(evenNum(numbers));

////////////End of absolute value of (Sum of even numbers from a given array) - (Sum of Odd numbers from a given array ) ////////////

//////////// Find the Highest number index in a given array
// way one
// let numbers = [1,2,25,5,0,4,23]

// let maxNumber = numbers.reduce((a,b) => {
// if(a > b){
//   return a
// }else{
//   return b
// }
// })

// let maxNumberIndex =  numbers.findIndex(index => maxNumber === index)
// console.log(maxNumberIndex);

// way two

// const maxNum = (arr)=>{
//   let bigestNumber = arr[0];
//   for(let i = 0 ; i<= arr.length ; i++){
//     if(arr[i] > bigestNumber){
//       bigestNumber = arr[i]
//     }
//   }
//   let bigestNumberIndex = arr.findIndex(item => item == bigestNumber)
//   return bigestNumberIndex
// }
// console.log(maxNum(numbers));

// way three

// let numbers = [1,2,25,5,0,4,23]

// function indexOfMax(arr) {
//   if (arr.length === 0) {
//       return -1;
//   }
//   let max = arr[0];
//   let maxIndex = 0;

//   for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//           maxIndex = i;
//           max = arr[i];
//       }
//   }
//   return maxIndex;
// }
// console.log(indexOfMax(numbers));

////////////End of Find the Highest number index in a given array ////////////

//////////// Find the lowest number index in a given array

// let numbers = [1,2,25,-1,5,0,4,23]

// let minNumber = numbers.reduce((a,b) => {
// if(a < b){
//   return a
// }else{
//   return b
// }
// })

// let minNumberIndex =  numbers.findIndex(index => minNumber === index)
// console.log(minNumberIndex);

////////////End of Find the lowest number index in a given array ////////////

////////////  Print out prime numbers from 1 to 100 =>

// const isPrime = (number) => {
//   if(number < 2){
//     return false
//   }else{
//     for(let i = 2 ; i < number; i++){
//       if(number % i == 0)
//         return false
//     }
//   }
//   return true
// }

// let primeNumber = []
// for(let i = 0 ; i <= 100 ; i++){
//   if(isPrime(i)){
//     primeNumber.push(i)
//   }
// }
// console.log(primeNumber);

////////////End of Print out prime numbers from 1 to 100 ////////////

//////////// find prime numbers in a given array =>

// const isPrime = (number) => {
//   if(number < 2){
//     return false
//   }else{
//     for(let i = 2 ; i < number; i++){
//       if(number % i == 0)
//         return false
//     }
//   }
//   return true
// }

// let array = [2,7,32,33,96,92,97]

// let newArray = array.filter(item =>{
//   if(isPrime(item)){
//     return true
//   }else{
//     return false
//   }
// })

// console.log(newArray);

////////////End of find prime numbers in a given array  ////////////

//////////// find the count of even and odd numbers in a given array =>

// let array = [10,21,23,24,28,91,13,16,7]

// let oddCount = array.filter(item => item % 2 != 0);
// let evenCount = array.filter(item => item % 2 == 0);
// console.log(evenCount.length);
// console.log(oddCount.length);

////////////End of find the count of even and odd numbers in a given array   ////////////

//////////// calculate sum of an array =>

// way one

// let array = [1,2,3,4,5]

// let sumArray = array.reduce((firstValue, currentValue) => firstValue + currentValue, 0)

// console.log(sumArray);

// way two

// let array = [1,2,3,4,5]

// let sum = 0
// array.forEach(item => {
//   sum +=  item
// })

// console.log(sum);

////////////End of calculate sum of an array    ////////////

//////////// generate N number smaller than M =>

// function generateNumbers(N, M) {
//   const numbers = [...new Set];
//    for(let i =0 ; i < N ; i++) {
//     const randomNumber = Math.floor(Math.random() * M);
//       numbers.push(randomNumber);
//   }
//   return numbers;
// }

// const result = generateNumbers(5, 20);
// console.log(result);

////////////End of generate N number smaller than M    ////////////

//////////// reverse an array without using reverse method =>

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let alphabet = ["a","b","c","d","e"]

//reduceright

// const reverse = (arr)=>{
//   let reversArray = [];
//   while(arr.length){
//     let item = arr.pop();
//     reversArray.push(item)
//   }
//   return reversArray
// }

// console.log(reverse(numbers));
// console.log(reverse(alphabet));

// way two

// const reversArray = (arr)=>{
//     let copyarray = [...arr]
//     let reverse = []

//     for(let i = 0 ; i < arr.length ; i++){
//         reverse.push(copyarray.pop())
//     }

//     return reverse
// }
// console.log(reversArray(alphabet));

////////////End of reverse an array without using reverse method    ////////////

//////////// remove duplicate numbers from an array =>

// let numbers = [1,1,1,1, 2,3,3,4,1,2,3,4];

//reduce


// let uniq = [...new Set(numbers)];
// console.log(uniq);

// // way two

//   function removeDuplicate(arr){
//     let uniqArray = []

//     for(let i = 0 ; i < arr.length; i++){
//         if(uniqArray.indexOf(arr[i]) === -1){
//             uniqArray.push(arr[i])
//         }
//     }
//     return uniqArray
// }

// console.log(removeDuplicate(numbers));

////////////End of remove duplicate numbers from an array     ////////////

//////////// which number has most occurance =>

    // let numbers = [1,1,1,1,2,3,3,4,1,2,3,4];

    //forEach and map

    // function mostFrequent(arr) {
    //   let frequency = {};
    //   let maxCount = 0;
    //   let mostFrequentItem = null;
    //   for (let item of arr) {
    //     frequency[item] = (frequency[item] || 0) + 1;
    //     if (frequency[item] > maxCount) {
    //       maxCount = frequency[item];
    //       mostFrequentItem = item;
    //     }
    //   }
    //   return mostFrequentItem;
    // }
    
    // console.log(mostFrequent(numbers));
    
    ////////////End of which number has most occurance     ////////////
    
    ////////////duplicate occurance =>
    
    // let numbers = [1,1,1,1,2,3,3,4,1,2,3,4];
    
    // let itemRepeatCount = numbers.reduce((obj, currentValue)=>{
    
    //   return {...obj, [currentValue]:(obj[currentValue] || 0) + 1}
    // }, {})
    
    // console.log(itemRepeatCount);
    
    //way two
    
    // function itemRepeatCount(arr){
    //   let frequency = {};
    
    //   for(let item of arr){
    //     frequency[item] = (frequency[item] || 0) + 1
    //   }
    
    //   return frequency
    // }
    
    // console.log(itemRepeatCount(numbers));
    
    ////////////End of duplicate occurance     ////////////


    ////////////Write a function that, when given a negative index, starts displaying from the last index of the array =>


    // function arrayIndex(arr, index) {
//   if (index < 0) {
//       return arr[arr.length + index];
//   } else {
//       return arr[index];
//   }
// }

// let arr = [1, 2, 3, 4];
// console.log(arrayIndex(arr, -1));  
// console.log(arrayIndex(arr, -2));  
// console.log(arrayIndex(arr, -3));  
// console.log(arrayIndex(arr, -4));  


////////////End of Write a function that, when given a negative index, starts displaying from the last index of the array ////////////



//////////// Explain recursive function with example =>

//   function factorial(n) {
    
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5)); 


// const fibonachi = (n)=>{
//   if(n === 1 || n === 2){
//     return 1
//   }

//   return fibonachi(n-1) + fibonachi(n -2)
// }

// console.log(fibonachi(5));


////////////End of Explain recursive function with example ////////////


//////////// write a function for calculate invoice for given basket =>

// const products = [
//   { id: 1, name: 'tv', price: 10000 },
//   { id: 2, name: 'mobile', price: 4000, discount: 1000 },
//   { id: 3, name: 'pc', price: 25000, discount: '5' },
//   { id: 4, name: 'mac', price: 30000, discount: '10' },
// ];

// const basket = [
//   { id: 1, pId: 2, qty: 3 },
//   { id: 2, pId: 4, qty: 2 },
//   { id: 3, pId: 3, qty: -1 },
// ];



// const generateInvoice = (products, basket)=>{
//   let total = 0;

//   basket.forEach(item => {
//     let product = products.find(product => product.id == item.pId);
//     if(product){
//       let itemPrice = product.price;
//       if(product.discount){
//         itemPrice -= typeof product.discount === 'number' ? product.discount : (product.price * product.discount) / 100
//       }

//       const itemTotal = itemPrice * item.qty;
//       total += itemTotal
//     }
//   })
//   return total
// }


// console.log(generateInvoice(products, basket));

////////////End of write a function for calculate invoice for given basket ////////////
    