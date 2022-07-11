import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';



function MyVerticallyCenteredModal(props) {

    const data = props.data;
  
    // console.log("here is ",data);
  
  
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen
      >
        <Modal.Header closeButton
        
        >
          <Modal.Title id="contained-modal-title-vcenter"
          data-aos="zoom-out"
          
          >
            <h2
            style={{
                fontWeight:"900"
            }}
            > {data.name}</h2>
           
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
        
    >
        
          <h3
          
          data-aos="slide-left"
          >{data.short}</h3>
          
          <p
          style={{fontSize:"1.3rem"}}
          data-aos="flip-left"
          >
            {data.description}
          </p>

          <Button variant="primary" href={data.link} target="_blank"
          data-aos="slide-left"
          >See Live</Button>
  
  
  
          {data.images &&  <div
  
  
        data-aos="slide-left"
        style={{
          marginTop:"50px"
        }}
        >
        <ImageGallery 
      showFullscreenButton
  
      thumbnailPosition='left'
      items={data.images} 
            
      />  
      </div>  }
     
  
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }

    export default MyVerticallyCenteredModal;