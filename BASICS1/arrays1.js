const string1=['a','b','c','d']
const string2=['e','f','g','h']

string1.push(string2)
console.log(string1);

const string3=['i','j','k','l']
const all=string3.concat(string2)
console.log(all);
const all1=[...string3,...string2]
console.log(all1);

const arr4=[1,2,3,[4,5],[6,7,8,[9,10]]]
console.log(arr4.flat(Infinity));

console.log(Array.isArray("arpita"));
console.log(Array.from("arpita"));
console.log(Array.from({name:"arpita"})); // gives [] as an output if cannot convert it into an array

const v1=100
const v2=200
const v3=300
console.log(Array.of(v1,v2,v3));

