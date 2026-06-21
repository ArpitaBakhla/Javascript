//singleton object : const obj=new Object()
//non-singleton object : const obj={}
//Object.create
const key1=Symbol("key")


//Object literals
console.log(user.email);
console.log(user["email"]);
console.log(user[key1]);

user.email="as@gmail.com"
console.log(user.email);
//Object.freeze(user)
user.email="ba@gmail.com"
console.log(user.email);

user.greeting=function(){ //commented the freeze function to use this
    console.log("hello");
    }

console.log(user.greeting());
    
user.greeting1=function(){ //commented the freeze function to use this
    console.log(`hello ${this.name}`);
    }

console.log(user.greeting1());




