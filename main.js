'use strict'

let numOrStr = prompt('input number or string');
console.log(numOrStr);
numOrStr = typeof numOrStr === 'string' ? numOrStr.trim() : numOrStr;
console.log(numOrStr);

 switch (numOrStr) {
    case null:
        console.log('ви скасували');
        break;
    case '':
        console.log('Empty String');
        break;
    default:
        isNaN(+numOrStr) ? console.log(' number is Ba_NaN') : console.log('OK!');
        break;
 }