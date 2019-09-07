import React from "react"

import ProjectPage from "../../components/projectpage"
import style from "../../components/projectpage.module.css"
import HEXaDecimate from "../../images/HEXaDecimate.svg"
import HEXaDecimate_1 from "../../images/HEXaDecimate_1.png"
import HEXaDecimate_2 from "../../images/HEXaDecimate_2.png"
import HEXaDecimate_3 from "../../images/HEXaDecimate_3.png"
import HEXaDecimate_4 from "../../images/HEXaDecimate_4.jpg"
import HEXaDecimate_5 from "../../images/HEXaDecimate_5.jpg"

export default () => (
   <ProjectPage title="HEXaDecimate">
      <div>
         <p>HEXaDecimate is a co-op card game where we all play as millennial witches and defend ourselves against alt-right occult magic (no one plays as the alt-right). The alt-right ("FrogBoard"), wins when we (the witches) are all dead. We win when FrogBoard runs out of cards.</p>
      </div>
      <div className={style.twoColumnImage}>
         <img
            src={HEXaDecimate}
            alt="HEXaDecimate Logotype"
            className={style.maxWidth100}
         />
      </div>
      <div>
         <p>I am so glad to have worked with Seth from Subaltern Games to design the logotype, identity, card layout, packaging, and promo materials.</p>
         <p>When designing the logotype, the main goal was to visually represent the contrast between both sides of the game.</p>
         <p>After the logotype was completed, we decided to keep working together to design all of the game assets. I helped designing the cards' layout, packaging, instruction manual, and promotion materials.</p>
      </div>
      <div className={style.twoColumnImage}>
         <img
            src={HEXaDecimate_1}
            alt=""
            className={style.maxWidth100}
            style={{margin: "1rem 0"}}
         />
      </div>
      
      <img
         src={HEXaDecimate_2}
         alt=""
         className={style.maxWidth100}
         style={{gridColumn: "2 / 3"}}
      />
      <img
         src={HEXaDecimate_3}
         alt=""
         style={{gridColumn: "3 / -1"}}
         className={style.maxWidth100}
      />
      <div>
         <p>HEXaDecimate was presented at PAX East 2018. It was so exciting to see the printed cards and people enjoying the game!</p>
         <p>The game launched in October 2018. It was a fascinating project to work on — and I was really excited when I got my own deck in the mail! The box and cards are beautifully printed, the game is really fun, challenging, and very interesting. It has become one of my favorite games to play with friends.</p>
         <p>Be sure to order your deck at <a className={style.link} href="hexadecimategame.com">hexadecimategame.com</a>!</p>
      </div>
      <img
         src={HEXaDecimate_4}
         alt=""
         style={{margin: "1rem 0"}}
         className={style.maxWidth100}
      />
      <img
         src={HEXaDecimate_5}
         alt=""
         style={{margin: "1rem 0"}}
         className={style.maxWidth100}
      />
      
   </ProjectPage>
)
