import React from 'react'
import { Link } from "gatsby"
// import { Helmet } from "react-helmet"
import styles from "./work.module.scss"
import Layout from "../components/layout"

export default () => {
   
   return (
      <Layout>
         <div className={styles.container}>
            <Link to="/diarly/" className={styles.hoverLink}>
               <h2>Diarly App</h2>
               <p>App UI/UX design, Website Design & Development <br /> 2019 – Ongoing</p>
            </Link>
            <Link to="/westlake-pro/" className={styles.hoverLink}>
               <h2>Westlake Pro</h2>
               <p>Website Design & Development for e-Commerce & Portfolio <br /> 2019 – 2020</p>
            </Link>
            <Link to="/sauna-with-alex" className={styles.hoverLink}>
               <h2>Sauna With Alex</h2>
               <p>Logotype, Website Design & Development <br /> 2019</p>
            </Link>
            <Link to="/hexadecimate/" className={styles.hoverLink}>
               <h2>Subaltern Games</h2>
               <p>HEXaDecimate Card Game Design, Layout, & Promo <br /> 2018</p>
            </Link>
         </div>
            
      </Layout>
   )
}
