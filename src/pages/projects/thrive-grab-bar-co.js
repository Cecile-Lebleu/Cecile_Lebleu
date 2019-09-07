import React from "react"

import ProjectPage from "../../components/projectpage"
import style from "../../components/projectpage.module.css"
import ThriveGrabBarCo from "../../images/Thrive_Grab_Bar_Co.svg"
import ThriveGrabBarCo1 from "../../images/Thrive_Grab_Bar_Co_1.svg"

export default () => (
   <ProjectPage title="Thrive Grab Bar Co.">
      <div>
         <p>Thrive Grab Bar Co. is a family-owned business centered around the installation of safety equipment in homes. Their goal is to make people adapt and thrive, helping them feel secure, and preventing accidents, since 2003. <i>“Our mission is to bring a youthful and positive outlook to those who are treated coldly, as sick people.”</i></p>
         <p>I helped Thrive Grab Bar Co. by designing their logotype, using custom-drawn letters in conjunction with the classic and strong typeface Charter. During the design process, I focused on bringing out the values of the brand, mainly cleanliness, confidence, strength, respect, and optimism. These values defined the style to be bold, traditional, roman, crisp, and simple. This also lead to avoiding the use of ornaments, thin details, brittle effects, experimental lettering, or slant in the letters.</p>
      </div>
      <div className={style.twoColumnImage}>
         <img
            src={ThriveGrabBarCo}
            alt="Thrive Grab Bar Co Logotype"
            // style={{margin: "0 5rem"}}
            className={style.maxWidth75}
         />
      </div>
      <p>An upright, confident, strong outlook, in the details of each letter and in the rectangle shape of the overall logo. To avoid looking too menacing or dangerous, however, a round and soft blue bar was added.</p>
      <div className={style.twoColumnImage}>
         <img
            src={ThriveGrabBarCo1}
            alt="Thrive Grab Bar Co Logotype"
            // style={{margin: "0 5rem"}}
            className={style.maxWidth75}
         />
      </div>
   </ProjectPage>
)