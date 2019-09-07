import React from "react"

import ProjectPage from "../../components/projectpage"
import style from "../../components/projectpage.module.css"
import Korellow from "../../images/Korellow.svg"
import Korellow1 from "../../images/Korellow_1.png"
import Korellow2 from "../../images/Korellow_2.png"
import Korellow3 from "../../images/Korellow_3.png"


export default () => (
   <ProjectPage title="Korellow" >
      <div>
         <p>Korellow is a clothing brand based in Costa Rica. I helped their brand by designing their logotype, clothing tags, and labels.</p>
      </div>
      <div className={style.twoColumnImage}>
         <img
            src={Korellow}
            alt=""
            className={style.maxWidth100}
            style={{margin: "0 0 10rem 0"}}
         />
         <img
            src={Korellow1}
            alt=""
            style={{maxWidth: "100%"}}
         />
         <img
            src={Korellow2}
            alt=""
            style={{maxWidth: "100%"}}
         />
         <img
            src={Korellow3}
            alt=""
            style={{maxWidth: "100%"}}
         />
      </div>
      
   </ProjectPage>
) 

