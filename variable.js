'use strict';
let globalName = 'global name';
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name);
console.log(globalName);

let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));