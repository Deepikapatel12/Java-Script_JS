// let obj = {
//     namee : "Deepika",
//     city : "bpl",
//     contact : "9131976783",
//     //nested object
//     account :{
//         ac_name : "SBI",
//         ac_num : 21585265,
//         ac_bal : 1200
//     }

// }
// console.log(obj)
// console.log(obj.account.ac_bal);
// //for only print one of these  object name and key
// console.log(obj.city)
// //only print values of the keys

// let u= Object.values(obj)
// console.log(u);
// console.log(u.u[2]);

//for print object keys
let obj1 = {
    nameee : "deepu",
    cityy : "bpl",
    contactt : "91131976783"
}
//for in ek loop h jiska use kye values ko print krne k liye hota h
for(let k in obj1){
    console.log(k);
    console.log(obj1[k]);
}


