import React,{useState} from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import { Tab,Tabs } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ScrollAnimation from 'react-animate-on-scroll';

import AOS from 'aos';
import 'aos/dist/aos.css';



export default function ProjectCard() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  const projects = [
    {
      name: 'My Portfolio',
      description: 'This is my portfolio website. It is a ReactJS project.',
      image: 'https://i.imgur.com/XqQXqQZ.png',
      link: '',
      stack: [
        'HTML',
        'CSS',
        'JavaScript',
        'React'
      ]
    },
    {
      name: 'Calculator',
      description: 'This is a simple calculator. It is a ReactJS project.',
      image: 'https://i.imgur.com/XqQXqQZ.png',
      link: '',
      stack: [
        'HTML',
        'CSS',
        'JavaScript',
      ]
    },
    {
      name: 'Tic Tac Toe',
      description: 'This is a Tic Tac Toe game. It is a ReactJS project.',
      image: 'https://i.imgur.com/XqQXqQZ.png',
      link: '',
      stack: [
        'HTML',
        'CSS',
        'JavaScript',
      ]
    },
    {
      name: 'Movie Website',
      description: 'This is a movie website. It is a ReactJS project.',
      image: 'https://i.imgur.com/XqQXqQZ.png',
      link: '',
      stack: [
        'HTML',
        'CSS',
        'JavaScript',
      ]
    }
  ]

  const {text} = useTypewriter({
    words: ['Projects','Services'],
    loop: 0,
    Cursor,
    CursorStyle:'_',
    typeSpeed:120,
    deleteSpeed:100,
    delaySpeed:1000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  })

  const [key, setKey] = useState('home');

  return (
    <>
   
     
     <h1 style={{ paddingTop: '2rem',paddingBottom:'2rem', margin: 'auto 0', fontWeight: 'normal',textAlign:"center" }}
        data-aos="slide-right"
        data-aos-duration="800"
     >
            My {' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              {text}
            </span>
          </h1>

          <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      style={{
        margin:"30px"
      }}
    >
      <Tab eventKey="home" title="Web Apps" >
        
      <div class="box-container">
     

     {projects.map(project => 
   <div class="box-item"
   data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
   >
     <div class="flip-box">
       <div class="flip-box-front text-center" style={{backgroundImage: `url("https://s25.postimg.cc/frbd9towf/cta-2.png")`}}>
         <div class="inner color-white">
           <h3 class="flip-box-header">{project.name}</h3>
           <p>{project.description}</p>
           <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
         </div>
       </div>
       <div class="flip-box-back text-center" style={{backgroundImage: `url("https://s25.postimg.cc/frbd9towf/cta-2.png")`}}>
         <div class="inner color-white">
           <h3 class="flip-box-header">{project.name}</h3>
           <p>{project.description}</p>
           <button class="flip-box-button">View More</button>
         </div>
       </div>
     </div>
   </div>
       )}
     
 </div>

      </Tab>
      <Tab eventKey="Mobile Apps" title="Mobile Apps" >
        
        
      <div class="box-container"
      
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      >
     

     {projects.map(project => 
   <div class="box-item">
     <div class="flip-box">
       <div class="flip-box-front text-center" style={{backgroundImage: `url("https://s25.postimg.cc/frbd9towf/cta-2.png")`}}>
         <div class="inner color-white">
           <h3 class="flip-box-header">{project.name}</h3>
           <p>{project.description}</p>
           <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
         </div>
       </div>
       <div class="flip-box-back text-center" style={{backgroundImage: `url("https://s25.postimg.cc/frbd9towf/cta-2.png")`}}>
         <div class="inner color-white">
           <h3 class="flip-box-header">{project.name}</h3>
           <p>{project.description}</p>
           <button class="flip-box-button">View More</button>
         </div>
       </div>
     </div>
   </div>
       )}
     
 </div>


      </Tab>
      {/* <Tab eventKey="Others" title="Others" >
        <p>hey</p>
      </Tab> */}
    </Tabs>
   
</>
  )
}
