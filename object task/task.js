//object for imploye
//name age contact2 address 2 in array salary (nested object) annual income and monthly income and leave in a month and in aa year post

let ob ={
    namee : "Deepika",
    age : 30,
    contact : [25858745, 254789746],
    address : ["bhopal","indore"],
    post : confirm,
    salary : {
        yearly : 120000,
        monthly : 100000
    },
    leave : {
        year : 12,
        mont : 2

    },
}
console.log(ob);

ob.salary.yearly=60000;
ob.salary.monthly=50000;
console.log(ob);

ob.leave.year=6;
ob.leave="conditional=10"
ob.leave.mont=2;
console.log(ob)

ob.post= "software Engennier"

delete ob.age
console.log(ob);