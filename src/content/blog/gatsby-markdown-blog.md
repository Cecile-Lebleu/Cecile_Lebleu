---
path: gatsby-markdown-blog
date: 2020-03-11
title: Gatsby Markdown blog
description: Quick-start guide to adding or creating a blog for your Gatsby, site using Markdown files for each post.
categories: ["gatsby", "markdown", "graphql"]
---

This tutorial assumes you already have a running Gatsby site. If you don't, you can start a simple site and then come back, or use a Gatsby starter that includes Markdown blog functionality and skip this altogether. However, if you're looking to extend an existing Gatsby site to include a blog, or you just want to learn about the process, this is the way to go.

## Plugins to install

First step is to install some plugins:

### gatsby-source-filesystem

Gatsby source filesystem sources data from the filesystem. It looks into the folder and files you direct it to, and allows us to work with those files.

```bash
npm install --save gatsby-source-filesystem
```

Add it to `gatsby-config.js`:

```javascript
module.exports = {
   plugins: [
      {
         resolve: `gastby-source-filesystem`,
         options: {
            name: `src`,
            path: `${__dirname}/src/content/blog/`
         }
      }
   ]
}
```

In `plugins` > `options` > `path` we should insert the path to the folder where we will add the Markdown files, as well other relevant files, like the blog's related images (featured image, inline images).

This could be as simple as `${__dirname}/src/` or as deep and complex as we need. The more specific the path is here, the less specific we will have to be in our queries; but if this path is too deep or too specific, we might not be able to access everything we need. Keep in mind that we have GraphiQL at our disposal — a tool that allows for easier GraphQL queries.

### gatsby-transformer-remark

```bash
npm install --save gatsby-transformer-remark
```

Add it to `gatsby-config.js`:

```javascript
module.exports = {
   plugins: [
      `gatsby-transformer-remark`
   ]
}
```

## Create the Markdown posts

Now let's actually create the posts! Navigate to `src/content/blog` and create a markdown file `my-first-post.md` or `my-first-post.markdown`.

> I like to save each post in its own folder. That way, I can store the posts' images inside their individual folders and keep a cleaner working tree. If your posts won't have inline images, you can skip the folder structure and simply save the markdown files in `src/content/blog`.

### Frontmatter

Frontmatter is basically the metadata of your post: Its title, date, description, tags — anything.

```md
---
title: Post Title
date: 2020-02-18
---

Content
```

## List the posts

This setup can be added to the Index page, or you can create a Blog page to display the blog post directly. Add or remove elements as needed.

```js
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
   return (
      <Layout>
         <div>
            <h1>Blog</h1>
            <h3>{data.allMarkdownRemark.totalCount} Posts</h3>
            {data.allMarkdownRemark.edges.map(({ node }) => (
               <div key={node.id}>
                  <Link to={node.fields.slug} >
                     <h2>{node.frontmatter.title}</h2>
                     <p>Posted {node.frontmatter.date}</p>
                     <p>{node.excerpt}</p>
                  </Link>
               </div>
            ))}
         </div>
      </Layout>
   )
}

export const query = graphql`
   query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
         totalCount
         edges {
            node {
               id
               excerpt
               frontmatter {
                  title
                  date(formatString: "DD MMMM, YYYY")
               }
               fields {
                  slug
               }
            }
         }
      }
   }
`
```

We'll go more in-depth into GraphQL and how it works in my Gatsby + GraphQL tutorial — stay tuned.

## Automatically create the blog post pages

### Template

Let's create a template component for our posts to use.

Create the template file, `blog-post.js`, under `src/templates` (create the folder if it doesn't exist).

```js
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
   const post = data.markdownRemark
   return (
      <Layout>
         <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
         </div>
      </Layout>
   )
}

export const query = graphql`
   query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
         html
         frontmatter {
            title
         }
      }
   }
`
```

### gatsby-node.js

Create the file `gatsby-node.js` at the root of the project.

The following code will create the page slugs using the markdown files' names: `my-first-post.md` will become `/my-first-post/`. Then, it will actually create a page of each blog post; and will use the template we just created for each.

```js
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
   const { createNodeField } = actions
   if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` })
      createNodeField({
         node,
         name: `slug`,
         value: slug,
      })
   }
}

exports.createPages = async ({ graphql, actions }) => {
   const { createPage } = actions
   const result = await graphql(`
      query {
         allMarkdownRemark {
            edges {
               node {
                  fields {
                     slug
                  }
               }
            }
         }
      }
   `)

   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
         path: node.fields.slug,
         component: path.resolve(`./src/templates/blog-post.js`),
         context: {
            slug: node.fields.slug,
         },
      })
   })
}
```

And that should do it! I hope this quick start guide has been helpful for you.
