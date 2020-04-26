---
path: basic-react
date: 2019-11-29
title: Basics of React
description: "From the ground up: Import, ReactDOM, JSX, Components, Styling, Props, Data, State."
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

### Functional Components

Functional components are components created in a classic function.

#### Arrow

```js
const MyApp = () => <div>Content</div>
```

#### Classic

```js
function App() {
   return(
      <div>
         Content
      </div>
   )
}
```

### Class-based Components

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

If we `import React, {Component} from "react"` we can use `class App extends Component {}` instead of `class App extends React.Component {}`.

### Importing Components

Components should be each in their own file.

In each component file, we need to import React, and export the component.

```js
import React from "react"

const MyComponent = () => <div>My component</div>
export default MyComponent
```

Then, in our parent container (`index.js` or other) we must import that component
-

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

#### Props in Class Components

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

State can only be used in class-based components (not in functional components).

To initiate state, we need to add a constructor. A constructor is always initialized with `super()`.

```js
class App extends React.Component {
   constructor() {
      super()
      this.state = { answer: "Yes" }
   }
   render() {
      <div>
         <p>Is state important to know: {this.state.answer}</p>
      </div>
   }
}
```

### Changing the State

```js
class App extends React.Component{
   constructor(){
      super()
      this.state = {count: 0}
      this.handleClick = this.handleClick.bind(this)
   }
   handleClick(){
      this.setState(prevState => return {
         count: prevState.count + 1
      })
   }
   render(){
      return(
         <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Add!</button>
         </div>
      )
   }
}
```
