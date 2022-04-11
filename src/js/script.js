"use strict"

alert('hello world!');
const result = confirm("Are you here?");

const answer = +prompt("Вам есть 18?", "18");
console.log (answer + 15);

const answers = [];

answers[0] = prompt("Как ваше имя? ", "");
answers[1] = prompt("Как ваша фамилия? ", "");
answers[2] = prompt("Сколько вам лет?", "");

console.log(typeof(answers))

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(++incr);
console.log(--decr);


console.log("10"* "2");
console.log(2*4 == 8);