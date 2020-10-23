import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import styles from "./index.module.scss"

import Layout from "../components/layout"
import Card from '../components/card'

export default () => (
   <Layout>
      <Helmet>
         <meta charSet="utf-8" lang="en" />
         <title>Cécile Lebleu</title>
         <meta name="Description" content="Portfolio website of designer & developer Cécile Lebleu" />
      </Helmet>
		<div className={styles.area1}>
			<Card backgroundColor="#ffffff">
				<div className={styles.deco}>
					{/* <p>a</p> */}
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<h2>
					<span>Front</span>
					<br />
					<span>End & UI</span>
					<br />
					<span>Developer</span>
				</h2>
			</Card>
			<Card backgroundColor="#272727">
				<p>Nice to meet you! I’m <span>Cécile Lebleu</span>, brand designer turned front-end developer.</p>
				<p>I build interactive websites, brand identities, and design systems. I also like to make great food.</p>
				<Link to="/about/" >
					<button style={{width: "100%"}}>About</button>
				</Link>
			</Card>
		</div>
   </Layout>
)