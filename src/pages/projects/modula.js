import React from "react"

import ProjectPage from "../../components/projectpage"
import style from "../../components/projectpage.module.css"

import Modula_Logo_Full from "../../images/Modula_Logo_Full.png"
import Modula_Logo_Outline from "../../images/Modula_Logo_Outline.png"
import Modula1 from "../../images/Modula_Brand_Book_1.jpg"
import Modula2 from "../../images/Modula_Brand_Book_2.jpg"
import Modula3 from "../../images/Modula_Brand_Book_3.jpg"
import Modula4 from "../../images/Modula_Brand_Book_4.jpg"
import Modula5 from "../../images/Modula_Brand_Book_5.jpg"
import Modula6 from "../../images/Modula_Brand_Book_6.jpg"
import Modula7 from "../../images/Modula_Brand_Book_7.jpg"
import Modula8 from "../../images/Modula_Brand_Book_8.jpg"
import Modula9 from "../../images/Modula_Brand_Book_9.jpg"
import Modula10 from "../../images/Modula_Brand_Book_10.jpg"
import Modula11 from "../../images/Modula_Brand_Book_11.jpg"
import Modula12 from "../../images/Modula_Brand_Book_12.jpg"

export default () => (
   <ProjectPage title="Modula" >
      <p>This project is a concept created for the gorgeous jewelry brand Tara. Unfortunately these brand identity guidelines weren't used — however, as I absolutely loved working on this and am really happy with the results, I decided to share the project here.</p>
      <div className={style.twoColumnImage}>
         <div style={{margin: "0 0 2rem 0"}}>
            <img
               src={Modula_Logo_Full}
               className={style.maxWidth100}
               alt="Modula Logotype"/>
            <img
               src={Modula_Logo_Outline}
               className={style.maxWidth100}
               alt="Modula Logotype with design process details"
            />
         </div>

         <div className={style.flex}>
            <img
            src={Modula1}
            className={style.full}
            alt="First page of Modula Brand Identity Guidelines"/>
         </div>
         <div className={style.flex}>
            <img
            src={Modula2}
            className={style.half_no_margin}
            alt="Second page of Modula Brand Identity Guidelines"/>
            <img
            src={Modula3}
            className={style.half_no_margin}
            alt="Third page of Modula Brand Identity Guidelines"/>
         </div>
         <div className={style.flex}>
            <img
            src={Modula4}
            className={style.half_no_margin}
            alt="Fourth page of Modula Brand Identity Guidelines"/>
            <img
            src={Modula5}
            className={style.half_no_margin}
            alt="Fifth page of Modula Brand Identity Guidelines"/>
         </div>
         <div className={style.flex}>
            <img
            src={Modula6}
            className={style.half_no_margin}
            alt="Sixth page of Modula Brand Identity Guidelines"/>
            <img
            src={Modula7}
            className={style.half_no_margin}
            alt="Seventh page of Modula Brand Identity Guidelines"/>
         </div>
         <div className={style.flex}>
            <img
            src={Modula8}
            className={style.half_no_margin}
            alt="Eighth page of Modula Brand Identity Guidelines"/>
            <img
            src={Modula9}
            className={style.half_no_margin}
            alt="Ninth page of Modula Brand Identity Guidelines"/>
         </div>
         <div className={style.flex}>
            <img
            src={Modula10}
            className={style.half_no_margin}
            alt="Tenth page of Modula Brand Identity Guidelines"/>
            <img
            src={Modula11}
            className={style.half_no_margin}
            alt="Eleventh page of Modula Brand Identity Guidelines"/>
         </div>
         <div className={style.flex}>
            <img
            src={Modula12}
            className={style.half_no_margin}
            alt="Last page of Modula Brand Identity Guidelines"/>
            <div></div>
         </div>
      </div>

   </ProjectPage>
)