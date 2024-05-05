Max element in array
const arr = [1, 2, 3];
const max = Math.max(...arr);

array methods slice and splice
const arr=[12,13,14]
console.log(arr.slice(1,2));
console.log(arr);
console.log(arr.splice(1,2));
console.log(arr);

max element in array:
console.log(Math.max(...arr))

concat and push operation:
const arr1=['1','2','3'];
const arr2=['4','5','6'];

// console.log(arr1.push(arr2));
const allNumebr=arr1.concat(arr2);
console.log(allNumebr)

console.log(arr1);
console.log(arr2);

Spread operator:
const str1=['A','B','C'];
const sr2=['D','E','F'];

const newStr=[...str1,...sr2];
console.log(newStr);

flat function
const arr1=[1,[2,[3,[4]]]];
// const newArray=arr1.flat(Infinity)
console.log(newArray)


console.log(Array.from("kapil")); //[ 'k', 'a', 'p', 'i', 'l' ]
console.log(Array.from({ name:"kapil",roll_no:1 //gives empty array []
}))

Elements to array:
let s1=1;
let s2=2;
let s3=3;

console.log(Array.of(s1,s3,s2)) //const arr = [1, 2, 3];
