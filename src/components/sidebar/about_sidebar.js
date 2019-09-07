import React from "react"
import styles from "./sidebar.module.css"


export default () => (
   <div className={styles.about_sidebar}>
      <div className={styles.content}>
         <img src={require("../../images/cecilelebleu.jpg")} alt="Cécile Lebleu" />
         <p>Nice to meet you! I’m Cécile Lebleu, brand designer turned front-end developer.</p>
         <p>I build interactive websites, brand identities, and design systems. I also like to make great food.</p>
         <p>Favorite things: Typography, classic & minimal design, ramen, clean code, fresh bread, walks in nature.</p>
      </div>
   </div>
)

// , and co-founder of <a href="https://www.parametricals.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}}>Parametricals</a>