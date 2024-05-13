//Dom
var a=document.querySelector("h1")
a.innerHTML="Changed"
a.addEventListener("click", ()=> {
    a.innerHTML="DOM"
    a.style.backgroundColor="red"
    a.style.color="Yellow"
})

//Promise

const pro= new Promise(function(resolve, reject){
setTimeout(()=> {console.log("Yes")
resolve(

),1000})
})

pro.then(function(){
    console.log("no")
})
