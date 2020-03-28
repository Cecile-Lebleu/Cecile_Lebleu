import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import TextContent from "../components/TextContent"
import Image0 from "../images/Sauna_With_Alex.svg"
import Image1 from "../images/Sauna_With_Alex_1.png"
import Image2 from "../images/Sauna_With_Alex_2.png"
import Image3 from "../images/SWA_DesktopHome.jpg"
import styles from "../styles/project.module.scss"

export default () => {
   
   return (
      <Layout>
         <TextContent>
            <h1>Sauna With Alex</h1>
            <p>In early 2019, I worked with Alex Troitzsch to design his new website, for his Aufguss practice in Minneapolis.</p>
            <hr />
            <p>Alex is a Saunameister who provides Aufguss Sauna sessions in Minnesota. Aufguss is a German sauna tradition that is currently gaining popularity outside of Europe and in the US.</p>
            <p><i>"The word “Aufguss” is German, and can be translated with “Infusion”. It describes the activity of pouring water on the hot stones of the sauna oven. The water immediately vaporizes into steam, and increases the heat and humidity inside of the sauna room.</i></p>
            <p>I helped Alex in building his brand through logotype design, brand identity, and web design and development.</p>
            <h2>Logotype</h2>
            <p>It all started with re-designing his logotype — I took as main sources of inspiration the saunas' wide parallel boards, the simple geometric shapes that build the architecture, the steam and towel movements, as well as the German graphic design movements of the middle of the 19th century that influenced so much the American and the rest of the world's graphic design.</p>
            <div className={styles.center}>
               <img style={{maxWidth: "70%"}} src={Image0} alt="Sauna With Alex logotype" />
            </div>
            <div className={styles.grid}>
               <img src={Image1} alt="Sauna With Alex logotype" />
               <img src={Image2} alt="Sauna With Alex logotype" />
            </div>
            <h2>Website</h2>
            <p>The <a href="https://saunawithalex.com/" target="_blank" rel="noopener noreferrer">Sauna with Alex website</a> design reflects the values of the logotype and brand, and seeks to integrate the Sauna with Alex Aufguss community, while bringing new people onboard. </p>
            <img src={Image3} alt="Sauna With Alex website homepage" />
         </TextContent>
         {/* <img style={{maxWidth: "100%"}} src={Image1} alt="Diarly App for Mac and iOS" /> */}
         <Link to="/subaltern-games/">
            <h2 className={styles.next}>
               Next up: Subaltern Games
            </h2>
         </Link>
      </Layout>
   )
}
