function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom;
return function () {
        currentCount += incrementBy;
        console.log(currentCount)
        return currentCount;
    };
}

let counter1 = makeCounter(5); // start from 5

counter1(); //6
counter1(); //7

let counter2 = makeCounter();
counter2(); // 1
counter1(); // 3 (counter 1 will continue from where is left off)

let counter3 = makeCounter(5); // Start from 5
counter3(); // 6
counter3(); // 7

let counter4 = makeCounter(10, 2); // Start from 10 and increment by 2
counter4(); // 12
counter4(); // 14



// What order will the four tests below print in? Why? - #4 which is not delayed at all, then #3 which is delayed by 0ms, then #2 then #1, why? due to the increments of time as they up it is important
// to remember even though #3 is specified at 0ms, #4 will still begin beofre it becuase it was no value attached to it meaning it will always go first in line //

const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
  };

  const timeout1 = setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
  const timeout2 = setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
  const timeout3 = setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
  delayMsg('#4: Not delayed at all');

  const timeout5 = setTimeout(delayMsg, 11000, '#5: delayed by 11 seconds');
  
  clearTimeout(timeout5);




  function printMe() {
    console.log('printing debounced message')
    }
    printMe = debounce(printMe); //create this debounce function for a)
    //fire off 3 calls to printMe within 300ms - only the LAST one should print, after
    1000ms of no calls
    setTimeout( printMe, 100);
    setTimeout( printMe, 200);
    setTimeout( printMe, 300);

    function debounce(func) {
        let timeout;
      
        return function () {
          const context = this;
          const args = arguments;
      
          clearTimeout(timeout);
      
          timeout = setTimeout(function () {
            func.apply(context, args);
          }, 1000);
        };
      }
      
      function printMe(message) {
        console.log(`Printing: ${message}`);
      }
      
      const debouncedPrint = debounce(printMe);
    
      debouncedPrint('Message 1');
      debouncedPrint('Message 2');
    
      setTimeout(() => debouncedPrint('Message 3'), 1500);

      function debounce(func, ms) {
        let timeout;
      
        return function () {
          const context = this;
          const args = arguments;
      
          clearTimeout(timeout);
      
          timeout = setTimeout(function () {
            func.apply(context, args);
          }, ms);
        };
      }
      
      function printMe(message) {
        console.log(`Printing: ${message}`);
      }
      
      const debouncedPrint = debounce(printMe, 1000);
      

      debouncedPrint('Message 1');
      debouncedPrint('Message 2');
 
      setTimeout(() => debouncedPrint('Message 3'), 1500);

      

      function printFibonacci() {
        let a = 0;
        let b = 1;
      
        const intervalId = setInterval(() => {
          console.log(a);
      
          const next = a + b;
          a = b;
          b = next;
        }, 1000); 
      
        let iterations = 0;
        const maxIterations = 10; 
      

        const stopPrinting = () => {
          clearInterval(intervalId);
          console.log('Fibonacci printing stopped.');
        };
      
    
        setTimeout(stopPrinting, maxIterations * 1000);
      }
    



      printFibonacci();

      function printFibonacciTimeouts() {
        let a = 0;
        let b = 1;
        let count = 0;
      
        const maxIterations = 10; 
      
        function printNextFibonacci() {
          if (count < maxIterations) {
            console.log(a);
      
            const next = a + b;
            a = b;
            b = next;
      
            count++;
      
            setTimeout(printNextFibonacci, 1000);
          } else {
            console.log('Fibonacci printing stopped.');
          }
        }
      
        printNextFibonacci();
      }
      printFibonacciTimeouts();

      function printFibonacci(limit) {
        let a = 0;
        let b = 1;
        let count = 0;
      
        function printNextFibonacci() {
          if (count < limit) {
            console.log(a);
      
            const next = a + b;
            a = b;
            b = next;
      
            count++;
      
            setTimeout(printNextFibonacci, 1000);
          } else {
            console.log('Fibonacci printing stopped.');
          }
        }
      
        printNextFibonacci();
      }
      
      printFibonacci(10);






      let car = {
        make: "Porsche",
        model: '911',
        year: 1964,
        description() {
          console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
        }
      };
      
      car.description();
      
  
      setTimeout(function() {
        car.description();
      }, 200); 

      //Original car object
