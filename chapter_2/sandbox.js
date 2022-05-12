// variables
let age = 25;
let year = 2019;

console.log(age, year);

age = 30;
console.log(age);

// constants
const points = 100;
console.log(points);

/// Data Types

/// STRINGS
console.log("Hello, world");
let email = "bill@gmail.com";
console.log(email);

// string concatenation
let firstName = "Bill";
let lastName = "Gee";

let fullName = firstName + " " + lastName;

console.log(fullName);

// getting characters
console.log(fullName[5]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf("@");

console.log(index);

// common string methods
let res = email.lastIndexOf("l");
console.log(res);

let resSlice = email.slice(0, 10);
console.log(resSlice);

let resSub = email.substring(0, 5);
console.log(resSub);

let resReplace = email.replace("b", "w");
console.log(resReplace);

/// NUMBERS
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

/// TEMPLATE STRINGS
const title = "Best read of 2019";
const author = "Mario";
const likes = 30;

// concatenation way
let defaultResult =
  "The blog called " + title + " by " + author + " has " + likes + " likes ";
console.log(defaultResult);

// template literal or template string
let tempLit = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(tempLit);

// Creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>The blog called ${title} by ${author} has ${likes} likes
`;

console.log(html);

/// ARRAYS
let ninjas = ["shaun", "ryu", "chun-li"];

console.log(ninjas[1]);

let ages = [20, 23, 25, 30];
console.log(ages[2]);

console.log(ninjas.length);

// array methods
let resJoin = ninjas.join(",");
console.log(resJoin);

let resConcat = ninjas.concat(["ken", "crystal"]);
console.log(resConcat);

let resPush = ninjas.push("ken");
console.log(resPush);
