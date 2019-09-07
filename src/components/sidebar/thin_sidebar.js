import React from "react"
import { Link } from "gatsby"

import styles from "./thin_sidebar.module.css"

import IconContainer from "./Icon_container"
import DevToLogo from "./devto_logo"
import DribbbleLogo from "./dribbble_logo"
import GithubLogo from "./github_logo"
import PinterestLogo from "./pinterest_logo"
import TwitterLogo from "./twitter_logo"
import MailLogo from "./mail_logo"
// import ColorModeSwitch from "./color_mode"
import Fleuron from "./fleuron"

export default () => (
   <div className={styles.thin_sidebar}>
      <Link to="/">
         <h2 className={styles.vertical_text}>Cécile&nbsp;Lebleu</h2>
      </Link>
      <div className={styles.sidebar_icons}>
         
         <IconContainer
            link="https://dev.to/cecilelebleu"
            name={<DevToLogo />}
         />
         <IconContainer
            className={styles.icon_container}
            link="https://dribbble.com/CzlLebleu"
            name={<DribbbleLogo />}
         />
         <IconContainer
            className={styles.icon_container}
            link="https://github.com/Cecile-Lebleu"
            name={<GithubLogo />}
         />
         <IconContainer
            className={styles.icon_container}
            link="https://pinterest.com/czllebleu/"
            name={<PinterestLogo />}
         />
         <IconContainer
            className={styles.icon_container}
            link="https://twitter.com/CzlLebleu/"
            name={<TwitterLogo />}
         />
         <IconContainer
            className={styles.icon_container}
            link="mailto:hello@cecilelebleu.com?Subject=Hello!"
            name={<MailLogo />}
         />
         <IconContainer
            className={styles.icon_container}
            name={<Fleuron />}
         />
      </div>
   </div>
)

// <IconContainer
//    className={sidebarStyles.icon_container}
//    name={<ColorModeSwitch />}
// />
