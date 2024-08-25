function add(){
   let a=(parseInt(prompt("enter 1st no")))
   let b= (parseInt(prompt("enter 2nd no")))
  alert(a+b)
   
}


//ondblclick
function sqr(){
    let d=(parseInt(prompt("enter no")))
   alert (d*d)

}

//button click to increment and click to rest

let co=document.getElementById("co");
let t=0;
function inc(){
   t++;
   co.innerHTML=t;
}

function res(){
   t=0;
   co.innerHTML=t;
}
function dec(){

  if(t!=0)
   {
      t--;
      co.innerHTML=t;
   }
}