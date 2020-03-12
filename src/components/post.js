import React from "react"
import styles from "./post.module.scss"
import { Link } from "gatsby"
// import Img from "gatsby-image"
// import Category from "./category"

class Post extends React.Component {
   render() {
      return (
         <Link to={this.props.slug} className={styles.post}>
            <div key={this.props.id}>
               {/* <Category category={this.props.categories}></Category> */}
               <h2 className={styles.title}>{this.props.title}{" "}</h2>
               <p className={styles.excerpt}>{this.props.excerpt}</p>
               <p className={styles.ttr}>{this.props.ttr} minute read</p>
               <p className={styles.date}>{this.props.date}</p>
            </div>
         </Link>
      )
   }
}

export default Post