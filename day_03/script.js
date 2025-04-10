//operator +, -, * , /
//operands x+y ; here x and y are operands
//expressions

//Opertars : Arithmetic, assignment, comparison, relational,logical, bitwise, conditionall
//Grouping: Operator precidence
//typeOf operator
//instranceOf operator

let f_name = "mushi";
let l_name = "cricketer";

console.log(f_name + l_name); //if two varible are string then by + sign they will be concated

// 
let count = 3;
console.log(count++); // count = count +1 (first return the value then increses)
console.log(count)

console.log(++count)// count = count +1; (first increase the value then return)


//differenc ebetween == and ===

console.log(0 == false) // true losley equality: just check the data not data type
console.log(0 === false)// false strict equality : data and dataype comparison must be same

//Nan = not a number

let obj1 = {'name': 'mushfiq'}
let obj2 = {'name': 'mushfiq'}

console.log(obj1 === obj2) //false : memory address are not same
console.log(obj1 !== obj2)

//It will check from the left
//if this first operand converted into false it will return first operand otherwise it will give second operand 
console.log(false && false) // false
console.log(true && false) // false
console.log(true && true) // true
console.log(false && true) // false

//if any other operand is false then the result will be false

console.log("cow" && "horse")// horsse 

//if first operand can be coverted to true it will return first operand otherwise it will return second operand
console.log(false || false) //false
console.log(true || false) //true
console.log(true || true) //true
console.log(false || true) //true

console.log("cow" || "horse") // cow (in JS any positive value you take like string it can be converted into true)


// ??
//if the first operand or expression can be  converted into null or undefined  return the second otherwise return the second
//use in database connection

let a1 = null ?? 1 //1
let a2 = undefined ?? 1 //1

const a3 = false ?? "mushfiq" //false
const a4 = 0 // "mushfiq" //0


//conditional ternary operator
// condition ? val1 : val2
let age = 23 ;


console.log(age>=60?"senior cetigen" : " non senior citizen")

//Bitwise Operator
//& | 

// Grouping
let p =1 
let q =2
let r = 3
console.log(p+q*r)

//typeOf operator return a string which tells the type of oparend

//instanceOf 