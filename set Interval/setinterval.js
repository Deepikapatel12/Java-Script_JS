//set interval as a loop work krta h
//set interval as a function work krta h and time limit k sath jitna time dete h continusly utne time k bt continusly work krt rhta h
//function k andr function pass krte h to bo call back function hita h
//let a=document.getElementById('count')
//var p
//function startt(){
 // p=setInterval(()=>{ console.log(1) },200)
 //p=setInterval(()=>{ a.innerHTML=1 },200)
//}
    

//startt()
//function stop(){
 //   clearInterval(p)
//}



var b
var count=0
function t(){
    let time=document.getElementById('time')
b=setInterval(()=>{
    let aa=new Date()
    let tim=aa.toLocaleTimeString()
    time.innerHTML=tim},1000)
// let t= new Date()
// console.log(t)
// console.log(t.toLocalTimeString())
}
t()
function t1(){
    clearInterval(b)
}
