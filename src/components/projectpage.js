import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ProjectPageStyles from "./projectpage.module.css"

export default ( props ) => (
   <Layout>
      <div className={ProjectPageStyles.project_page_layout}>
         
         <h1>{props.title}</h1>
         
         <div className={ProjectPageStyles.contents}>
            {props.children}
         </div>
         
         <Link to="/" className={ProjectPageStyles.back}>
            <h2>back to portfolio</h2>
         </Link>
      </div>
   </Layout>
)