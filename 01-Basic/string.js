const name = "Arrow"
const rapoCount = 10

// console.log(name + rapoCount + " Value")

console.log(`Hello my name is ${name} and my rapo count is ${rapoCount}`);

const gameName = new String("ArrowCode") // another way to define the string

console.log(gameName[0]) //acess the index charter but its not work like array

console.log(gameName.charAt(3));
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-3, 6)
console.log(anotherString);

const newStringOne = "    hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hitesh.com.hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('openSource'))

console.log(gameName.split('-'));