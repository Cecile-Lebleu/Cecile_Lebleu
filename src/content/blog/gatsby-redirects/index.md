---
path: gatsby-redirect
date: 2020-05-08
title: How to Add a Redirect to Gatsby Pages
description: Adding a redirect to and from pages in a Gatsby site
categories: ["gatsby", "quick tip"]
---

Need to add a redirect to a Gatsby site?

Recently, I stumbled upon an issue: I created a page `somesite.com/hello-world`, but there were links out in the wild to `somesite.com/helloworld`. Very small difference, but a surefire way to give your users a 404.

Luckily, Gatsby already has all you need to fix it.

## Create both pages

You will have to create both pages in your `pages` folder. For example, my example contains `hello-world.js` and `helloworld.js`.

Decide which will be the main page, and which will be redirected. I prefer having snake case urls, so I went for `hello-world.js` as the main page, and `helloworld.js` will contain the redirect.

## Add the content

The main page, `hello-world.js` should be a regular page with all the content and structure. As usual.

In the redirect page, in my case `helloworld.js`, we need to add the following content:

```js
import React from "react"
import { Redirect } from '@reach/router'

const HelloWorld = () => (
   <Redirect to={`/hello-world`} />
)

export default HelloWorld
```

## That's it!

I hope this quick tip helped you out! Best of luck in your project :)
