import React from "react"
// import { Helmet } from "react-helmet"

import style from "./index.module.scss"

import Layout from "../components/layout"
// import About from "../components/about"
import Project from "../components/project"
import Tokamaki from "../components/tokamaki_logo"

// import SWA from "../images/Sauna_With_Alex.svg"
// import Diarly from "../images/Diarly.png"
import Modula from "../images/Modula.svg"
// import HEXaDecimate from "../images/HEXaDecimate.svg"
import Korellow from "../images/Korellow.svg"
// import TGB from "../images/Thrive_Grab_Bar_Co.svg"
import Taketofu from "../images/taketofu.svg"
import Myara from "../images/Myara.svg"



export default () => (
   <Layout>
      {/* <Helmet>
         <meta charSet="utf-8" lang="en" />
         <title>Cécile Lebleu</title>
         <meta name="Description" content="Portfolio website of designer & developer Cécile Lebleu" />
      </Helmet> */}

      {/* <div className={style.home_projects_container}> */}
         
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
                  width: 600
               }}
            />
         </Project>
         
         <Project 
            name="Tokamaki"
            link="/projects/tokamaki"
            description="Logotype & SVG Animation"
            short="Tokamaki"
         >
            <Tokamaki width="600"/>
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
                  maxWidth: 600
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
                  width: 550
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
                  width: 400
               }}
            />
         </Project>
      
      {/* </div> */}
         
   </Layout>
)

