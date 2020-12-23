// Objects
'use strict'

const obj1 = {};
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

// 2. computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printVlaue(obj, key) {
    console.log(obj[key]);
}

printValue(ellie, 'name');

//3. property vlaue shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = makePerson('ellie', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}