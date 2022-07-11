import React from 'react'
import './About.css'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


export default function About() {

  React.useEffect(() => {
    AOS.init();
      AOS.refresh();
  }, []);

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
                <h1>Hey. What's Up? Hello !</h1>
                <h2>I'm Logeshwaran</h2>
                <p>
                {/* Third-year Engineering student, Future Software Engineer. My passion for Coding brought me to the College of Engineering, Guindy, Anna University. */}
                I have vivid memories of watching several Hollywood films as a young child that dealt with technology and hacking, including V for Vendetta, Who Am I, The Social Network, etc. I can still picture a man sitting at a desk wearing a black mask, inputting programmes into a green and black themed editor, and successfully doing astonishing feats. I learned about what computers are capable of and was amazed to see these new advancements! I had aspired to be a computer-working guy since I was a young child.

I've always wanted to be a person who spends their days in front of a computer, updating themselves, and learning new things.

                </p>
                
                <div >
                <button class="btn-hover color-cv"
                // data-aos="slide-up"
                // data-aos-offset="200"
                >Say Hi !</button>
                </div>
                
                
            </div>

            <div className="hero-image"
                data-aos="flip-left"
                data-aos-offset="200"
            >
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt=""/>
            </div>

            </div>


    </div>
  )
}
