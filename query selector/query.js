//tby tag
let head=document.querySelector("h1")
//quaryselctor single node return krega aray formate m
head.style.backgroundColor="green"
//by class
let para=document.querySelector('.para')
para.style.backgroundColor="aqua"
//by id
let btn=document.querySelector('#btn')
btn.style.backgroundColor="pink"




//first type
//btn.addEventListener(event, function(){})  js ki help se alert box creat krne k liye 
//isme event and function pass krte h


btn.addEventListener("click",function(){
    alert("Clicked....!!!!!!")
})

//Second type
//function name andr deke function ko bhr call krna
btn.addEventListener("click",demo)
function demo(){
    alert("Clicked..!!!!!")
}

//third type
//array function pass
btn.addEventListener("click",()=>{alert("Clicked****")})

//query selector all node list ko return krega array formate m

let lis=document.querySelectorAll('li')
lis[0].style.backgroundColor="tomato"
lis[1].style.backgroundColor="blue"
lis[2].style.backgroundColor="pink"


