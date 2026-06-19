const value=100
console.log(value);

const value1=new Number(100)
console.log(value1);
console.log(value1.toString().length);
console.log(value1.toFixed(1));

const value2=123.45
console.log(value2.toPrecision(3));

const value3=10000000
console.log(value3.toLocaleString());
console.log(value3.toLocaleString('en-IN'));



//++++++++++++++++++++++++MATH++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.2));
console.log(Math.ceil(5.6));
console.log(Math.floor(6.6));

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor((Math.random()*10)+1));

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);



