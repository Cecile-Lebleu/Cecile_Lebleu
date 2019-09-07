import React from "react"

import ProjectPage from "../../components/projectpage"
import style from "../../components/projectpage.module.css"

import Myara from "../../images/Myara.svg"
import Myara01 from "../../images/Myara_01.png"
import Myara02 from "../../images/Myara_02.png"
import Myara03 from "../../images/Myara_03.png"
import Myara04 from "../../images/Myara_04.png"
import Myara05 from "../../images/Myara_05.png"
import Myara06 from "../../images/Myara_06.png"
import Myara07 from "../../images/Myara_07.png"
import Myara08 from "../../images/Myara_08.png"
import Myara09 from "../../images/Myara_09.png"
import Myara10 from "../../images/Myara_10.png"
import Myara11 from "../../images/Myara_11.png"
import Myara12 from "../../images/Myara_12.png"
import Myara13 from "../../images/Myara_13.png"
import Myara14 from "../../images/Myara_14.png"
import Myara15 from "../../images/Myara_15.png"
import Myara16 from "../../images/Myara_16.png"
import Myara17 from "../../images/Myara_17.png"
import Myara18 from "../../images/Myara_18.png"

export default () => (
   <ProjectPage title="Myara" >
      <div className={style.twoColumnImage}>
         <div style={{margin: "0 0 2rem 0"}}>
            <img
               src={Myara}
               className={style.maxWidth50}
               alt="Myara Logotype"
               style={{
                  marginTop: "-4rem",
                  marginBottom: "4rem"
               }}
            />
         </div>

         <div className={style.flex}>
            <img
            src={Myara01}
            className={style.full}
            alt="First page of Myara Brand Identity Guidelines"/>
         </div>
         <div className={style.flex}>
            <img
            src={Myara02}
            className={style.half_no_margin}
            alt="Second page of Myara Brand Identity Guidelines"/>
            <img
            src={Myara03}
            className={style.half_no_margin}
            alt="Third page of Myara Brand Identity Guidelines"/>
         </div>
         <div className={style.flex}>
            <img
            src={Myara04}
            className={style.half_no_margin}
            alt="Fourth page of Myara Brand Identity Guidelines"/>
            <img
            src={Myara05}
            className={style.half_no_margin}
            alt="Fifth page of Myara Brand Identity Guidelines"/>
         </div>
         <div className={style.flex}>
            <img
            src={Myara06}
            className={style.half_no_margin}
            alt="Sixth page of Myara Brand Identity Guidelines"/>
            <img
            src={Myara07}
            className={style.half_no_margin}
            alt="Seventh page of Myara Brand Identity Guidelines"/>
         </div>
         <div className={style.flex}>
            <img
            src={Myara08}
            className={style.half_no_margin}
            alt="Eighth page of Myara Brand Identity Guidelines"/>
            <img
            src={Myara09}
            className={style.half_no_margin}
            alt="Ninth page of Myara Brand Identity Guidelines"/>
         </div>
         <div className={style.flex}>
            <img
            src={Myara10}
            className={style.half_no_margin}
            alt="Tenth page of Myara Brand Identity Guidelines"/>
            <img
            src={Myara11}
            className={style.half_no_margin}
            alt="Eleventh page of Myara Brand Identity Guidelines"/>
         </div>
         <div className={style.flex}>
            <img
            src={Myara12}
            className={style.half_no_margin}
            alt="Twelvth page of Myara Brand Identity Guidelines"/>
            <img
            src={Myara13}
            className={style.half_no_margin}
            alt="Thirteenth page of Myara Brand Identity Guidelines"/>
         </div>
         <div className={style.flex}>
            <img
            src={Myara14}
            className={style.half_no_margin}
            alt="Fourteenth page of Myara Brand Identity Guidelines"/>
            <img
            src={Myara15}
            className={style.half_no_margin}
            alt="Fifteenth page of Myara Brand Identity Guidelines"/>
         </div>
         <div className={style.flex}>
            <img
            src={Myara16}
            className={style.half_no_margin}
            alt="Sixteenth page of Myara Brand Identity Guidelines"/>
            <img
            src={Myara17}
            className={style.half_no_margin}
            alt="Seventeenth page of Myara Brand Identity Guidelines"/>
         </div>
         <div className={style.flex}>
            <img
            src={Myara18}
            className={style.half_no_margin}
            alt="Last page of Myara Brand Identity Guidelines"/>
            <div></div>
         </div>
      </div>

   </ProjectPage>
)