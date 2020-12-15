'use strict';

// class: template
 // object: instance of a class
 // JavaScript classes
 // -ntroduced in ES6
 // -syntactial sugar over prototype-based inheritance

 // 1. Class declarations
 class Person {
     //constructor
     constructor(name, age) {
         //fields
         this.name = name;
         this.age = age;
     }

     // methods
     speak() {
         console.log(`${this.name}: hello!`);
     }
 }

 const ellie = new Person('ellie', 20);
 console.log(ellie.name);
 console.log(ellie.age);
 ellie.speak();