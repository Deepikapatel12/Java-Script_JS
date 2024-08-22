// eg==document.getElementById()
//document=object
//. = axies member by operator
//getElementBYId=function
//===================================================

let r=document.getElementById("head1")
//document.write(r)
console.log(r)
//change content with the help of js head1 is in equal to r so we can target r
//innerhtml target id ka contend chang krta h ya iski help se hm content chang kr sakte h id ko target krkr
r.innerHTML="Hello"
//content ka background color change krne k liye
//.style k bd jo b property use krage bo aply ho jygi 
r.style.backgroundColor="aqua"
//=============================================
//target p1 and head2

let a=document.getElementById("p1")
console.log(r)
a.innerHTML="This practice lesson consists of short paragraphs about interesting subjects. Find fun keyboard typing practice—and learn something new! Our paragraph practice is great typing practice for writing essays, reports, emails, and more for school and work."
a.style.color="green"
//========================================
let b=document.getElementById("head2")
console.log(b)
b.innerHTML="Hii"
b.style.backgroundColor="pink"
// =============================================================
// for image change with the help of js

let im=document.getElementById("img")
im.src="js1.jpeg"
// ========================================================================================================

//with the help of class name

let p=document.getElementsByClassName("p1")
console.log(p)

//with the help of tag name
let t=document.getElementsByTagName("h1")
console.log(t)
//for print give the index value
console.log(t[0])
console.log(t[1])

//for target body
document.body.style.backgroundColor="aqua"

//color only even no of li

let l=document.getElementsByTagName("li")
for( let i=0;i<8;i++)
    {
        if(i%2==0)
        {
            l[i].style.backgroundColor="blue"
        }    
        }

        //creat element in html page in div with the help of js
        let el=document.createElement("h1")
        console.log(el)
        //write somthing in the created element
        //creatTextNode ki help se created element m kuch likh sakte h
        let tx=document.createTextNode("Heading1")
        console.log(tx)
        //text element k ander print krne k liye abhi h1 se bhr h heading1 ab h1 k andr print k liye

        //appendChild function lagate h let m jo b element bnya h us element ka name dete h or uske andr jo p text likha h ush text ka name pass krte h

        el.appendChild(tx)

        //html k div k andr jo js se h1 creat kiya h div k ab=ndr lane k liye
        
        let di=document.getElementById("main")
        di.appendChild(el)

        //second div for paragaraph heading and color
         let d=document.createElement("p")
         let e=document.createTextNode("Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.")
         d.appendChild(e)
         let f=document.getElementById("d2")
         f.appendChild(d)
         let h=document.createElement("h1")
         let he=document.createTextNode("hello hello")
         h.appendChild(he)
         f.appendChild(h)
         f.style.backgroundColor="blue"

          