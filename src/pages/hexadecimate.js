import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import TextContent from "../components/TextContent"
import Image0 from "../images/HEXaDecimate.svg"
import Image1 from "../images/HEXaDecimate_1.png"
import Image2 from "../images/HEXaDecimate_2.png"
import Image3 from "../images/HEXaDecimate_3.png"
import Image4 from "../images/HEXaDecimate_4.jpg"
import Image5 from "../images/HEXaDecimate_5.jpg"
import styles from "../styles/project.module.scss"

export default () => {
   
   return (
      <Layout>
         <TextContent>
            <h1>HEXaDecimate</h1>
            <h2>Subaltern Games</h2>
            <p>HEXaDecimate is a co-op card game where we all play as millennial witches and defend ourselves against alt-right occult magic (no one plays as the alt-right). The alt-right ("FrogBoard"), wins when we (the witches) are all dead. We win when FrogBoard runs out of cards.</p>
            <hr />
            <p>I am so glad to have worked with Seth from Subaltern Games to design the logotype, identity, card layout, packaging, and promo materials.</p>
            <img src={Image0} alt="HEXaDecimate Game Logotype" />
            <p>When designing the logotype, the main goal was to visually represent the contrast between both sides of the game.</p>
            <p>After the logotype was completed, we decided to keep working together to design all of the game assets. I helped designing the cards' layout, packaging, instruction manual, and promotion materials.</p>
            <img src={Image1} alt="HEXaDecimate Promo" />
            <p>HEXaDecimate was presented at PAX East 2018. It was so exciting to see the printed cards and people enjoying the game!</p>
            <img src={Image3} alt="HEXaDecimate Flyer" />
            <p>The game launched in October 2018. It was a fascinating project to work on — and I was really excited when I got my own deck in the mail! The box and cards are beautifully printed, the game is really fun, challenging, and very interesting. It has become one of my favorite games to play with friends.</p>
            <p>Be sure to order your deck at <a href="https://hexadecimategame.com/" target="_blank" rel="noopener noreferrer">hexadecimategame.com</a>!</p>
            <img src={Image4} alt="HEXaDecimate Game Cards" />
            <img src={Image5} alt="People playing HEXaDecimate Game at PAX East 2018" />

         </TextContent>
         <div className={styles.center}>
            <img style={{maxWidth: "100%"}} src={Image2} alt="HEXaDecimate Game Banner" />
         </div>
         <Link to="/work/">
            <h2 className={styles.back}>
               Back to Work
            </h2>
         </Link>
      </Layout>
   )
}
