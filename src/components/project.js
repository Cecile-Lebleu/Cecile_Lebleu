import React from "react"
import { Link } from "gatsby"

import style from "./project.module.css"

export default ( props ) => (
   <Link to={props.link} className={style.home_individual_project_container}>
      
      <div className={style.visual}>
         {props.children}
      </div>
      <div className={style.content}>
         
         <p className={style.tags}>
            {props.description}
         </p>
      </div>
   </Link>
)