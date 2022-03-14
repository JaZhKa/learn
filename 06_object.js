const person = {
    name: 'Yakov',
    age: 26,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    // 'complex key': 'Complex value',
    // ['key_' + (1 + 3)]: 'Computed key', // key_4
    greet() {
        console.log('greet from person');
    },
    info() {
        // console.log('this:', this);
        console.info('Информация о человеке по имени: ', this.name);
    }
};

// console.log(person.name);
// console.log(person['age']);
// const ageKey = person.age;
// console.log(ageKey)
// console.log(person["complex key"]);
// console.log(person.key_4);
// person.greet();

// person.age++;
// person.languages.unshift('by');
// //person['key_4'] = undefined;
// delete person['key_4'];

// console.log(person);
// console.log(person.key_4);

// const name = person.name;
// const age = person.age;
// const languages = person.languages;

// const {name, age: personAge = 10, languages} = person;

// console.log(name, personAge, languages);
// console.log(person);

for (let key in person) {
    if (person.hasOwnProperty(key)) {
    console.log('key:', key);
    console.log('value:', person[key]);
    }
}

// const keys = Object.keys(person); // необязытельно
// Object.keys(person).forEach((key) => {
//     console.log('key:', key);
//     console.log('value:', person[key]);
// });

// Context
// person.info();

const logger = {
    keys() {
        console.log('Object Keys:', Object.keys(this));
    },
    keysAndValues() {
        // Object.keys(this).forEach((key) => {
        //     console.log(`"${key}": ${this[key]}`);
        // });
        Object.keys(this).forEach(function(key) {
            console.log(`"${key}": ${this[key]}`);
        }.bind(this));
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('-----START-----');
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`'${key}': ${this[key]}`);
            if (between && index !== array.length - 1) {
                console.log('----------');
            }
        });
        if (bottom) {
            console.log('-----END-----');
        }
    }
};

// const bound = logger.keys.bind(person);
// bound();
logger.keys.call(person);
logger.keysAndValues.call(person);
logger.withParams.call(person, true, true, true);
logger.withParams.apply(person, [true, true, true]);