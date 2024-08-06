let ob = {
    namee : "Deepika",
    city : "bpl",
    contact : 9993915009,
    address : ["Indore", "canada"]
}
//get address canada with the help of indexing in array
console.log(ob.address[1]);
//for key print
let k = Object.keys(ob)
//for all kye
console.log(k);
//for single kye
console.log(k[3])

//for delet any key delete.name of the kye
delete ob.namee
console.log(ob);

//for add any kye
ob.age=3
console.log(ob);

//for upadate variable
ob.city="America";






