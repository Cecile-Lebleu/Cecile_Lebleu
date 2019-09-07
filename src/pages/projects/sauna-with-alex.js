import React from "react"

import ProjectPage from "../../components/projectpage"
import style from "../../components/projectpage.module.css"

import SWA from "../../images/Sauna_With_Alex.svg"
import SWA_logo_1 from "../../images/Sauna_With_Alex_1.png"
import SWA_logo_2 from "../../images/Sauna_With_Alex_2.png"
import SWA_DesktopHome from "../../images/SWA_DesktopHome.jpg"

export default () => (
   <ProjectPage title="Sauna With Alex">
      <div>
         <p>Alex is a Saunameister who provides Aufguss Sauna sessions in Minnesota. Aufguss is a German sauna tradition that is currently gaining popularity outside of Europe and in the US.</p>
         <p>"The word “Aufguss” is German, and can be translated with “Infusion”. It describes the activity of pouring water on the hot stones of the sauna oven. The water immediately vaporizes into steam, and increases the heat and humidity inside of the sauna room.</p>
         <p>I helped Alex in building his brand through logotype design, brand identity, and web design and development.</p>
      </div>
      <div className={style.twoColumnImage}>
         <img
            src={SWA}
            alt="Sauna With Alex logotype"
            className={style.maxWidth75}
         />
      </div>
      <div>
         <p>When designing Alex's new logo, I took as main sources of inspiration the saunas' wide parallel boards, the simple geometric shapes that build the architecture, the steam and towel movements, as well as the German graphic design movements of the middle of the 19th century that influenced so much the American and the rest of the world's graphic design.</p>
      </div>
      <img src={SWA_logo_1} alt="" className={style.maxWidth100}/>
      <img src={SWA_logo_2} alt="" className={style.maxWidth100}/>
      <div>
         <p>The website design reflects the values of the logotype and brand, and seeks to integrate the Sauna with Alex Aufguss community, while bringing new people onboard. </p>
         <p><a className={style.link} href="https://saunawithalex.com">View the website ></a></p>
      </div>
      <div className={style.twoColumnImage}>
         <img 
            src={SWA_DesktopHome}
            alt="Homepage at SaunaWithAlex.com"
            className={style.maxWidth75}
         />
      </div>
      
   </ProjectPage>
) 