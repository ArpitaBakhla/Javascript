const arr=[0,1,2,3,4,5,6];
const arr1=new Array(1,2,3,4);
const arr2=["arpita","isha"]

console.log(arr[1]);

arr.push(6);
console.log(arr);
arr.pop(6);
console.log(arr);
    
arr.unshift(9)
console.log(arr);
console.log(arr.includes(9));
console.log(arr.indexOf(9));


arr.shift(9)
console.log(arr);
console.log(arr.includes(9));
console.log(arr.indexOf(9));

const newarr=arr.join()
console.log(arr);
console.log(newarr);
console.log(typeof newarr);


//+++++++slice and splice+++++++++++++++++++++

console.log("A",arr);

const nw=arr.slice(1,3)
console.log("B",nw);
console.log(arr);

const nw1=arr.splice(1,3) 
console.log("C",nw1);
console.log(arr); //splice makes changes in the original array






