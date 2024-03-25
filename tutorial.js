// console.log("hello world!");
/**
 * Das hier ist ein Multiline-Comment
 */

// !Achtung! var ist veraltet und sollte heute NICHT mehr verwendet werden!
var x = 10;

// Let there be light!
let y = 20; // Variable Variable
const z = 30; // Constant => Konstante Variable

console.log(y, z);
y = y + 5;
// z = z + 5; Konstante sind konstant; Dürfen sich nicht ändern

console.log(y, z);

let greeting = "Hallo, wie geht's?";
console.log(greeting);
let singleQuotes = 'Hey, how are you?';
console.log(singleQuotes);

let myName = "Tobiwobi";

const age = 25;

let interpolatedString = `Hi, mein Name ist ${myName} und ich bin ${age} alt.`;

console.log(interpolatedString);

/**
 * In C# string x = """
 * multiline-string
 * """
 */
console.log(`\
test
    me
${age}
`);

let myVar;

myVar = "10";

console.log(typeof(myVar));

myVar = 10;

console.log(typeof(myVar));

function greetMe(name) {
    console.log(`Hey ${name}!`);
    return "demo";
}

let returnValue = greetMe(myName);
console.log(returnValue);

/**
 * Das JavaScript Array ist der C# ArrayList ähnlich.
 */
let myArray = []; // oder = [1,2,3]
myArray.push(1);
myArray.push(2);
myArray.push(3);
console.log(myArray);
console.log(myArray.pop());
console.log(myArray[0]);
