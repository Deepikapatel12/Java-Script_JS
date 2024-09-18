let a = 16
console.log(Math.sqrt(a));

//max value retrun krta h jo b maximum value h use return krta h
let val = Math.max(12,3,56,7,32)
console.log(val);

//min function minimum value return krta h

let val2 = Math.min(12,58,6,8,4)
console.log(val2);

//power function isme 2 argument pass krte h 
let b = Math.pow(3,2)
console.log(b);


// to remove decimal value use trunc function
let val3 = (23.5885)
let c = Math.trunc(val3)
console.log(c);


//rendom function random value return krta h 0 se 1 k bich ki eg decimal m 
let d = Math.random();
console.log(d);


//+1 krne p ab 1. me no start hoga
let e = Math.random()+1;
console.log(e);


let f = Math.random()+1*5;
console.log(f);


let g = Math.random()*5;
console.log(g);


let h = Math.random()*5+1;
let i = Math.trunc(h)
console.log(i);



function fun(){
    
let hh = document.getElementById("hh");
let he = document.getElementById("he");

hh.innerHTML = Math.trunc(Math.random()*10+1)
he.innerHTML = Math.trunc(Math.random()*10+1)

}

let s ="@"
console.log(s[0])
   


