import React from "react"
import { graphql } from "gatsby"
import Post from "../components/post"
import styles from "./blog.module.scss"
import Layout from "../components/layout"
import TextContent from "../components/TextContent"

export default ({ data }) => {
   return (
      <Layout>
         <TextContent>
         {/* <SEO title="Diarly App Blog" /> */}
         <div className={styles.blog}>
            <h1>Blog</h1>
            {data.allMarkdownRemark.edges.map(({ node }) => (
               <Post
                  id = {node.id}
                  key = {node.id}
                  ttr = {node.timeToRead.toString()}
                  date = {node.frontmatter.date}
                  slug = {node.frontmatter.path}
                  title = {node.frontmatter.title}
                  categories = {node.frontmatter.categories}
                  excerpt = {node.frontmatter.description}
               />
            ))}
         </div>
         </TextContent>
      </Layout>
   )
}

export const query = graphql`
   query {
      allMarkdownRemark(sort: {
            fields: [frontmatter___date],
            order: DESC
         }) {
         totalCount
         edges {
            node {
               id
               excerpt
               timeToRead
               frontmatter {
                  path
                  title
                  categories
                  description
                  date(formatString: "YYYY – MMMM DD")
               }
            }
         }
      }
   }
`
