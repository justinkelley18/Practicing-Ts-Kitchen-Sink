"use strict";
var userName = 'Justin';
var numberOfStates = 50;
var sum = 5 + 4;
var display = typeof alert != "undefined" ? alert : console.log;
var sayHello = function () { return display('Hello World!'); };
var checkAge = function (name, age) { return age < 21 ?
    display("Sorry " + name + ", you aren't old enough to view this page!") :
    undefined; };
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
var vegetables = ['Asparagus', 'Broccoli', 'Zuchinni', 'Brussels', 'Corn'];
vegetables.forEach(function (vegetable) { return console.log(vegetable); });
var pet = {
    name: "Rosie",
    age: 1
};
var people = [
    { name: 'Justin', age: 19 },
    { name: 'Emma', age: 18 },
    { name: 'Matt', age: 19 },
    { name: 'Blake', age: 18 },
    { name: 'Mark', age: 17 }
];
people.forEach(function (person) { return checkAge(person.name, person.age); });
var getLength = function (text) { return text.length; };
var check = getLength('Hello World!');
console.log(check % 2 == 0 ? 'The world is nice and even!' : 'The world is an odd place!');
