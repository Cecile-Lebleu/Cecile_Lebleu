import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import styles from "./index.module.scss"

import Layout from "../components/layout"
import About from "../components/about"

export default () => (
   <Layout>
      <Helmet>
         <meta charSet="utf-8" lang="en" />
         <title>Cécile Lebleu</title>
         <meta name="Description" content="Portfolio website of designer & developer Cécile Lebleu" />
      </Helmet>
      <div className={styles.intro}>
         <div className={styles.container}>
            <div className={styles.title}>
               <span className={styles.fleuron}>❧</span>
               <h2><span>Front</span><br /><span>End & UI</span><br /><span>Developer</span></h2>
            </div>
         </div>
         <div>
            <About />
         </div>
      </div>
      <div className={styles.undermenu}>
         <Link to="/work/" className={styles.hoverLink}>
            <h2>Work</h2>
         </Link>
         <Link to="/about/" className={styles.hoverLink}>
            <h2>About</h2>
         </Link>
         <Link to="/blog/" className={styles.hoverLink}>
            <h2>Blog</h2>
         </Link>
      </div>
   </Layout>
)

