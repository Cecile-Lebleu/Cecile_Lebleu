import React from "react"
import styles from "./card.module.scss"

export default ({ children, backgroundColor}) => (
	<div className={styles.card} style={{backgroundColor: backgroundColor}}>
		{ children }
	</div>
)