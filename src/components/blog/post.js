import React from "react"
import styles from "./post.module.scss"
import { Link } from "gatsby"
import ReactIcon from "./icons/react"
import GatsbyIcon from "./icons/gatsby"
import SwiftIcon from "./icons/swift"

class Post extends React.Component {
   render() {
      let categories = this.props.categories.map(category => {
         switch (category) {
            case "react":
               return <ReactIcon />
            case "gatsby":
               return <GatsbyIcon />
            case "swift":
               return <SwiftIcon />
            default:
               return ""
         }
      })

      return (
         <Link to={this.props.slug} className={styles.post}>
            <div key={this.props.id}>
               {categories}
               <h2 className={styles.title}>{this.props.title}{" "}</h2>
               <p className={styles.excerpt}>{this.props.excerpt}</p>
               <p className={styles.ttr}>{this.props.ttr} minute read</p>
            </div>
            <hr />
         </Link>
      )
   }
}

export default Post