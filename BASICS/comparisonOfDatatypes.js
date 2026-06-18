console.log("2">1);
console.log("02">1);

//avoid these tyoes of comparisons
console.log(null>0);
console.log(null==0);
console.log(null>=0); //results as true because comparisons like this convert null to a number 

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);

console.log("2"===0);

const id = Symbol('123')
const id1 = Symbol('123')
console.log(id===id1);

const value=["abc","def","ghi"]
let myObj={
    name:"Arpita",
    age:21,
}

const myFunction=function(){
console.log("Hello World");
}

console.log(typeof id1);
