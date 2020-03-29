import React from "react"
import Sidebar from "./sidebar"
import style from "./layout.module.scss"

export default ({ children }) => (
   <div>
      <Sidebar />
      <div className={style.layout}>
         {children}
      </div>
   </div>
)
