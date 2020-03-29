---
path: basic-swift
date: 2020-03-27T15:10:00.000Z
title: Practical Swift Introduction for JS Developers
description: This is a quick-start guide to developing apps using Swift, from the perspective of a front-end developer who knows JavaScript as the main language. I will be comparing both languages, pointing out the similarities and main differences.
tags: ["swift"]
---

This is not meant to teach you everything there is about Swift — that's what the official swift documentation is for. This guide is meant to get you running as fast and easily as possible.

Swift is a programming language built for developing apps for the Apple ecosystem. It’s somewhat similar to C and Objective-C, which doesn’t mean much to me — if you’re in the same position, this guide is for you.

## Basic syntax

- **Comments** work like in JavaScript. `//` starts an inline comment, `/* ... */` defines a multi-line one.
  - Multiline comments can be nested.
- **Semicolons** aren’t necessary or common.

## Variables and Constants

### Declaration

Variables and constants have to me declared before they can be used.

- **Variables** are defined with `var`. Once a variable is defined, its *type* cannot be changed.
- **Constants** are defined with `let`. Once a constant is defined, its *type* and *value* cannot be changed.

If a value isn’t going to change, always declare it as a constant.

```swift
var myVariable = 10
myVariable = 11 // OK
myVariable = "String" // Error!

let myConstant = 10
myConstant = 11 // Error!
myConstant = "String" // Error!
```

Multiple constants or variables can be declared at once.

```swift
var a = 1, b = 2, c = 3
let a = 1, b = 2, c = 3
```

### Naming

Variable and constant names are very free. They can contain most characters, including emojis and foreign characters like Japanese kanji. They cannot start with a number.

## Types

Swift is type-safe, which means that its variables have types, in contrast to regular JavaScript. We won’t go into the details of all the possible types there are in Swift.
Swift has type inference, which figures out which type to give your variable when you declare it with a value.

```swift
let two = 2 // inferred to be an Int
let pi = 3.14 // inferred to be a Double
let name = "Cécile" // inferred to be a String
```

It’s important to know that a variable’s type cannot be changed, but its value can.

```swift
var welcome: String // A type annotation, which defines the variable's type. Not very common.
welcome = "Welcome!"
welcome = 1 // Error! At compile time.
welcome = "Hi!"
```

### Tuples

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
