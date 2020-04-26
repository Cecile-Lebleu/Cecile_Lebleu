import React from "react"
import styles from "./toc.module.scss"

export default ( props ) => {
   let headings = props.headings.map(item => {
      let url = "#" + item.value.toLowerCase()
      url = url.replace(/\s+/g, '-').toLowerCase();
      return (
         <div className={styles.tocLinks}>
            <a href={url}>{item.value}</a><br />
         </div>
      )
   })
   return (
      <div className={styles.toc}>
         <div className={styles.container}>
            <h6>Navigate this post</h6>
            {headings}
         </div>
      </div>
   )
}