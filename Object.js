objects
const obj1= {
    Name:"Bhoora",
    Kaam: "free",
    "Full name": "Heera thakur ka beta Bhoora Thakur"
}

console.log(obj1.Name);
console.log(obj1["Full name"])

obj1.Name="Kapil"
Object.freeze(obj1)

obj1.Name="Upadhyay"

console.log(obj1)

obj1.graph=function() {
    console.log("yes");
}

console.log(obj1.graph())

const a1={1:'a', 2:'b'}
const a2={2:'c',3:'d'}

// const a3=Object.assign(a1,a2)
const a3={...a1, ...a2}

// console.log(a3);
console.log(Object.keys(a1))
console.log(Object.values(a2))
console.log(Object.entries(a1))


Object destructure
const biodata={
    name:"kp",
    padai:"thodi",
    kaam:"hai thoda bhut"
}

const{name:bd}=biodata
console.log(bd)
