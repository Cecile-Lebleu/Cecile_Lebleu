import React from "react"
import Cécile from "../images/cecilelebleu.jpg"
import style from "./about.module.scss"

export default () => (
   <div className={style.about}>
      <img src={Cécile} alt="Cécile Lebleu" />
      <p>Nice to meet you! I’m Cécile Lebleu, brand designer turned front-end developer.</p>
      <p>I build interactive websites, brand identities, and design systems. I also like to make great food.</p>
   </div>
)