let car = {
  make: "Porsche",
  model: '911',
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

let modifiedCar = Object.assign({}, car);

modifiedCar.year = 2022;

modifiedCar.description(); //This car is a Porsche 911 from 2022

//C answer: the description which has been delayed will use the original values and disregard the new ones that were adjusted in question b) and this is due to the object.assign methon which we used to clone
// an object which is a shallow copy

let car = {
  make: "Porsche",
  model: '911',
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

car.description(); 
// Use bind to fix the description method
const boundDescription = car.description.bind(car);

setTimeout(boundDescription, 200); 

// Original car object
let car = {
  make: "Porsche",
  model: '911',
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

// Clone the original car object
let modifiedCar = Object.assign({}, car);

// Modify another property in the cloned object
modifiedCar.make = "Ferrari";

const boundDescription = car.description.bind(modifiedCar);

// Call setTimeout using the bound description method
setTimeout(boundDescription, 200); 



Function.prototype.delay = function(ms) {
  const func = this; 

  return function(...args) {
    setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
};

function multiply(a, b) {
  console.log(a * b);
}

multiply.delay(500)(5, 5); 

Function.prototype.delay = function (ms) {
  const func = this; 


  return function (...args) {
    setTimeout(() => {
      func.apply(this, args); 
    }, ms);
  };
};

function multiply(a, b) {
  console.log(a * b);
}

multiply.delay(500)(5, 5); 


Function.prototype.delay = function (ms) {
  const func = this; 
  return function (...args) {
    setTimeout(() => {
      func.apply(this, args); 
    }, ms);
  };
};


function multiply(...args) {
  let result = 1;
  for (let arg of args) {
    result *= arg;
  }
  console.log(result);
}
multiply.delay(500)(5, 5); 
multiply.delay(1000)(2, 3, 4); 

Function.prototype.delay = function (ms) {
  const func = this; 


  return function (...args) {
    setTimeout(() => {
      func.apply(this, args); 
    }, ms);
  };
};

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

multiply.delay(500)(2, 3, 4, 5); 
multiply.delay(1000)(1, 2, 3, 4); 





function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.toString = function() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  };
}

const person1 = new Person('James Brown', 73, 'male');

console.log(person1.toString());\

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  
  this.toString = function() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  };
}

const person1 = new Person('James Brown', 73, 'male');
const person2 = new Person('Alice Johnson', 28, 'female');


console.log(person1.toString());
console.log(person2.toString()); 


function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  
  // Custom toString method
  this.toString = function() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  };
}

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);

  this.cohort = cohort;
}

const student1 = new Student('Alice Johnson', 28, 'female', '2023 Cohort');

// Using toString method to print details of the student
console.log(student1.toString()); // prints "Name: Alice Johnson, Age: 28, Gender: female"
console.log(`Cohort: ${student1.cohort}`); // prints "Cohort: 2023 Cohort"

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  
  // Custom toString method for Person
  this.toString = function() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  };
}

function Student(name, age, gender, cohort) {
  // Inherit properties from Person using call
  Person.call(this, name, age, gender);

  // Add the cohort property
  this.cohort = cohort;

  // Custom toString method for Student
  this.toString = function() {
    return `${Person.prototype.toString.call(this)}, Cohort: ${this.cohort}`;
  };
}

// Create two Student objects
const student1 = new Student('Alice Johnson', 28, 'female', '2023 Cohort');
const student2 = new Student('Bob Smith', 22, 'male', '2022 Cohort');

// Using toString method to print details of the students
console.log(student1.toString());
console.log(student2.toString());







class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

// Example usage:
const myClock = new DigitalClock('my clock:');
myClock.start();

const myPrecisionClock = new PrecisionClock('precision clock:', 500);
myPrecisionClock.start();


class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = '07:00') {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  start() {
    super.start(); // Start the clock as usual
    this.timer = setInterval(() => {
      const currentTime = new Date();
      const currentHours = currentTime.getHours();
      const currentMinutes = currentTime.getMinutes();
      const [alarmHours, alarmMinutes] = this.wakeupTime.split(':').map(Number);

      if (currentHours === alarmHours && currentMinutes === alarmMinutes) {
        console.log('Wake Up');
        this.stop(); // Stop the clock when it's time to wake up
      }
    }, 1000);
  }
}

// Example usage:
const alarmClock = new AlarmClock('alarm clock:', '08:30'); // Set wakeupTime to 08:30
alarmClock.start();



function randomDelay() {
  const minDelay = 1000; // 1 second (in milliseconds)
  const maxDelay = 20000; // 20 seconds (in milliseconds)

  const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Execution delayed for ${delay / 1000} seconds`);
    }, delay);
  });
}

// Example usage:
randomDelay()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

  function randomDelay() {
    const minDelay = 1000; // 1 second (in milliseconds)
    const maxDelay = 20000; // 20 seconds (in milliseconds)
  
    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay);
  
    return new Promise((resolve, reject) => {
      if (delay % 2 === 0) {
        setTimeout(() => {
          resolve(`Successful delay for ${delay / 1000} seconds`);
        }, delay);
      } else {
        setTimeout(() => {
          reject(`Failed delay for ${delay / 1000} seconds`);
        }, delay);
      }
    });
  }
  
  // Example usage:
  randomDelay()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });
    randomDelay()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(`Error: ${error}`); // Print an error message for rejected promises
    });
    randomDelay()
    .then((message) => {
      console.log(`Resolved: ${message}`);
    })
    .catch((error) => {
      console.error(`Rejected: ${error}`);
    });
  











    import fetch from 'node-fetch';

globalThis.fetch = fetch;

async function fetchURLData(url) {
  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}
  
import fetch from 'node-fetch'; // Make sure to import 'node-fetch' as shown in your previous code

globalThis.fetch = fetch;

async function fetchURLsData(urls) {
  try {
    const promises = urls.map(async (url) => {
      const response = await fetch(url);

      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    });

    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    throw error;
  }
}

// Example usage:
const urls = ['https://example.com/api/data1', 'https://example.com/api/data2', 'https://example.com/api/data3'];

fetchURLsData(urls)
  .then((dataArray) => {
    // dataArray contains the JSON data from all URLs
    console.log(dataArray);
  })
  .catch((error) => {
    console.error(error);
  });