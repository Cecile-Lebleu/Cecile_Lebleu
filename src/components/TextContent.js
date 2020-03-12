import React from "react"
import style from "./TextContent.module.scss"

export default ({ children }) => (
   <div>
      <div className={style.textContent}>
         {children}
      </div>
   </div>
)
