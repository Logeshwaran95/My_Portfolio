import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <div>
        <div className="hero-container">

            <div className="hero-text">
                <h1>Logeshwaran</h1>
                <h2>Aspiring Full Stack Developer</h2>
                <p>
                    I am a full stack developer with a passion for building
                    beautiful and functional websites. I have a passion for
                    learning new technologies and constantly learning new
                    things.
                </p>
                
                <div >
                <button class="btn-hover color-cv">Say Hi !</button>
                </div>
                
                
            </div>

            <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt=""/>
            </div>

            </div>

    </div>
  )
}
