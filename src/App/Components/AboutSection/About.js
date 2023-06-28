import React from 'react'
import './About.css'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


export default function About() {

  const navigate = useNavigate();

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const navigateContact = () => {
    // 👇️ navigate to /

    navigate('/contact');
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const {text} = useTypewriter({
    words: ['Me','Myself'],
    loop: 0,
    Cursor,
    CursorStyle:'_',
    typeSpeed:120,
    deleteSpeed:100,
    delaySpeed:1000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  })

  const handleSayHi = () => {
    Toast.fire({
      icon: 'info',
      title: 'Hey ! To leave a message, go to the Contact page.'
    })
  }


  return (
    <div>
        <h1 style={{ paddingTop: '2rem',paddingBottom:'2rem', margin: 'auto 0', fontWeight: 'normal',textAlign:"center" }}
        data-aos="slide-right"
        data-aos-duration="800"
        >
            About {' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              {text}
            </span>
          </h1>

          <div className="hero-container"
      
          
          >

            <div className="hero-text"
                data-aos="zoom-in-down"
                data-aos-offset="200"
            >
                <h1>Hey. What's Up? </h1>
                <h2>There's a lot more about me down there  👇️</h2>
                <br></br>
                <p style={{
                  textAlign:"justify"
                }}>

                Disclaimer: "Warning! Prepare for a Not-So-Special, Yet Uniquely Personal Story"

                <br></br>
                <br></br>

                
                The Past - "When Curiosity Became the Spark"
                <br></br>
                <br></br>
                
                Once upon a time, in a world of pixels and possibilities, a young tech enthusiast embarked on an epic quest for knowledge and coding adventures. 💻✨
                <br></br>

Armed with curiosity and a thirst for digital marvels, I couldn't help but wonder: How do these tiny devices conjure such magical wonders? From playing games to surfing the internet, the tech realm never ceased to amaze me. I dived headfirst into the digital rabbit hole, determined to unravel its mysteries. 🕵️‍♂️🔍
<br></br>
As I grew older, Hollywood films like V for Vendetta, Who Am I, and The Social Network further fueled my tech fascination. I couldn't resist envisioning myself as a masked coding genius, typing away at glowing screens and accomplishing astonishing feats. It was then that I knew - the world of technology had me under its spell. 🎬🚀
<br></br>
Driven by my passion, I embarked on a thrilling educational journey, majoring in computer science and engineering. I wanted to be at the forefront of cutting-edge technology, staying updated and constantly learning. After all, who wouldn't want to be the tech-savvy superhero they once dreamt of becoming? 💪💡
                <br></br>
                <br></br>

           
               
                </p>
                
                
                
                
            </div>

            <div className="hero-image"
                data-aos="flip-left"
                data-aos-offset="200"
            >
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt=""/>
            </div>
            <div className='hero-text1'
            data-aos="fade-left"
            data-aos-offset="200"
            >
              <br></br>
              <p style={{
                textAlign:"justify"
              }}>
              The Present - "Exploring the Ever-Evolving Tech Universe"
              <br></br>
              <br></br>
              As I journey through the ever-evolving landscape of technology, I continue to specialize in building awesome websites and mobile applications. My go-to languages for problem-solving are C++ and Java. When it comes to web development, I'm well-versed in the MERN stack. And for cross-platform mobile development, I've got a knack for React Native. But wait, there's more! I also have a growing interest in machine learning. While I'm still exploring the depths of this fascinating field, I'm eager to dive deeper and uncover the endless possibilities it holds.
<br></br>
When I'm not engrossed in coding, you might catch me unleashing my competitive spirit in PC games or indulging in a friendly game of football. So, let's connect and bring some coding magic to life!
<br></br>
Keep calm and code on!
              </p>
            </div>
            <div >
  
  <button class="btn-hover color-cv"
  // data-aos="slide-up"
  // data-aos-offset="200"
  onClick={navigateContact}
  >Say Hi !</button>
              
  </div>

            </div>



    </div>
  )
}
