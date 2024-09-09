// use of modules=jitni b functions br br use hote h unka ek module bna lete hish se load km ho jata h 
//ek js file se dusri js file k function ko call krne ko module bolte h
//js file k andr k function ko component bola jata h
//modules k andr 2 function(keywords) hote h 1 import 2 export 
//js file k thrue he function ko call  kiya jata h multiple file of js ko 
//ek file se dushri file m import and export krte h
//ek he br import kr k jitni br b export krna ho kr sakte h



//import file

import  add  from "./main.js"
let x =parseInt(prompt("Enter 1 Number"))
let y = parseInt(prompt("Enter 2 Number"))

let an = add(x,y)
let h = document.getElementById('an')
h.innerHTML=an

//multi js file import

import multi from "./multi.js"
let c =parseInt(prompt("Enter 1 Number"))
let d =parseInt(prompt("Enter 2 Numbefr"))
 let an1 = multi(c,d)
 let hh = document.getElementById('an1')
 hh.innerHTML=an1


 //divide js file import

import divide from "./divide.js"
let e =parseInt(prompt("Enter 1 Number"))
let f =parseInt(prompt("Enter 2 Numbefr"))
 let an2 = divide(e,f)
 let hhh = document.getElementById('an2')
 hhh.innerHTML=an2















