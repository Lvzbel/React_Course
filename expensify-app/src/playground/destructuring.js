// ==========================================
// Object Destructuring
// ==========================================

const person = {
  name: 'Rodrigo',
  age: 31,
  location: {
    city: 'Colton',
    temp: 58
  }
}

const { name: firstName = 'Anonymous', age } = person;

const { city, temp: temperature } = person.location;

// console.log(`${firstName} is ${age}.`);

// console.log(`It's ${temperature} in ${city}`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

// ==========================================
// Array Destructuring
// ==========================================

const address = ['1299 S Juniper Street', 'Colton', 'California', '90201'];

const [, city1, state = 'Nevada'] = address;

console.log(`You are in ${city1} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ beverage, , mediumPrice] = item;

console.log(`A medium ${beverage} costs ${mediumPrice}`);

