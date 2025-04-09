🧠 JavaScript Operators & Expressions – Summary

✅ 1. Basic Concepts

Operators: Symbols used to perform operations on values and variables.

Operands: The values or variables on which operators act (e.g., x + y, here x and y are operands).

Expressions: Combinations of operands and operators (e.g., x + y).

➕ 2. Types of Operators
Arithmetic Operators: +, -, *, /

Assignment Operators: =, +=, -=, *=, /=, etc.

Comparison Operators: ==, ===, !=, !==, >, <, >=, <=

Logical Operators: &&, ||, !

Bitwise Operators: &, |

Conditional (Ternary) Operator: condition ? val1 : val2

Nullish Coalescing Operator (??): Returns right-hand operand if the left-hand is null or undefined.

Typeof Operator: Returns a string indicating the type of operand.

Instanceof Operator: Checks whether an object is an instance of a specific class or constructor.

🔄 3. Unary Operators

Post-Increment (count++): Returns value first, then increments.

Pre-Increment (++count): Increments first, then returns value.

❓ 4. Equality

==: Loose equality (compares values only).

===: Strict equality (compares both values and types).

Example:
```
0 == false // true
0 === false // false
```
⚠️ 5. NaN (Not a Number)

Special value that indicates a value is not a legal number.

📦 6. Object Comparison
Two objects are never equal (=== or !==) unless they refer to the same memory reference.

🔗 7. Logical Operations
AND (&&): Returns the first falsy value or last truthy one.

OR (||): Returns the first truthy value.

Example:
```
"cow" && "horse" // "horse"
"cow" || "horse" // "cow"
```
❓ 8. Nullish Coalescing (??)

Returns right-hand value only if left-hand is null or undefined.

Example:
```
null ?? "default" // "default"
false ?? "default" // false
```
🔁 9. Conditional (Ternary) Operator
Syntax: condition ? value_if_true : value_if_false

Example:
```
age >= 60 ? "Senior citizen" : "Non-senior citizen"
```
📦 10. Bitwise Operators

AND (&), OR (|), used for low-level bit operations.

🧮 11. Operator Precedence & Grouping

Parentheses can change the order of evaluation.

Example:
```
p + q * r // `*` has higher precedence than `+`
```
📌 12. Typeof Operator

Returns the type of a variable as a string.
```
typeof "hello" // "string"
typeof 42      // "number"
```
📌 13. Instanceof Operator
Checks whether an object is an instance of a constructor.
```
obj instanceof Object // true
```
