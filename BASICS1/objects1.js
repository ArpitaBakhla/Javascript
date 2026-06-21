const obj = {
  name : "arpita",    
  email : "as@gmail.com",
  fullname :{
    userfullname:{
        firstname:"arpita",
        lastname:"bakhla"
    }
  }
}
console.log(obj.fullname.userfullname.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign({},obj1,obj2) //here we take "{}" as an empty target where all the arrays will get stored; also its optional i,e if we do not use"{}" then the other arrays will get stored in obj1
console.log(obj3);

//objects inside arrays
/*const users=[
    {
        id:1,
        name:"arpita"
    },
    {
        id=2,
        name1="supriya"
    }
]*/


console.log(obj);
console.log(Object.keys(obj)); //output in the form of arrays//
console.log(Object.values(obj)); 
console.log(Object.entries(obj)); 

console.log(obj.hasOwnProperty('email'));

/*
const user={
    name:"arpita",
    //[key1]:"mykey1",
    age:21,
    location:"ranchi",
    email:"arpita@gmail.com",
    lastlogindays:["Monday","Saturday"]
}
const{email}=user
console.log(email);
*/