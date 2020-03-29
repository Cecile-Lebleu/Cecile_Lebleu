import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import TextContent from "../components/TextContent"
import Image0 from "../images/diarly0.png"
import Image1 from "../images/diarly1.png"
import styles from "../styles/project.module.scss"

export default () => {
   
   return (
      <Layout>
         <TextContent>
            <h1>Diarly App</h1>
            <p>Currently working as the lead designer for <a href="https://pureformstudio.com/" target="_blank" rel="noopener noreferrer">Pureform Studio</a>, focusing on their main app <a href="https://diarly.app/" target="_blank" rel="noopener noreferrer">Diarly</a>.</p>
            <hr />
            <p>Diarly is a wonderful personal diary and journaling app that I use daily, which is why I am really excited to work with them. An excellent tool to capture daily thoughts, take notes, and manage life, Diarly is available for MacOS and iOS.</p>
            <p>Work started with a redesign of the application for Mac in 2019, and escalated to redesigning the iOS version as well. Now I am lucky enough to be a part of the core team, managing the app's design, user interface, and experience.</p>
            <img src={Image0} alt="Diarly App for Mac and iOS" />
            <p>I'm currently also the lead designer and manager for the app's website, redesigned in late 2019 and published early this year. The website is built using Gatsby, my favorite tool to build fast, performant, and easy to use websites. (This website, in which you're reading this, is also built using Gatsby!)</p>
            <p>It's an honor to be a part of this incredible experience, where I've learned so much and grown so much.</p>
         </TextContent>
         <img style={{maxWidth: "100%"}} src={Image1} alt="Diarly App for Mac and iOS" />
         <Link to="/westlake-pro/">
            <h2 className={styles.next}>
               Next up: Westlake Pro
            </h2>
         </Link>
      </Layout>
   )
}
