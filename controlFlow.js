//Control flow

const login=true
const user=true

if(login && user)
    console.log("Heero");

if(login && user || 2==3)
    console.log("No")


const c=3;

switch (c) {
    case 1:
        console.log("Yes");
    case 3:
        console.log("YESSS");

        
        break;

    default:
        break;
}

const email=""
if(email)
    console.log("got it");
else
    console.log("No");


//False value
false,0,~0, "",Nan, undefined, null, BigInt On

expect this, all come under true

//Truthy
" ", "0", 'false', [], function() {}

//Nullish Coalescing operator(??): null undefined

let val1;

val1=null ?? undefined;
console.log(val1);
val1=10?? 20;
console.log(val1);
val1=null ??10;
console.log(val1);
val1=undefined ?? 10;
console.log(val1);
val1= null ?? 10 ??20 
console.log(val1);

//turney operator
// condtion ?true : false

let p=11;
p>10?console.log("yes"):console.log("No");

//for loop
for (let index = 0; index < 5; index++) {
    const element = index
    console.log(index)
}

//for of

let arr=[1,2,3,4,5]

for(let ar of arr)
    console.log(ar);
