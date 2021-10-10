const person = {
    firstName: "Developer",
    lastName: "Designer",
    city: "LA",
    state: "US",
    zipCode: 8899
};

const {firstName, lastName} = person;
const {city, state} = person;

console.log(`${firstName} ${lastName}`);

//the same:
console.log(`${state}`);
console.log(person.state);