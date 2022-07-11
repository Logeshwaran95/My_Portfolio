import React, { useEffect } from 'react'
import "./ProjectDetail.css";
import {useParams} from 'react-router-dom'

import ImageGallery from 'react-image-gallery';
import { useTypewriter,Cursor } from 'react-simple-typewriter';


export default function ProhectDetail() {

    const {id} = useParams();

    let newid = id.toString();
    console.log("new id is ",newid);
    
    const [img, setImg] = React.useState([]);

        const images = [
      {
        id:'id1',
        image : [
        {
          original: "https://i.im.ge/2022/07/10/uvOFaM.jpg",
          thumbnail: 'https://i.im.ge/2022/07/10/uvOFaM.th.jpg',
        },
        {
          original: 'https://i.im.ge/2022/07/10/uvOCpS.jpg',
          thumbnail: 'https://i.im.ge/2022/07/10/uvOCpS.th.jpg',
        },
        {
          original: 'https://i.im.ge/2022/07/10/uvOYKF.jpg',
          thumbnail: 'https://i.im.ge/2022/07/10/uvOYKF.th.jpg',
        },
        {
          original:"https://i.im.ge/2022/07/10/uvOx1z.jpg",
          thumbnail: 'https://i.im.ge/2022/07/10/uvOx1z.th.jpg',
        },
        {
          original:"https://i.im.ge/2022/07/10/uvO3w6.jpg",
          thumbnail: 'https://i.im.ge/2022/07/10/uvO3w6.th.jpg',
        },
        {
          original:"https://i.im.ge/2022/07/10/uvOAAy.jpg",
          thumbnail: 'https://i.im.ge/2022/07/10/uvOAAy.th.jpg',
        },
        {
          original:"https://i.im.ge/2022/07/10/uvOgi9.jpg",
          thumbnail: 'https://i.im.ge/2022/07/10/uvOgi9.th.jpg',
        },
        {
          original:"https://i.im.ge/2022/07/10/uvOcXK.jpg",
          thumbnail: 'https://i.im.ge/2022/07/10/uvOcXK.th.jpg',
        },
        {
          original:"https://i.im.ge/2022/07/10/uvOZ7h.jpg",
          thumbnail: 'https://i.im.ge/2022/07/10/uvOZ7h.th.jpg',
        },
        {
          original:"https://i.im.ge/2022/07/10/uvO8cX.jpg",
          thumbnail: 'https://i.im.ge/2022/07/10/uvO8cX.th.jpg',
        },
        {
          original:"https://i.im.ge/2022/07/10/uvORG8.jpg",
          thumbnail: 'https://i.im.ge/2022/07/10/uvORG8.th.jpg',
        },
        {
          original:"https://i.im.ge/2022/07/10/uvOKCM.jpg",
          thumbnail: 'https://i.im.ge/2022/07/10/uvOKCM.th.jpg',
        },
        {
          original:"https://i.im.ge/2022/07/10/uvOVpY.jpg",
          thumbnail: 'https://i.im.ge/2022/07/10/uvOVpY.th.jpg',
        }
      ]
    }
  ]

    useEffect(() => {
      setImg(images.filter(img => img.id === newid));
      // setImg(img[0].image);
      console.log("here we go ",img);
   
    },[])



  const {text} = useTypewriter({
    words: ['Details'],
    loop: 0,
    Cursor,
    CursorStyle:'_',
    typeSpeed:120,
    deleteSpeed:100,
    delaySpeed:1000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  })


  
  return (
    <>
     <h1 style={{ paddingTop: '2rem',paddingBottom:'2rem', margin: 'auto 0', fontWeight: 'normal',textAlign:"center" }}
        data-aos="slide-right"
        data-aos-duration="800"
     >
            My Project {' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              {text}
            </span>
          </h1>

          <div>
            <h1>Project Description</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, nisi eu consectetur consectetur,
              nisl nisi consectetur nisl, eu consectetur nisl nisi eu
              consectetur consectetur, nisl nisi consectetur nisl, eu
              consectetur nisl nisi eu consectetur consectetur, nisl nisi
              </p>
          </div>

    <div className='containerImg' style={{marginTop:"2%",minHeight:"100vh"}}>
      <div
      data-aos="slide-left"
      >
      <ImageGallery 
    showFullscreenButton
    sizes="600px"
    showNav
    thumbnailPosition='left'
    items={images[0].image} 
   
    />  
    </div>
    </div>
    </>
  )
}
