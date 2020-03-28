import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import TextContent from "../components/TextContent"
import Image0 from "../images/WestlakePro0.png"
import Image1 from "../images/WestlakePro1.png"
import Image2 from "../images/WestlakePro2.jpg"
import styles from "../styles/project.module.scss"

export default () => {
   
   return (
      <Layout>
         <TextContent>
            <h1>Westlake Pro</h1>
            <p>2019–2020</p>
            <p>Web Design & Development, WordPress, Elementor, WooCommerce</p>
            <hr />
            <h2>Westlake Pro Studio Design Group</h2>
            <p>In September 2019, I worked with <a href="https://westlakeprodesigngroup.com/" target="_blank" rel="noopener noreferrer">Westlake Pro Studio Design Group</a> to design their studio design portfolio website. The Westlake Pro team wanted to be able to update the studios, add new ones, and modify existing ones, at any time, and as easily as possible — thus WordPress and Elementor was the right choice for the project.</p>
            <p>Having a background in the music production and audio industry, we clicked right away and it was the start of an awesome business endeavor.</p>
            <p>The website is built to suit the design group's needs, showcasing beautifully all the amazing studios they have designed and built for such incredible producers and artists <i>(Snoop Dogg, Ray Parker Jr., Disney, you know, just to name a few)</i>. It was an amazing experience to work with them building this first website, and the studio design industry will always have a warm place in me.</p>
            <img src={Image0} alt="Westlake Pro Studio Design Group Homepage" />
            <p>After a very successful project designing and developing the Studio Design Group's website, we kicked off a new project: Redesigning and re-building (or should I say completely overhauling!) their main website.</p>
            <h2>Westlake Pro</h2>
            <p><a href="https://westlakepro.com/" target="_blank" rel="noopener noreferrer">Westlake Pro's main website</a> is a swiss knife, in my opinion. On one side, it's a huge online store — carrying most of the great brands in the audio gear equipment. On the other side, it's the face of a great community and brand, that organizes awesome events and meetups where mortals like you and me can meet some of the greatest minds in the audio industry.</p>
            <p>And similarly to the first website I created for them, this one was meant to be as customizable and expandable as possible, making it easy for their team (trust me, <a href="https://westlakepro.com/about/staff/" target="_blank" rel="noopener noreferrer">Westlake Pro is a big team</a>) to add products and collections, events, to update information, and get the most out of it.</p>
            <p>I must say it was a challenge — but a wonderful one. Between having <a href="https://westlakepro.com/shop/" target="_blank" rel="noopener noreferrer">thousands of products</a> and <a href="https://westlakepro.com/about/" target="_blank" rel="noopener noreferrer">over 5 decades of history</a> and information to process and re-design for a modern audience, I also took it upon myself to make the website future- and feature-proof. Taking advantage of all the WordPress tools, using Elementor's Theme Builder functionality to the fullest, and adding custom types and features, the website went from being <i>"a noble dinosaur with mis-matched socks"</i> to being a really intuitive experience to manage and work with.</p>
            <img style={{maxWidth: "100%"}} src={Image1} alt="Diarly App for Mac and iOS" />
            <p>The design and development of the new Westlake Pro website started in late 2019, and the new website was published in early February of 2020.</p>
            <p><i>Rather than showing you images, I think it would be much better if you take a look at the <a href="https://westlakepro.com/" target="_blank" rel="noopener noreferrer">Westlake Pro website</a> directly — it's not something I can really explain in images.</i></p>
            <p>Possibly the best part of all of this is the friends I made along the way — with the wonderful people at Westlake Pro's Marketing team. It was awesome, and I truly hope to work with them again.</p>
         </TextContent>
         <img style={{maxWidth: "100%"}} src={Image2} alt="Diarly App for Mac and iOS" />
         <p style={{textAlign: "center"}}><i>None other than Snoop Dogg's studio, designed by Westlake Pro. Did you notice the Boo in the corner?</i></p>
         <Link to="/sauna-with-alex/">
            <h2 className={styles.next}>
               Next up: Sauna with Alex
            </h2>
         </Link>
      </Layout>
   )
}
