//-------------------------------------------------_Strings_-----------------------------------------------------//

// 1. Declare a variable `name` with a string value.
const name1 = "Deckason";

// 2. Console log the length of the string.
console.log("length of the string", name1.length);

// 3. Console log the string in uppercase using a string method.
console.log("string in uppercase using a string method", name1.toLocaleUpperCase());

// 4. Check if the string contains a specific substring or set of characters.
name1.toLocaleLowerCase().includes("dec") ? console.log("yes") : console.log("no")


//---------------------------------------------------- _Numbers_------------------------------------------------//

// 1. Declare a variable `age` with a numeric value.
const age = 20.3

// 2. Console log the type of the variable.
console.log("Type",typeof age);

// 3. Console log the number with 2 decimal places.
console.log("2 decimal places", age.toFixed(2));

// 4. Console log the rounded down value of the number.
console.log("rounded down value of the number", Math.floor(age));


// --------------------------------------------------_Booleans_-----------------------------------------------//

// 1. Declare a variable `isAdmin` with a boolean value.
const isAdmin = true

// 2. Console log the type of the variable.
console.log("type of the variable", typeof isAdmin);

// 3. Console log the negation of the boolean value.
console.log("negation of the boolean value", !isAdmin);

// 4. Use an `if` statement to console log a message if the boolean value is true.
isAdmin ? console.log("Yes"):console.log("No");


// ------------------------------------------------_Arrays_----------------------------------------------//

// 1. Declare a variable `colors` with an array value.
const colors = ["red", "yellow", "green"]

// 2. Console log the number of elements in the array.
console.log("number of elements in the array", colors.length)

// 3. Add a new element to the array.
colors.push("black")
console.log("new element to the array", colors);

// 4. Check if the array contains a specific element.
const colorToCheck = "blue"
const exist = colors.filter(color=> color==colorToCheck)
exist.includes(colorToCheck) ? console.log(`${colorToCheck} exist`) : console.log(`${colorToCheck} doesn't exist`)


// ---------------------------------------------------_Objects_-------------------------------------------------//

// 1. Declare a variable `user` with an object value.
const user = {name: "Deckason", age: 21, email: "deck@example.com"}

// 2. Console log the type of the variable.
console.log("type of the variable", typeof user)

// 3. Console log the keys of the object.
console.log("keys of the object", Object.keys(user));

// 4. Console log the values of the object.
console.log("values of the object", Object.values(user));


// --------------------------------------------------_Sets_---------------------------------------------//

// 1. Declare a variable `colors` with a set value
const colors1 = new Set(['red', 'green', 'blue']);

// 2. Console log the number of elements in the set
console.log(colors1.size);

// 3. Add a new element to the set
colors1.add('yellow');
console.log(colors1);

// 4. Check if the set contains a specific element
const hasGreen = colors1.has('green');
console.log(hasGreen);

const hasPurple = colors1.has('purple');
console.log(hasPurple);
