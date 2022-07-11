import React,{useEffect, useRef} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './App/Components/Header/NavBar.css'
import NavBar  from "./App/Components/Header/NavBar";
import Intro from "./App/Intro/Intro";
import SocialIcons from "./App/Components/SocialIcons";
import ProjectCard from "./App/Components/ProjectCard";
import Hero from "./App/Components/Hero/Hero";
import Skills from "./App/Components/SkillSection/Skills";
import AboutMe from "./App/Components/AboutSection/About";

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./App/Components/Footer/Footer";
import Contact from "./App/Components/Contact/Contact";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ProjectDetail from "./App/Components/ProjectDetails/ProjectDetail";

import AOS from 'aos';
import 'aos/dist/aos.css'; 




//Pages
const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
    AOS.refresh();
    
  }, [])

  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView()  ;
  const executeScroll2 = () => myRef2.current.scrollIntoView()  ;
  const executeScroll3 = () => myRef3.current.scrollIntoView()  ;

  return (
      <>
      <div style={{}} ref={myRef3}>
      {/* <div class='image-background'>

        <div className="content">
        <p>I love Web Developement !</p>
        <p>Here Iam</p>
        <Button variant="outline-light" href="#projects" onClick={executeScroll}/>
    
  </div>
</div > */}
<div class="bg-image">
<NavBar setColor={false}/>
</div>

<Parallax pages={2} style={{ top: '0', left: '0' }}>
  <ParallaxLayer

    offset={0}
    speed={2.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div class="bg-text"
 
    >
  <h1>Welcome</h1>
  <p>Wanna Know About Me ! </p>

  <button class="mybtn start" 
  // onClick={executeScroll}
  >Scroll Down &#128525; </button>
</div>

  </ParallaxLayer>

  {/* <ParallaxLayer offset={1} speed={2} className="bg-image" style={{minHeight:"100vh"}}/> */}

  <ParallaxLayer
  // className="bg-image"
    
    offset={1}
    speed={0.5}
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    }}>
      <div className="bg-text1">

    <div className="quote">
      <h1>I'm a Web Developer</h1>
      <h2>Whats Your Superpower ? </h2>
    </div>
  

    <button class="mybtn start" onClick={executeScroll}>Lets Go &#128526;</button>
      <button class="mybtn start">Scroll Up</button>
      </div>

  </ParallaxLayer>
</Parallax>



      <div ref={myRef} >
        
      </div>

      
      <div style={{minHeight:"70vh",marginTop:"5%"}}
       data-aos="flip-up"
       data-aos-offset="200"
       data-aos-delay="50"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out"
       data-aos-mirror="true"
       data-aos-once="false"
       data-aos-anchor-placement="top-center"
      >
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal',textAlign:"center",fontSize:"2rem" }}>
              Hi There,
      </h1>
       <Intro/>
       

       <div class="buttons">
        <button  
        // data-aos='slide-right'
        class="btn-hover color-cv">Download CV</button>
        <button
        // data-aos='slide-left'
        class="btn-hover color-hire">Hire Me</button>
        
      </div>

      <SocialIcons/>

      <div class="buttons" style={{marginTop:"40px"}}>
      <button class="btn-hover color-cv" onClick={executeScroll2}>Continue</button>
      </div>
      
      </div>

     

      <div style={{marginTop:"8%"}} ref={myRef2}
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      >
        <Hero/>

      </div>  

      <div class="buttons" style={{marginTop:"20px"}}
          data-aos="slide-down"
          data-aos-duration="800"
      >
      <button class="btn-hover color-cv" onClick={executeScroll3}>Go Up</button>
      </div>

    
      </div>

      </>
  );
};

const About = () => {
  return (
    <div>
      <NavBar setColor={true}/>
      <AboutMe/>
    </div>
  );
};
const SkillsSection = () => {
  return (
    <div>
        <NavBar setColor={true}/>
        <Skills/>
    </div>
 
    
 
  );
};

const ProjectSection = () => {
  return (
    <div>
      <NavBar setColor={true}/>
      <ProjectCard/>
    </div>
  );
}

const ContactMe = () => {
  return (
    <div>
        <NavBar setColor={true}/>
       <Contact/>
    </div>
  );
};

const ProjectDetailsMobile = () => {
  return (
    <div>
      <NavBar setColor={true}/>
      <ProjectDetail/>
    </div>
  );
}

const ProjectDetailsWeb = () => {
  return (
    <div>
      <NavBar setColor={true}/>
      {/* <ProjectDetail/> */}
    </div>
  );
}




function App() {

 
  
  return (
    <div>
     
       <BrowserRouter>

     
      
       
          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/skills" element={<SkillsSection/>} />
            <Route path="/contact" element={<ContactMe/>} />
            <Route path="/projects" element={<ProjectSection />}/>
            <Route path="/project/mobile/details/:id" element={<ProjectDetailsMobile/>}/>
            <Route path="/project/web/details" element={<ProjectDetailsWeb/>}/>

          </Routes>

          <Footer/>
      
        
      </BrowserRouter>
    </div>
  );
}

export default App;
