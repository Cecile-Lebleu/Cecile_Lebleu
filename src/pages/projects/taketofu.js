import React from "react"

import ProjectPage from "../../components/projectpage"
import style from "../../components/projectpage.module.css"
import Taketofu from "../../images/taketofu.svg"

export default () => (
   <ProjectPage title="Taketofu">
   <div>
      <p>Taketofu (タケトフ) is a music curation website launched by my partner and I. I designed the logotype, and am currently re-designing the website and experience. Stay tuned — with good music in the meantime — for the update.</p>
   </div>
   <div className={style.twoColumnImage}>
      <img
         src={Taketofu}
         alt="Taketofu logotype"
         className={style.maxWidth75}
      />
   </div>
   </ProjectPage>
)