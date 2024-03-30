      // 5-03-24 //
// ARRAY ==> Non primitive data type,index and value piar,type of array is object.let arr=[]; 
// Array is a Mutable which means we change the value.


   // BASIC METHODS OF ARRAY //
//1, Shift => It is used to remove the first element from an array. (arr.shift())
//2, Unshift => It is used to add one or more element to the beginning of an array. (arr.Unshift())
//3, Pop => It is used to remove the last element from an array. (arr.pop())
    //ex :-- 
// let arr = [1,2,3,4];
// arr.pop();
// 
// console.log(arr,arr.length,"This is the array after removing the first element")

// // o/p ==> [ 1, 2, 3 ] 3 This is the array after removing the first element
//4, Push => It is used to add one or more elements to the end of an array. (arr.push())
//   ex :-- 
// let arr = [1,2,3,4];
// arr.push("new element");  
// console.log(arr,arr.length,"This is the array after removing the first element")
// // o/p ==> [ 1, 2, 3, 4, 'new element' ] 5 This is the array after removing the first element //

//1, Length property => It is used to return the length of an array. (arr.length)
// let arr = [1,2,3,4];
// console.log(arr.push(),"this is the shift of an array");
// arr.shift();
// arr.unshift("0");
/// o/p ==> 4 this is the length of an array 


// console.log(arr,arr.length,"This is the array after removing the first element")


//  //SPECIAL OPERATOR => delete operator very poor practice to use it,

// delete arr[1];
// console.log(arr,arr.length,"This is the array after removing the first element");

// // CONVERT ARRAY INTO STRING //
//3, => It is used to converter an array to a string. (arr.tostring())
//   let arr=[1,2,3,4,5];
//   console.log(typeof arr.toString(),"This is the type");
// //o/p ==> string This is the type //

//4, Array.at => It is used to return the element at a specified index. (arr.at(index))
// let arr=[1,2,3,4];
// console.log(arr.at(2),"This is the element at a specified index");
// // o/p ==> 3 This is the element at aspecified index //
// INDEX ==> defines the positon of inside element 

//5, concat => It is uesd to join two or more arrays. (arr.concat(array1,array2,array3))
// let arr1 = [1,2,3,4];
// let arr2 = [9,8,7,6];
// console.log(arr1.concat(arr2,[5,6]),"This  is the joined array");
// // o/p ==> [
    //   1, 2, 3, 4, 9,
    //   8, 7, 6, 5, 6
    // ] This  is the join array //

//6, CopyMethod => It is used to copy a part of an array to another location in the same array. (arr.copywithin(target,start,end))
// let arr = [1,2,3,4,5];.in(3,1),"This is the copied method");     
// // o/p ==> [ 1, 2, 3, 2, 3 ] This is the copied method //

//6, Flat method() =>
// let arr1 = [1,2,3,4];
// let arr2 = [6,7,8,9,[0,5,4,[1,2]]]; //depth of array 2.
// console.log(arr2.flat(),"This is the flattened array");
// //o/p ==> [ 6, 7, 8, 9, 0, 5, 4, [ 1, 2 ] ] This is the flattened array //

// Depth ==> dimension of the array.[1,2,3]  depth 1, [1,2,3[1,2]] depth 2
  
//7, Array.isArray() => It is used check whwther an object is an array or not. (Array.isArray(arr))
// console.log(Array.isArray(arr2));

// let arr2 = [1,4,[5,6,7,8,[1,2]]];
// for (let i=0;i<arr2.length;i++){
//     console.log(arr2[i]);
// }
   // o/p ==>1
           //4
           // [ 5, 6, 7, 8, [ 1, 2 ] ] //

