import React from 'react'
import './About.css'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Swal from 'sweetalert2';


export default function About() {

  React.useEffect(() => {
    AOS.init();
      AOS.refresh();
  }, []);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
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
      icon: 'success',
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
                <p>
                {/* Third-year Engineering student, Future Software Engineer. My passion for Coding brought me to the College of Engineering, Guindy, Anna University. */}
                Before discussing the current version of myself, let me first explain how the previous version of myself came to be. a quick story is below!
                
                <br></br>
                <br></br>
                When I was younger, I had a lot of computer-related inquiries! I pondered every time I played games or searched the internet. How such a tiny device is able to produce such miracles! I'm constantly baffled as to how I manage to play games, watch videos, search the internet, etc.
                When something puzzles me or I don't understand it, I always want to learn everything there is to know about it. and for that reason, I started using my computer and phone more frequently.
                 I always pick up my computer the moment I have some free time on the weekend or after school, even if I have nothing to do!
                <br></br>
                <br></br>
                I have vivid memories of watching several Hollywood films as a young child that dealt with technology and hacking, including V for Vendetta, Who Am I, The Social Network, etc. I can still picture a man sitting at a desk wearing a black mask, inputting programmes into a green and black themed editor, and successfully doing astonishing feats.

                I grew more conscious of technology's possibilities and was amazed by the most recent breakthroughs. 
                <br></br>
                <br></br>
                It's for this reason that I choose to major in computer science and engineering. I wanted to be updated and keep learning more and more about cutting-edge technology. I always aspire to be someone who is constantly learning about the things that intrigue him, just like I did when I was a child.


                </p>
                
                <div >
  
                <button class="btn-hover color-cv"
                // data-aos="slide-up"
                // data-aos-offset="200"
                onClick={handleSayHi}
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
