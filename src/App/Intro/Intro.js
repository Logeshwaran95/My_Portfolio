import React from 'react'
import { Typewriter,useTypewriter,Cursor } from 'react-simple-typewriter'
import './Intro.css'

export default function Intro() {
    

      const {text} = useTypewriter({
        words: ['Logeshwaran','An aspiring full-stack developer. ', 'A Student At CEG', 'A Self believer'],
        loop: 0,
        Cursor,
        CursorStyle:'_',
        typeSpeed:120,
        deleteSpeed:100,
        delaySpeed:1000,
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
      })

       

    return (

        <div className='container'>

      

        <div className='introStyle'>

            <div className='intro'>
      
          <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
            I'm{' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              {text}
            </span>
          </h1>
          
          </div>

          <br></br>

          {/* social media icons */}
          {/* <div class="social-menu">
         <ul>
            <li><a href="https://github.com/sanketbodke" target="blank"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.instagram.com/imsanketbodke/" target="blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/sanket-bodake-995b5b205/" target="blank"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://codepen.io/sanketbodke"><i class="fab fa-codepen" target="blank"></i></a></li>
            
         </ul>
   
        
        </div> */}


         

          

        </div>

        </div>
      )
}


