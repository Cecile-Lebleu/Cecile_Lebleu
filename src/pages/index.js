
// React
import React from "react"
import { Helmet } from "react-helmet"

// Styles
import style from "../components/index.module.css"
// Components
import Layout from "../components/layout"
import Project from "../components/project"
import Tokamaki from "../components/tokamaki_logo"
// Images
import SWA from "../images/Sauna_With_Alex.svg"
import Diarly from "../images/Diarly.png"
import Modula from "../images/Modula.svg"
import HEXaDecimate from "../images/HEXaDecimate.svg"
import Korellow from "../images/Korellow.svg"
import TGB from "../images/Thrive_Grab_Bar_Co.svg"
import Taketofu from "../images/taketofu.svg"
import Myara from "../images/Myara.svg"



export default () => (
   <Layout>
      <Helmet>
         <meta charSet="utf-8" lang="en" />
         <title>Cécile Lebleu</title>
         <meta name="Description" content="Portfolio website of designer & developer Cécile Lebleu" />
      </Helmet>

      <div className={style.home_projects_container}>
         <Project 
            name="Sauna With Alex"
            link="/projects/sauna-with-alex"
            description="Logotype, Identity & Website"
            short="SWA"
         >
            <img
               src={SWA}
               alt="Sauna With Alex Logotype"
               className={style.project_image}
               style={{
                  width: "50%",
                  maxWidth: "50%"
               }}
            />
         </Project>
         
         <Project 
            name="Diarly App"
            link="/projects/diarly"
            description="App Layout & Design"
            short="Diarly"
         >
            <img
               src={Diarly}
               alt="Diarly App Screens"
               className={style.project_image}
               style={{}}
            />
         </Project>
         
         <Project 
            name="Modula"
            link="/projects/modula"
            description="Logotype and Identity"
            short="Modula"
         >
            <img
               src={Modula}
               alt="Modula Logotype"
               className={style.project_image}
               style={{
                  maxWidth: "80%"
               }}
            />
         </Project>
         
         <Project 
            name="Tokamaki"
            link="/projects/tokamaki"
            description="Logotype & SVG Animation"
            short="Tokamaki"
         >
            <Tokamaki width="70%"/>
         </Project>
         <Project 
            name="HEXaDecimate"
            link="/projects/hexadecimate"
            description="Card Game Layout & Print Design"
            short="HEXaDecimate"
         >
            <img
               src={HEXaDecimate} 
               alt="HEXaDecimate Logotype"
               className={style.project_image}
               style={{
                  maxWidth: "80%"
               }}
            />
         </Project>
         
         <Project 
            name="Korellow"
            link="/projects/korellow"
            description="Logotype & Print Design"
            short="Korellow"
         >
            <img
               src={Korellow}
               alt="Korellow Logotype"
               className={style.project_image}
               style={{
                  maxWidth: "80%"
               }}
            />
         </Project>
         
         <Project 
            name="Thrive Grab Bar&nbsp;Co"
            link="/projects/thrive-grab-bar-co"
            description="Logotype Design"
            short="TGB"
         >
            <img
               src={TGB}
               alt="Thrive Grab Bar Co Logotype"
               className={style.project_image}
               style={{
                  maxWidth: "70%"
               }}
            />
         </Project>

         <Project 
            name="Taketofu"
            link="/projects/taketofu"
            description="Logotype & Web Development"
            short="Taketofu"
         >
            <img
               src={Taketofu} alt="Taketofu Logotype" 
               className={style.project_image}
               style={{
                  maxHeight: "20rem"
               }}
            />
         </Project>
         <Project 
            name="Myara"
            link="/projects/myara"
            description="Logotype & Brand Identity"
            short="Myara"
         >
            <img
               src={Myara} alt="Myara Logotype" 
               className={style.project_image}
               style={{
                  
               }}
            />
         </Project>
      
      </div>
         
   </Layout>
)

