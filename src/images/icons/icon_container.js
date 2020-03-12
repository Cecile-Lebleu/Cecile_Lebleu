import React from "react"
import styles from "./Icon_container.module.css"

export default ( props ) => (
   <div className={styles.icon_container}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
         {props.name}
      </a>
   </div>
)