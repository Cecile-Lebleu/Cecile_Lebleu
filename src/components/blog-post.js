import React from "react"
import { graphql } from "gatsby"

import Layout from "./layout"
import TextContent from "../components/TextContent"
import styles from "./blog-post.module.scss"

export default ({ data }) => {
   const post = data.markdownRemark
   return (
      <Layout>
         <TextContent>
            <h1>{post.frontmatter.title}</h1>
            <p className={styles.mono}>Posted on {post.frontmatter.date}</p>
            <p>{post.frontmatter.description}</p>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
         </TextContent>
      </Layout>
   )
}
 // TODO: Add categories/tags here
export const query = graphql`
   query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
         html
         frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
         }
      }
   }
`