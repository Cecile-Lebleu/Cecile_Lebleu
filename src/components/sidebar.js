import React from "react"

import ThinSidebar from "./sidebar/thin_sidebar.js"
import AboutSidebar from "./sidebar/about_sidebar.js"
import style from "./sidebar/sidebar.module.css"

// let AboutSidebarToggle = false;
// console.log(AboutSidebarToggle)

// let showAboutSidebar = () => {
//    AboutSidebarToggle = true;
//    console.log(AboutSidebarToggle)
// }
// 
// let hideAboutSidebar = () => {
//    AboutSidebarToggle = false;
//    console.log(AboutSidebarToggle)
// }

let sidebar = () => (
   <div className={style.sidebar}>
      <ThinSidebar />
      <AboutSidebar className={style.about_sidebar} />

   </div>
)


export default sidebar;
 // onMouseOver={showAboutSidebar} onMouseOut={hideAboutSidebar}