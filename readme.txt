Anonymous Func
immediately invoked function javascript 
Auto Call hota h 
INTERMEADITE JAVASCRIPT START
{
Regular Expresion ko short form m regix kha jata h 
ex 1
let text = "I love React and JavaScript!";
console.log(text.match(/javascript|nodejs|react/i));

ex 2
let text = "d";
console.log(text.match(/[a-d]/));

ex 3 
let text = "t";
console.log(text.match(/[a-zA-Z]/));

ex 4
console.log(text.match(/[a-z]/i));

ex 5
console.log(text.match(/[a-zA-Z0-9]/));

ex 6
let text = "Just some text.";
console.log(text.match(/./g));

ex 7
let text = "Just some text.";
console.log(text.match(/\./g));

ex 8
let text = "In the end or at the beginning?";
console.log(text.match(/\bin/gi));

ex 9
let nr = 357;
console.log(nr.match(/3/g));

ex 10
let text = "I love JavaScript!";
console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi)
