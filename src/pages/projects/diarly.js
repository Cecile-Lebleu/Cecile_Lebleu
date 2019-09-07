import React from "react"

import ProjectPage from "../../components/projectpage"
import style from "../../components/projectpage.module.css"
import Diarly_01 from "../../images/Diarly_01.png"
import Diarly_02 from "../../images/Diarly_02.png"
import Diarly_03 from "../../images/Diarly_03.png"
import Diarly_04 from "../../images/Diarly_04.png"
import Diarly_11 from "../../images/Diarly_11.png"
import Diarly_12 from "../../images/Diarly_12.png"
import Diarly_13 from "../../images/Diarly_13.png"

let imageStyles = {
   maxWidth: "100%",
   margin: "1rem 0"
}

export default () => (
   <ProjectPage title="Diarly">
      <div>
         <p>Diarly is a wonderful personal journal app built by <a className={style.link} href="https://pureformstudio.com/diarly">PureForm Studio</a>. I use it on a daily basis because of journaling's proven benefits for personal improvement.</p>
         <p>After suggesting a few typographical improvements, the team contacted me to re-design the UI of the desktop and mobile app. Needless to say, I was thrilled, and a great project started.</p>
         <p>This was such a great project to work on, especially as I could see the changes improvements on an app I already used every day. This also allowed me to take both the position of the designer and the user, an experience from which I learned a lot, and which greatly improved my design skills and processes.</p>
         <p>Be sure to check out the app on the <a className={style.link} href="https://itunes.apple.com/us/app/diarly-daily-journal/id1387167765">Mac App Store</a> or the <a className={style.link} href="https://itunes.apple.com/us/app/diarly/id1390214624?ls=1&mt=8">iOS App Store</a>!</p>
      </div>
      <div className={style.twoColumnImage}>
         <img
            src={Diarly_01}
            alt=""
            style={imageStyles}
         />
         <img
            src={Diarly_02}
            alt=""
            style={imageStyles}
         />
         <img
            src={Diarly_03}
            alt=""
            style={imageStyles}
         />
         <img
            src={Diarly_04}
            alt=""
            style={imageStyles}
         />
         <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
            gridGap: "2rem",
            marginTop: "1rem"
         }}>
            <img
               src={Diarly_11}
               alt=""
               style={{
                  maxWidth: "100%",
                  gridArea: "1/1/3/2"
               }}
            />
            <img
               src={Diarly_12}
               alt=""
               style={{
                  maxWidth: "100%",
                  gridArea: "2/2/4/3"
               }}
            />
            <img
               src={Diarly_13}
               alt=""
               style={{
                  maxWidth: "100%",
                  gridArea: "3/1/5/2"
               }}
            />
         </div>
      </div>
      
      
      
   </ProjectPage>
)