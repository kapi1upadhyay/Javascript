
//filter
const books=[
    {
        book:'Prem',
        writer:'PremChandra',
        Publish:21
    }
    ,

    {
        book:'Krem',
        writer:'KremChandra',
        Publish:22
    }
    ,
    {
        book:'Drem',
        writer:'DremChandra',
        Publish:23
    }
    ,
    {
        book:'Trem',
        writer:'TremChandra',
        Publish:21
    }
]

const n=books.filter((bk)=> {
    return bk.Publish===21
})

console.log(n);

const l=[1,2,3]
// const newnumber=l.map((n)=> {
//     return n+10;
// })

//Chaining

// const newN=l.map((num)=>num*3).map((num)=>num+2).filter((num)=>num%2==0)

// console.log(newN);

//Reduce
const newN=l.reduce((acc,cv)=>acc+cv,0)
console.log(newN);
