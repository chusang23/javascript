'use strict';

let globalName = 'global Name';
{
let name = 'elile';
name = 'hello';
console.log(name);
console.log(globalName);
}

{
    age = 4;
    var age;
}

console.log(age);

const daysInWeek = 7;
const maxNumber = 5;