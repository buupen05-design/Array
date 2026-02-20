
// 1Write a code to find and print all even numbers from the array `[1, 2, 3, 4, 5, 6, 7, 8, 9]`.
// const even =()=>{
//     let arr =[1,2,3,4,5,6,7,8,9];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             console.log(arr[i])
//         }
//     }
// }
// even()
//  2- Write a code to find and print all odd numbers from the array `[10, 15, 20, 25, 30]`.
// const odd =()=>{
//     let arr = [10,15,20,30]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//             console.log(arr[i])
//         }
//     }
// }
// odd()
// 3- Write a code to calculate and print the sum of all elements in the array `[5, 10, 15]`
// const sumarray =()=>{
//     let arr=[5,10,15]
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         sum = sum+arr[i]
//     }
//     console.log(sum)

// }
// sumarray()



// 4. Find Maximum Value:
//  - Write a code to find and print the maximum value in the array `[3, 5, 7, 2, 8]`.
// const maxvalue =()=>{
//     let arr =[1,2,3,4,5,6,20,8]
//     let max =[0];
//     for(let i=1;i<=arr.length;i++)
//     {
//         if(arr[i]>max){
//             max=arr[i]
            
//         }
        
//     }
//     console.log(max)

// }
// maxvalue()

//  - Write a code to find and print the minimum value in the array `[12, 4, 6, 9, 1]`
// const minvalue = ( )=>{
//     const arr = [12,4,6,9,1]
//     let min = arr[0];
//     for(i=1;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i];
//         }
//     }
//     console.log(min)
// }
// minvalue()

// Count Array Elements:
//  - Write a code to count and print the number of elements in the array `[8, 3, 7, 5]`.
// const count=()=>{
//     let arr=[5,6,37,2]
//     console.log(arr.length)

// }
// count()

// array Elements:
//  - Write a code to multiply all elements in the array `[2, 3, 4]` and print the result.
// const multiply=()=>{
//     let arr=[2,3,4]
//     let mul=1
//     for(i=1;i<=arr.length-1;i++){
//         mul=mul*arr[i]
        

//     }
//     console.log(mul)
// }
// multiply()

//  8- Write a code to check if the number `7` is present in the array `[5, 6, 7, 8]` and print "Found"
// or "Not Found".
// const findnumber =()=>{
//     let arr =[5,6,7,8];
//     if(arr.indexOf(7)!==-1){
//         console.log("Found")
//     }
//     else{
//         console.log("Not found")
//     }
// }
// findnumber()
//  - 9Write a code to remove duplicate elements from the array `[1, 2, 2, 3, 4, 4, 5]` and print the
// new array.
// const del =()=>{
//     let arr =[1,2,2,3,4,4,5];
//     arr.splice(2,1)
//     arr.splice(4,1)
//     console.log(arr)

// }
// del()

// 10 - Write a code to create a new array containing the squares of the elements from the array `[1,
// 2, 3]`.
// const sqr =()=>{
//     let arr=[1,2,3]
//     let squares = []
    // let mul =1;
    // for(let i=0;i<arr.length;i++){
    //     squares.push(arr[i]**2)
        // console.log(squares)
        

//     }
//     console.log(squares)

    
// }
// sqr()

//11  - Write a code to filter and print numbers greater than `10` from the array `[5, 12, 7, 14, 3]`.
// const fil =()=>{
//     let arr=[5,12,14,3,24]
//     for(let i=0;i<arr.length;i++ ){
//         if(arr[i]>10){
//             console.log(arr[i])
//         }
//     }
// }
// fil()

// -12 Write a code to combine the arrays `[1, 2, 3]` and `[4, 5, 6]` into a single array.
// let arr = [1,2,3]
// let arr2=[4,5,6]
// let combine = arr.concat(arr2);
// console.log(combine)

//  -13 Write a code to print the length of the array `[9, 7, 5, 3, 1]`.
// let arr = [9,7,5,3,1]
// console.log(arr.length)

//  -14 Write a code to calculate and print the average of the numbers in the array `[10, 20, 30]`.
// let arr =[10,20,30]
// let sum =0
// for(i=0;i<arr.length;i++){
//     sum = sum+arr[i]
// }
// console.log(sum)
// let average=sum/arr.length
// console.log(average)

//  -15 Write a code to reverse the array `[1, 2, 3, 4, 5]` and print the reversed array.
// const reverse =()=>{
//     let arr =[1,2,3,4,5]
//     for(i=arr.length;i>=0;i--){
//         console.log(arr[i])
//     }
// }
// reverse()

//  - 16 Write a code to find and print the common elements between the arrays `[1, 2, 3]` and `[2, 3,
// 4]`.
// let arr = [1, 2, 3];
// let arr1 = [2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr1.length; j++) {
//         if (arr[i] === arr1[j]) {
//             console.log(arr[i]);
//         }
//     }
// }

//  - 17Write a code to split the array `[1, 2, 3, 4, 5]` into two arrays: one with the first half and one
// with the second half

// let combine = [1,2,3,4,5]
// let arr1 =[]
// let arr2=[]


// 18 - Write a code to find the index of the element `5` in the array `[10, 20, 5, 30]`.
// let arr = [10,20,5,30]
// console.log(arr.indexOf(5))

// -19 Write a code to check if the number `4` is in the array `[2, 4, 6, 8]` and print "Yes" or "No"
// let arr = [2,4, 6, 8];

// if (arr.indexOf(4) !== -1) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }
//  - 20Write a code to create a new array containing the lengths of each string from the array
// `["apple", "banana", "cherry"]`.
let arr = ["apple", "banana", "cherry"];
let lengths = [];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i].length)
    lengths[i] = arr[i].length;
}

console.log(lengths);


