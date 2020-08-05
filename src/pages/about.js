import React from "react"
import Layout from "../components/layout"
import Cécile from "../images/cecilelebleu.jpg"
import TextContent from "../components/TextContent"
import styles from "./about.module.scss"
import { Link } from "gatsby"

export default () => (
   <Layout>
      <TextContent>
         <div className={styles.about}>
            <div className={styles.photo} >
               <img src={Cécile} alt="Cécile Lebleu"/>
            </div>
            <h1>Cécile Lebleu</h1>
            <p>Nice to meet you! I’m Cécile Lebleu, brand designer turned front-end developer.</p>
            <p>I like to build interactive websites and design systems. I also enjoy making great food.</p>
            <p>If you're here, chances are, you want to learn more about who I am. So I have been brutally honest in the making of this slice of my life, so you're not missing out on details. To me, a personality is more important than a person's stacks or degrees. I'm playful and I live for learning. So if you like who I am and you think I can help you, please reach out — I'd like to be friends!</p>
            <p>Currently working with: Gatsby, React, Figma</p>
            <p>Currently learning: Advanced JavaScript, Advanced React</p>
            <hr />
            <p>Some things I love:</p>
            <ul>
               <li><span className={styles.typography}>❧ </span> Typography</li>
               <li><span role="img" aria-label="pen">🖋</span> Classic & minimal design</li>
               <li><span role="img" aria-label="ramen">🍜</span> Ramen</li>
               <li><span role="img" aria-label="coder">👩🏼‍💻</span> Clean code</li>
               <li><span role="img" aria-label="bread">🥖</span> Fresh bread</li>
               <li><span role="img" aria-label="tree">🌳</span> Walks in nature</li>
            </ul>
            <h2>Skills</h2>
            <p>What I'm good at, and <i>not-so-good-at</i> too, because I'm human after all <span role="img" aria-label="shrug">🤷🏼‍♀️</span></p>
            <h3>Graphic</h3>
            <ul className={styles.simple}>
               <li>Walking know-it-all about typography. Will complain about kerning and use of "classic" default system fonts without a <i>very</i> good reason.</li>
               <li>Design systems (like brand identities), layouts (like responsive web design or prints), icons, and letters.</li>
               <li>Not so good at illustration or artistic things. It's too <i>free</i>. I prefer to keep art for personal leisure, and use tried-and-tested systems for client's projects.</li>
               <li><b>Good at:</b> Designing systems</li>
               <li><b>Not so much:</b> Arts & illustration</li>
            </ul>
            <h3>Development</h3>
            <ul className={styles.simple}>
               <li>Current stack: HTML, CSS, JavaScript, React, and Gatsby.</li>
               <li>WordPress with Elementor, optionally WooCommerce. Will bug everyone about "plugin bloat" and nag about optimizations.</li>
               <li>Always looking for the newest things to learn, and will avoid older frameworks and tools at all cost. I prefer using modern CSS over Bootstrap, for example, or <i>anything</i> over jQuery.</li>
               <li>Currently diving into back-end database and the like, but so far, I'm far from knowledgeable in the field. I'd prefer working with your back-end engineer of choice.</li>
               <li><b>Good at:</b> Front-End</li>
               <li><b>Not so much:</b> Back-End</li>
            </ul>
            <h3>Cookery</h3>
            <ul className={styles.simple}>
               <li>I have a special thing for bread, soup, sauce, and salad. It just makes me happy. <i>My alter ego is a 17th to 19th century cook. Yes, with the costume and all. Shh, don't tell anyone.</i></li>
               <li>Particularly good at making pizza and bread, according to people.</li>
               <li>Not into spicy food (as in hot peppers). But might eat all the mustard and soy sauce in your fridge, if left alone.</li>
            </ul>

            <h2>Timeline</h2>
				<p>Best read from the bottom up.</p>
				            
            <h3>2020</h3>
            <ul>
					<li>Currently going through The Advanced JavaScript Full-Stack Bootcamp.</li>
					<li>Finished a very thorough React Bootcamp.</li>
               <li>Learned Gatsby.</li>
            </ul>

            <h3>2019</h3>
            <ul>
               <li><span role="img" aria-label="rocket">🚀</span> Deep dive into coding. Characters typed per year must have skyrocketed here.</li>
               <li><span role="img" aria-label="computer">🖥</span> Worked with even more amazing people, building even more WordPress websites.</li>
            </ul>

            <h3>2018</h3>
            <ul>
               <li><span role="img" aria-label="laptop">💻</span> Continued learning about front-end web development. Figured out that vanilla might not be the standard anymore.</li>
               <li><span role="img" aria-label="card">🎴</span> All the hard work finally started to yield results: I had the opportunity to work in <Link to="/hexadecimate">an amazing card game</Link>! I love that game and play it regularly. My first little brother is a huge fan.</li>
            </ul>

            <h3>2017</h3>
            <ul>
               <li><span role="img" aria-label="system">🗂</span> Took a deep-dive into brand identity design. Somewhere around here I figured out I really like building, and following, systems.</li>
               <li><span role="img" aria-label="cog">⚙️</span> To expand my graphic design capabilities, I started learning how to use WordPress to build client websites.</li>
               <li><span role="img" aria-label="laptop">💻</span> Meanwhile, I started learning about programming. Dabbled with Python, PHP, and Machine Learning, but ultimately decided to stick to front-end.</li>
               <li><span role="img" aria-label="nerd">🤓</span> Still nerding every day into books about typography, print, design, and marketing, and designing every day better type.</li>
            </ul>

            <h3>2016</h3>
            <ul>
               <li><span role="img" aria-label="briefcase">💼</span> Worked on my freelance logo designer career, with more clients and more project diversity.</li>
               <li><span role="img" aria-label="book">📕</span> Learned about graphic design and marketing. Obsessed over print design vs pixel design.</li>
               <li><span role="img" aria-label="ruler">📐</span> Kept expanding my knowledge in type design. Started designing my first typefaces.</li>
            </ul>

            <h3>2015</h3>
            <ul>
               <li><span role="img" aria-label="brush">🖌</span> Started learning lettering design. Got sucked into learning what defines the shapes of letters.</li>
               <li><span role="img" aria-label="computer nerds">🧑🏻‍💻👩🏼‍💻</span> Got married!</li>
               <li><span className={styles.typography}>❧ </span> Learned about type-setting and type design.</li>
               <li><span role="img" aria-label="trophy">🏆</span> Started designing logotypes for clients: First freelance project!</li>
            </ul>

            <h3>Prior</h3>
            <ul>
               <li><span role="img" aria-label="croissant">🥐</span> Looking for a simpler life, I worked as a baker and barista at a local french shop for a while. While painting the menu on the walls, I dived into letter design, and spent some time in the nearby university's library reading all about Frutiger.</li>
               <li><span role="img" aria-label="video camera">🎥</span> Then, I studied and worked part-time in photography, videography, music video production, including product photography, production, recording, editing.</li>
               <li><span role="img" aria-label="microphone">🎙</span> I also got a lot into the music industry — at one point it was my goal in life. I learned about all the processes, from recording to mastering to marketing and everything in between, met some incredible producers and artists, and visited amazing audio gear factories and studios.</li>
               <li><span role="img" aria-label="floppy disc">💾</span> I worked and played in web development, doing the monotonous HTML and CSS my dad didn't want to do (lol), back when DreamWeaver was the best thing since sliced bread.</li>
               <li><span role="img" aria-label="kid">👧🏼</span> During my childhood and early years, I was in a great environment to learn all sorts of things. At-home summer jobs were the norm for me, and we were always doing something different.</li>
            </ul>

         </div>
      </TextContent>
   </Layout>
)