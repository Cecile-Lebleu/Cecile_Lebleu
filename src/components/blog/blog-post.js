import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout"
import TextContent from "../TextContent"
import TOC from "./toc"

export default ({ data }) => {
   const post = data.markdownRemark
   return (
      <Layout>
         <TOC headings={post.headings} />
         <TextContent>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.description}</p>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
         </TextContent>
      </Layout>
   )
}

export const query = graphql`
   query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
         html
         frontmatter {
            title
            description
         }
         headings(depth: h2) {
            value
         }
      }
   }
`
