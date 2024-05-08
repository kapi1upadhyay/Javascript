function addtwonumbers(num1, num2) {
    console.log(num1+num2);
}

addtwonumbers(10,1)

function print(...a) //rest operator
{
    return a;
}

console.log(print(200,300,400)); //[ 200, 300, 400 ]

const user= {
    username:'kp',
    userfullname:'bh'
}

function print(anyobject) {
    console.log(`My full name is ${anyobject.userfullname} and username is ${anyobject.username}`)
}

print(user)

function add(num1, num2){
    return num1+num2;
}
console.log(add(2,3));

const add1= function(num1, num2) {
    return num1+num2;


}

console.log(add1(2,3));

const add2= (num1, num2) => {
    return num1+num2;


}

console.log(add2(2,3));

withoutreturnarrowfunction
const add2= (num1, num2) => (num1+num2)
console.log(add2(2,3));

IIFE(Immediately Invoked Function Expressions)

(
    ()=> {
        console.log("yes");
    }
)();
