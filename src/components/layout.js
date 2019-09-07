import React from "react"
import Sidebar from "./sidebar"
import style from "./layout.module.css"

export default ({ children }) => (
   <div>
      <Sidebar />
      <div className={style.layout}>
         {children}
      </div>
   </div>
)
