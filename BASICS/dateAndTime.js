let mydate=new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
//console.log(mydate.toFixed());
//console.log(mydate.toPrecision());
console.log(typeof mydate);

let date=new Date(2026,0,6)
let date1=new Date(2026,0,6,5,6)
let date2=new Date("2026-01-6")
let date3=new Date("12-4-2026")

console.log(date.toLocaleString());

console.log(date1.toLocaleString());

console.log(date2.toLocaleString());

console.log(date3.toLocaleString());

let date4=Date.now()
console.log(date4);

console.log(date.getTime());

console.log(Math.floor(Date.now()/1000));

console.log(mydate.getMonth()+1);

console.log(date.getDay());


date.toLocaleString('default',{
    weekday:"long"
})
console.log();


