const fs = require('fs');

const genders = ['M', 'F'];

const femaleNames = ['Alice', 'Emma', 'Eva', 'Nina', 'Judith', 'Monica'];

const maleNames = ['Dario', 'Pilip', 'Adam', 'John', 'Tom', 'Niko'];

const lastName = ['Whisky', 'Gin', 'Beer', 'Wine', 'Vodka', 'Tequila'];

const randChoice = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

const people =[];

for (let i = 1; i < 20; i++) {

    let person ={};

    person.gender= randChoice(genders);

    if (person.gender === 'M' ){
        person.name = randChoice(maleNames);
    } else {
        person.name = randChoice(femaleNames);
    }

    person.lastName = randChoice(lastName);

    person.age= Math.floor(Math.random() *(78 - 18 + 1)) + 18;

    people.push(person);
}
    const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('File has been successfully generated! Check people.json');
  });