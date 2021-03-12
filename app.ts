const userName = 'Justin';
const numberOfStates = 50;
const sum = 5 + 4;
const display = typeof alert != "undefined" ? alert : console.log;
const sayHello = () => display('Hello World!');
const checkAge = (name: string, age: number) => age < 21 ?
    display("Sorry " + name + ", you aren't old enough to view this page!") :
    undefined;
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
const vegetables = ['Asparagus', 'Broccoli', 'Zuchinni', 'Brussels', 'Corn'];
vegetables.forEach(vegetable => console.log(vegetable));
const pet = {
    name: "Rosie",
    age: 1
};
const people = [
    { name: 'Justin', age: 19 },
    { name: 'Emma', age: 18 },
    { name: 'Matt', age: 19 },
    { name: 'Blake', age: 18 },
    { name: 'Mark', age: 17 }
];
people.forEach(person => checkAge(person.name, person.age));
const getLength = (text: string) => text.length;
const check = getLength('Hello World!');
console.log(check % 2 == 0 ? 'The world is nice and even!' : 'The world is an odd place!');