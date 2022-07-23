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
                I'm a second year engineering student at college of engineering guindy , Anna University , Chennai. 
                Web technologies truly pique my curiosity. I love
building websites and mobile applications. I
adore programming, problem-solving, and tasks
that require me to use my skills to the fullest.
                </p>
                
                <div >
                {/* <button class="btn-hover color-cv" 
                 onClick={navigateAbout}
                 >View More</button> */}
                </div>
                
                
            </div>

            <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt=""/>
            </div>

            </div>

    </div>
  )
}
