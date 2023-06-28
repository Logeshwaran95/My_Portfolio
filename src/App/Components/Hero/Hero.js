import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Hero.css'

export default function Hero() {

  const navigate = useNavigate();

  const navigateAbout = () => {
    // 👇️ navigate to /

    navigate('/about');
  };

  return (
    <div>
        <div className="hero-container">

            <div className="hero-text">
                <h1>Logeshwaran</h1>
                <h2>Student at College of Engineering Guindy</h2>
                <br></br>
                <p>
                Wow! You've made it to the bottom of my portfolio page! But hold on tight, because there's so much more to discover about me. Consider this just the tip of the iceberg! 😉✨

Tap the button below and brace yourself for an immersive journey into my world of tech wonders. Prepare to be amazed! 🔥🚀
                </p>
                
                <div >
                <button class="btn-hover color-cv" 
                 onClick={navigateAbout}
                 >Explore More</button>
                </div>
                
                
            </div>

            <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt=""/>
            </div>

            </div>

    </div>
  )
}
