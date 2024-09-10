// map ek function h array ka jo ki data  ko fatch kr kr ek array bna k return krta h
//ye ek callback function leta h

let product =[
    {
        namee:"hp",
        generation:"11th",
        series:"corporate",
        age:25
    },
    {
        namee:"dell",
        generation:"8th",
        series:"home",
        age:19
    },
    {
        namee:"dell",
        generation:"8th",
        series:"home",
        age:32
    }
]
let arrr =product.map((e)=>{return e})
console.log(arrr);
let arr1 =product.map((e)=>{return e.namee})
console.log(arr1)
//to generate square of age
let arr2=product.map((e)=>{return e.age*e.age})
console.log(arr2)



//filter function is use for filterout the data of any specific condition

let f= product.filter((a)=>{return a.age>20})
console.log(f)