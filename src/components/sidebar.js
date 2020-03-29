import React from "react"
import { Link } from "gatsby"

import styles from "./sidebar.module.scss"

import IconContainer from "../images/icons/icon_container"
import DevToLogo from "../images/icons/devto_logo"
import DribbbleLogo from "../images/icons/dribbble_logo"
import GithubLogo from "../images/icons/github_logo"
import PinterestLogo from "../images/icons/pinterest_logo"
import TwitterLogo from "../images/icons/twitter_logo"
import MailLogo from "../images/icons/mail_logo"
// import ColorModeSwitch from "./sidebar/color_mode"
import Fleuron from "../images/icons/fleuron"

export default () => (
   <div className={styles.sidebar}>
      <Link to="/">
         <h1 className={styles.vertical_text}>Cécile&nbsp;Lebleu</h1>
      </Link>
      <div className={styles.menu}>
         <Link
            to="about"
            className={styles.vertical_text}
            activeClassName = {styles.active}
            partiallyActive={true}
         >about</Link>
         <Link
            to="work"
            className={styles.vertical_text}
            activeClassName = {styles.active}
            partiallyActive={true}
         >work</Link>
         <Link
            to="blog"
            className={styles.vertical_text}
            activeClassName = {styles.active}
            partiallyActive={true}
         >blog</Link>
         {/* <Link
            to="playground"
            className={styles.vertical_text}
            activeClassName = {styles.active}
            partiallyActive={true}
         >play</Link> */}
      </div>
      <div className={styles.icons}>
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
         <IconContainer className={styles.icon_container} name={<Fleuron />} />
      </div>
   </div>
)

// <IconContainer
//    className={sidebarStyles.icon_container}
//    name={<ColorModeSwitch />}
// />
