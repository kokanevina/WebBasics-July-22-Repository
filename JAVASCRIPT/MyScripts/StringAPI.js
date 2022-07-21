/* constructor functions*/


var s1="hello"; /*direct initialization  : literals */
var s2=new String("Welcome"); /* object created with new. String object */

// string object are immutable
var s3=s1+" world";
s1=s1+" world";
/*String API length, charAt, indexOf , lastIndexOf, concat, startWith, endsWith, slice, substring,
substr(deprecated),toUpperCase, toLowerCase ===*/

let cName="Neosoft Technologies Limited Limit";
console.log(cName);
console.log(cName.length);
let ch=cName.charAt(2);
console.log(ch);
console.log(typeof ch);
let ch1=cName.charAt(50);
console.log(ch1);
console.log(cName.indexOf('os'));
console.log(cName.indexOf('Limited'));
console.log(cName.indexOf('limited'));
let index=cName.toLowerCase().indexOf(('liMIted').toLowerCase());
console.log(index);