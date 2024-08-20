async function fun(){
    let sh = document.getElementById("showdata")
    let a= await fetch("https://jsonplaceholder.typicode.com/posts")
    let b = await a.json()

    let p = b.map((e)=>`
    <tr>
    <td> ${e.id} </td>
    <td> ${e.userId}</td>
    <td> ${e.title}</td>
    </tr>
    
    `).join("")       //hr table k bd coma aa rhe the ish lie join function use kiya coma hatane k liye or kuch add krna h to join function("+ese b kr sakte h ")
    sh.innerHTML=p
}
fun()



