import React,{ useState} from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import { Tab,Tabs } from 'react-bootstrap'


import 'aos/dist/aos.css';
import AOS from 'aos';

import {webProjects,mobileProjects} from "./ProjectDetails/Projects";

import MyVerticallyCenteredModal from './ProjectDetails/ProjectModal'

import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


export default function ProjectCard() {

  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0,0);
      AOS.init();
      AOS.refresh();
      Toast.fire({
        icon: 'info',
        title: 'Hover or Tap on the cards to see Project details.'
      })
  }, []);

  const navigateContact = () => {
    navigate("/contact");
  }

  const [modalShow, setModalShow] = React.useState(false);

  const [modalMedia, setModalMedia] = React.useState(false);
  
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const {text} = useTypewriter({
    words: ['Projects','Works'],
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
     

     {webProjects.map(project1 => 
   <div class="box-item"
   data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
   >
     <div class="flip-box">
       <div class="flip-box-front text-center" style={{backgroundImage: `url("https://s25.postimg.cc/frbd9towf/cta-2.png")`}}>
         <div class="inner color-white">
           <h3 class="flip-box-header">{project1.name}</h3>
           <p>{project1.description}</p>
           <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
         </div>
       </div>
       <div class="flip-box-back text-center" style={{backgroundImage: `url("https://s25.postimg.cc/frbd9towf/cta-2.png")`}}>
        
         <div class="inner color-white">
           <h3 class="flip-box-header">{project1.name}</h3>
           <p>{project1.short}</p>

           <button class="flip-box-button" >
              
              <a className='more' href={project1.link} target="_blank" rel="noreferrer">View Live</a>
    
           </button>
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
     


   <div class="box-item">
     <div class="flip-box">
       <div class="flip-box-front text-center" style={{backgroundImage: `url("https://s25.postimg.cc/frbd9towf/cta-2.png")`}}>
         <div class="inner color-white">
           <h3 class="flip-box-header">{mobileProjects[0].name}</h3>
           <p>{mobileProjects[0].short}</p>
           <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
         </div>
       </div>
       <div class="flip-box-back text-center" style={{backgroundImage: `url("https://s25.postimg.cc/frbd9towf/cta-2.png")`}}>
         <div class="inner color-white">
           <h3 class="flip-box-header">{mobileProjects[0].name}</h3>
           <p>{mobileProjects[0].back}</p>

           <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={mobileProjects[0]}
     
      />
           <button class="flip-box-button"  onClick={() => setModalShow(true)}>

              
              <span className='more'>View More</span>
       

           </button>
         </div>
       </div>
     </div>
   </div>

   <div class="box-item">
     <div class="flip-box">
       <div class="flip-box-front text-center" style={{backgroundImage: `url("https://s25.postimg.cc/frbd9towf/cta-2.png")`}}>
         <div class="inner color-white">
           <h3 class="flip-box-header">{mobileProjects[1].name}</h3>
           <p>{mobileProjects[1].short}</p>
           <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
         </div>
       </div>
       <div class="flip-box-back text-center" style={{backgroundImage: `url("https://s25.postimg.cc/frbd9towf/cta-2.png")`}}>
         <div class="inner color-white">
           <h3 class="flip-box-header">{mobileProjects[1].name}</h3>
           <p>{mobileProjects[1].back}</p>

           <MyVerticallyCenteredModal
        show={modalMedia}
        onHide={() => setModalMedia(false)}
        data={mobileProjects[1]}
     
      />
           <button class="flip-box-button"  onClick={() => setModalMedia(true)}>

              
              <span className='more'>View More</span>
       

           </button>
         </div>
       </div>
     </div>
   </div>
       
     
 </div>


      </Tab>
      {/* <Tab eventKey="Others" title="Others" >
        <p>hey</p>
      </Tab> */}
    </Tabs>

    <center style={{
        marginTop:"0.2rem"
      }}>
      <button class="btn-hover color-cv"
  data-aos=""
  data-aos-offset="200"

  onClick={navigateContact}
  >Say Hi!</button>
      </center>
   
</>
  )
}
