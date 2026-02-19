
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
const sqr =()=>{
    let arr=[1,2,3]
    let squares = []
    // let mul =1;
    for(let i=0;i<arr.length;i++){
        squares.push(arr[i]**2)
        // console.log(squares)
        

    }
    console.log(squares)

    
}
sqr()