---
path: basic-react
date: 2019-11-29
title: Basics of React
description: "From the ground up: Import, ReactDOM, JSX, Components, Styling, Props, Data, State, and Hooks."
categories: ["react"]
---

## Import

Once `react` and `react-dom` are connected as dependencies, we can import React to our component.

```js
import React from "react"
```

## ReactDOM

React isn't just for front-end web development; we can also build native apps (with React Native). So to be able to render our app to the browser, we need to use `ReactDOM`.

First, import `ReactDOM` to the main component, usually `index.js`. Normally, `ReactDOM` only has to be imported to `index.js`, because everything else is rendered within it.

```js
import React from "react"
import ReactDOM from "react-dom"
```

### Render

`ReactDOM`'s `render` method takes in two parameters:

- What we want to render
- Where we want to render it

```js
ReactDOM.render(whatToRender, whereToRender)
```

- **What to render**: A component or an HTML element.

- **Where to render**: Usually an HTML container element. `document.getElementById("root")` is a good one, if you have an HTML with a `<div id="root"></div>`.

```js
ReactDOM.render(<App />, document.getElementById("root"))
```

## JSX

JSX allows us to ~basically~ write HTML in JavaScript. JSX is included in React, when we `import React from "react"`.

Only one element can be rendered. To render more than one element, they must be wrapped in a container (`<div><More /><Content /></div>`)

### JS in JSX

To add JavaScript inside JSX, just wrap the JavaScript code in curly braces `{variable}`.

```js
const firstName = "Cécile"
const firstName = "Cécile"

const App = () => <h3>My name is firstName + " " lastName</h3> // will literally render 'My name is firstName + " " lastName'

const App = () => <h3>My name is {firstName + " " lastName} // will render 'My name is Cécile Lebleu'

const App = () => <h3>My name is {`${firstName} ${lastName}`} // will render 'My name is Cécile Lebleu'
```

## Components

Components can be arrow functions...

```js
const MyApp = () => <div>Content</div>
```

Or classic functions.

```js
function App() {
   return(
      <div>
         Content
      </div>
   )
}
```

These are all functional components. There's also class-based components, but I'll skip it because it's not actually necessary to know.

<!-- ### Class-based Components

Class-based components are kind of outdated now, so it's ok to stick to functional for the vast majority of cases.

```js
class App extends React.Component {
   render() {
      // Logic, styling, conditional rendering
      return (
         <div>
            Content
         </div>
      )
   }
}
```

```js
import React from "react"
class App extends React.Component {...}

// OR

import React, {Component} from "react"
class App extends Component {...}
```

If we `import React, {Component} from "react"` we can use `class App extends Component {}` instead of `class App extends React.Component {}`. -->

### Importing Components

Components should be each in their own file.

In each component file, we need to import React, and export the component.

```js
import React from "react"

const MyComponent = () => <div>My component</div>
export default MyComponent
```

Then, in our parent container (`index.js` or other) we must import that component

```js
import React from "react"
import ReactDOM from "react-dom"
import MyComponent from "./components/MyComponent"

ReactDOM.render(<MyComponent />, document.getElementById("root"))
```

### Mapping components

```js
function App() {
   const components = myData.map(item =>
      <Component
         key={item.id}
         parameter1={item.parameter1}
         parameter2={item.parameter2}
      />
   )
   return (
      <div>
         {components}
      </div>
   )
}
```

## Styling

### Traditional external CSS file

If we're using an HTML and ReactDOM, we can import a classic CSS file into `index.html` and style everything the old-fashioned way with CSS classes.

- When using classes in JSX, they must be declared with `className` and not "class".
- Classes can only be added to traditional HTML elements, not to Components.

### Inline Styles

```js
const App = () => <h1 style={{
   color: "blue",
   backgroundColor: "aliceblue",
   padding: 30, // auto: pixels
   fontSize: "2rem"
}}>My App</h1>
```

```js
const styles = {
   color: "blue",
   backgroundColor: "aliceblue",
   padding: 30, // auto: pixels
   fontSize: "2rem"
}

const App = () => <h1 style={styles}>My App</h1>
```

## Props

Props allow us to pass data down into components; similarly to image source links, a href links, different names or content in general.

Props are immutable — meaning, they can't be changed upwards through the React tree.

```js
const Component = () => <div>
   <p>{props.name}</p>
   <img src={props.imageSrc} />
   <a href={props.url}>{props.link}</a>
</div>

const App = (props) => <div>
   <Component
      name="Some Name"
      imageSrc="http://placekitten.com/400/200"
      url="www.some-site.com"
      link="Some link"
   />
</div>
```

### Props in Class Components

To use props in class-based components, you must use `{this.props.name}` instead of `{props.name}`.

## Data

There's a few sources of data we can use. Most often that will be from an HTTP call to an API, but we can also get data from a file.

### Import an array form a file

```js
const myData = [
   {
      id: 1,
      content: "data content one"
   },
   {
      id: 2,
      content: "data content two"
   }
]

export default myData
```

```js
import React from "react"
import myData from "./myData"
```

## State

The best way to use State is using the `useState()` hook.

`useState` has to be imported from React, luckily in one import statement.

```js
import React, { useState } from "react"
```

This is a function that uses state:

```js
function App() {
   const state = useState("Yes")

   return (
      <p>Q: Should I learn state?<br />A: {state[0]}</p>
   )
}
```

`useState` returns an array. That's why in the example above we used `{state[0]}`. But state isn't generally intended to be used that way, instead using array destructuring. Another way of writing the same example:

```js
function App() {
   const [state] = useState("Yes")

   return (
      <p>Q: Should I learn state?<br />A: {state}</p>
   )
}
```

### Changing the State

The second argument of `useState` is a function that allows us to change the state directly (without having to use the o-ho-hol' `setState`). The function can be defined outside the `return` statement:

```js
function App() {
   const [count, setCount] = useState(0)

   function increment() {
      setCount(prevCount => prevCount + 1)
   }

   return (
      <div>
         <h1>{count}</h1>
         <button onClick={increment}>Add</button>
      </div>
   )
}
```

Or directly in the event handler:

```js
function App() {
   const [count, setCount] = useState(0)

   return (
      <div>
         <h1>{count}</h1>
         <button
            onClick={() => setCount(prevCount => prevCount + 1)}
         >Add</button>
      </div>
   )
}
```

## Hook: useEffect

`useEffect` is a hook that allows to add "side effects" to our code.  Similar to `useState`, `useEffect` is a hook that comes with React. It's basically a replacement for the older lifecycle methods, like `componentDidMount` and the like. Just like `useState`, it has to be imported.

```js
import React, { useEffect } from "react"
```

### How to run something right after state changes

```js
import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function App() {
   const [count, setCount] = useState(0)
   const [color, setColor] = useState("")

   function increment() {
      setCount(prevCount => prevCount + 1)
   }

   function decrement() {
      setCount(prevCount => prevCount - 1)
   }

   useEffect(() => {
      setColor(randomcolor())
   }, [count])

   return (
      <div>
         <h1 style={{color: color}}>{count}</h1>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
      </div>
   )
}
```

`useEffect` runs right after the state of `count` changes, each time providing a new random color for the counter itself. Notice we pass an array with `count` as the second argument: This tells `useEffect` to run only when the state of `count` is updated (but no other state). This effectively avoids infinite loops and pesky bugs.

To make it run only once — when the component first renders, but then never again — we can pass an empty array instead; basically saying "listen for the change of state in nothing".

```js
useEffect(() => {
   setColor(randomcolor())
}, [])
```
