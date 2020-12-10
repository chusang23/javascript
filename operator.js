console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string litreals: 1 + 2 = ${1 + 2}`);

console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement: ${preIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = --counter;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

let x = 3;
let y = 6;
x += y;
x-= y;
x *= y;
x /= y;

console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i ++) {
        //wasting time
        console.log('holy');
    }
    return true;
}

// ! (not)
console.log(!value1);

const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);