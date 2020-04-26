---
path: basic-swift
date: 2020-03-27
title: Practical Swift Introduction for JS Developers
description: This is a quick-start guide to developing apps using Swift, from the perspective of a front-end developer who knows JavaScript as the main language. I will be comparing both languages, pointing out the similarities and main differences.
tags: ["swift"]
---

This is not meant to teach you everything there is about Swift — that's what the official swift documentation is for. This guide is meant to get you running as fast and easily as possible.

Swift is a programming language built for developing apps for the Apple ecosystem. It’s somewhat similar to C and Objective-C, which doesn’t mean much to me — if you’re in the same position, this guide is for you.

> For this quick-start guide, I will assume you already know modern JavaScript fairly well. I will constantly compare JavaScript and Swift, just to make it easier for us JS-folk.

## Basic syntax

- **Comments** work like in JavaScript. `//` starts an inline comment, `/* ... */` defines a multi-line one.
  - Multiline comments can be nested.
- **Semicolons** aren’t necessary or common.

## Variables and Constants

### Declaration

Variables and constants have to me declared before they can be used. The keywords used for declaring them are sort of opposite to JavaScript's.

- **Variables** are defined with `var`.
- **Constants** are defined with `let`.

> If a value isn’t going to change, always declare it as a constant.

```swift
var myVariable = 10
myVariable = 11
myVariable = "String" // Error!

let myConstant = 10
myConstant = 11       // Error!
```

Multiple constants or variables can be declared at once.

```swift
var a = 1, b = 2, c = 3
let a = 1, b = 2, c = 3
```

### Naming

Variable and constant names are very free. They can contain most characters, including emojis and non-latin characters. They cannot start with a number.

## Types

Like JavaScript, swift has type inference, which figures out which type to give your variable when you declare it with a value.

```swift
let two  = 2        // inferred to be an Int
let pi   = 3.14     // inferred to be a Double
let name = "Snoopy" // inferred to be a String
```

> Swift has two main types of numbers: Integers and Doubles. Integers are whole numbers, while Doubles have decimal points. Math can only happen when all the values are of the same type: If we need to calculate an Integer and a Double together, one of them will have to be converted so they match.
>
> There are other types of numbers in Swift, but no need to discuss them now!

Swift is type-safe. It’s important to know that trying to change a variable's type in this manner will cause an error.

```swift
welcome = "Welcome!"
welcome = "Hi!"
welcome = 1 // Error! At compile time.
```

### Empty variables

If you need to declare an empty variable, you have to declare its type. This is called a type annotation.

```swift
var welcome: String
```

### Type conversion

Types are never implicitly converted.

```swift
let text = "Slices on a medium pizza: "
let slices = 8
let pizzaSize = text + slices          // Error!
let pizzaSize = text + String(slices)  // Works
```

### Variables in strings

However, there's an easier way to do this: The `\()` syntax. It allows us to add a variable, or a math operation, inside a string declaration. *Like JavaScript's backtick syntax with `${}`.*

```swift
let mediumPizza = 8
let largePizza = 12
let mediumStatement = "A medium pizza has \(mediumPizza) slices."
// A medium pizza has 8 slices
let myPizza = "I have \(mediumPizza + largePizza) slices of pizza."
// I have 20 slices of pizza.
```

> That's a lot of pizza!

### Multi-line strings

Multiline strings are declared with `"""String"""`.

```swift
let quote = """
“You have power over your mind - not outside events.
Realize this, and you will find strength.”
— Marcus Aurelius, Meditations
"""
```

## Arrays and Dictionaries

> Dictionaries are objects

Array

```swift
var shoppingList = ["tea", "crackers", "tulips"]

shoppingList[0] = "coffee"

// shoppingList is now
// ["coffee", "crackers", "tulips"]

shoppingList.append("asparagus")

// shoppingList is now
// ["coffee", "crackers", "tulips", "asparagus"]
```

Dictionary

``` swift
var priceList = [
   "tea": 4.99,
   "crackers": 2.50,
   "tulips": 4.00,
   "coffee": 5.99,
]

priceList["asparagus"] = 2.00

// priceList is now
// [
//    "tea: 4.99,
//    "crackers": 2.50,
//    "tulips": 4.00,
//    "coffee": 5.99,
//    "asparagus": 2.00,
// ]
```

### Empty arrays and dictionaries

```swift
var emptyArray = [String]()
var emptyDictionary = [String: Float]()
```

## Tuples

Think of tuples like groups of information, somewhere in between arrays and objects in JavaScript. They contain related values, of any type.

```swift
let http404Error = (404, "Not Found)
// Tuple type (Int, String)
```

Tuples can be decomposed:

```swift
Let (statusCode, statusMessage) = http404Error
print("The status code is \(statusCode)") // 404
```

> `print()` is the equivalent of JavaScript's `console.log()`.

An element inside a tuple can be accessed using index numbers (like JavaScript arrays):

```swift
print("The status code is \(http404error.0)") // 404
```

Elements in a tuple can be named when declaring it:

```swift
let http200Status = (statusCode: 200, description: "OK")
```

The elements can then be accessed using their names (like JavaScript objects):

```swift
print("The status code is \(https200Status.statusCode)") // 200
```

Tuples are not recommended for complex data structure. Use a class or structure instead.

## Basic functionality

Conditionals:

- `if`
- `switch`

Loops:

- `for-in`
- `while`
- `repeat-while`

The condition or loop doesn't need parentheses.
The body must be surrounded by braces.

```swift
let individualScores = [75, 43, 103, 87, 12]
var teamScore = 0
for score in individualScores {
   if score > 50 {
      teamScore += 3
   } else {
      teamScore += 1
   }
}
print(teamScore)
// Prints "11"
```
