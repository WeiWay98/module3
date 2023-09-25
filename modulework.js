const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
      let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
      console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
      return 'Nice to meet you.';
    }
  }

  const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
      let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
      console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
      if (person.numFingers === 6) {
        return "Hello. My name is Inigo Montoya. You killed my father. Prepare to die";
      } else {
        return 'Nice to meet you.';
      }
    }
  }

  const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
      let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
      console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: person =>
      person.numFingers === 6
        ? "Hello. My name is Inigo Montoya. You killed my father. Prepare to die"
        : 'Nice to meet you.'
  }



  const basketballGame = {
    score: 0,
    fouls: 0, 
  
    freeThrow() {
      this.score++;
      return this;
    },
  
    basket() {
      this.score += 2;
      return this;
    },
  
    threePointer() {
      this.score += 3;
      return this;
    },
  
    halfTime() {
      console.log('Halftime score is ' + this.score + ', fouls: ' + this.fouls);
      return this;
    },
  
    fullTime() {
      console.log('Full-time score is ' + this.score + ', fouls: ' + this.fouls);
      return this;
    },
  
    incrementFoul() {
      this.fouls++;
      return this;
    }
  };
  
  
  basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().incrementFoul().fullTime();

function printObjectProperties(cityObject) {
  for (let property in cityObject) {
    console.log(`${property}: ${cityObject[property]}`);
  }
}

const sydney = {
  name: 'Sydney',
  population: 5_121_000,
  state: 'NSW',
  founded: '26 January 1788',
  timezone: 'Australia/Sydney'
};

printObjectProperties(sydney);

const newCity = {
    name: 'New York',
    population: 8_336_817,
    state: 'New York',
    founded: 'September 1624',
    timezone: 'America/New_York'
  };
  
  printObjectProperties(newCity);


  let moreSports = [...teamSports]; 
moreSports.push('Tennis', 'Soccer'); 
let dog2 = 'Fido';
let cat2 = { ...cat1, name: 'Whiskers' };
console.log(teamSports); // ['Hockey', 'Cricket', 'Volleyball']
console.log(dog1); // 'Bingo'
console.log(cat1); // { name: 'Fluffy', breed: 'Siberian' }
let moreSports = [...teamSports, 'Tennis', 'Soccer'];
let cat2 = { ...cat1, name: 'Whiskers' };


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  
  const person1 = new Person('Alice', 25);
  const person2 = new Person('Bob', 30);
  console.log(person1); // Person { name: 'Alice', age: 25, human: true }
  console.log(person2); // Person { name: 'Bob', age: 30, human: true }
  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.human = true;
    }
  }
  
  const person3 = new PersonClass('Charlie', 22);
  console.log(person3);
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = function() {
      return this.age >= 18
    };
  }
  
  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.human = true;
    }
  
    canDrive() {
      return this.age >= 18
    }
  }
  
  const person4 = new Person('David', 18);
  console.log(person4.canDrive()); // true
  
  const person5 = new PersonClass('Eve', 14);
  console.log(person5.canDrive()); // false