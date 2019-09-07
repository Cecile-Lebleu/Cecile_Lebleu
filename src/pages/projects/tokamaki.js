import React from "react";

import ProjectPage from "../../components/projectpage"
import style from "../../components/projectpage.module.css"

import Tokamaki from "../../components/tokamaki_logo";

export default () => (
   <ProjectPage title="Tokamaki">
      <div>
         <p>SVG logotype animation, more details coming soon.</p>
      </div>
      <div className={style.twoColumnImage}>
         <Tokamaki width="100%" />
      </div>
   </ProjectPage>
)