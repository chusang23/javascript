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

console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

//6. for..in vs for..of
//for (key in obj)
console.clear();
for(key in ellie) {
    console.log(key);
}

//for(value of iterable)
const array = [1, 2, 4, 5];
for(value of array) {
    console.log(value);
}

// 7. Fun cloning

const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for ( key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);