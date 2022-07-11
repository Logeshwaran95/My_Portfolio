import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import { useForm } from 'react-hook-form';
import "./Contact.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'



const ContactForm = () => {

  React.useEffect(() => {
    AOS.init();
      AOS.refresh();
  }, []);


  const {text} = useTypewriter({
    words: ['Contact Me','Lets Catch Up'],
    loop: 0,
    Cursor,
    CursorStyle:'_',
    typeSpeed:120,
    deleteSpeed:100,
    delaySpeed:1000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  })
  
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const onSubmit = async (data) => {

    const { name, email, subject, message } = data;
    
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Subject: ', subject);
    console.log('Message: ', message);

    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
      await emailjs.send(
        "service_rmqae63",
        "template_issnlxv",
        templateParams,
        "XymN87JECTZ1vN0vg"
      ).then(() => {
        Swal.fire(
          'Thank You !',
          'I got your Message ! I Will get back to you shortly .',
          'success'
        )
        // Toast.fire({
        //   icon: 'success',
        //   title: 'Message sent successfully'
        // })
      })
      reset();
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <>
    <h1
     data-aos="slide-right"
     data-aos-duration="800"
    style={{ paddingTop: '2rem',paddingBottom:'2rem', margin: 'auto 0', fontWeight: 'normal',textAlign:"center" }}>
             Hey There !{' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
             
              {text}
            </span>
          </h1>

    <div className='ContactForm' style={{margin:50,minHeight:"70vh"}}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
              
                <div className='row formRow'>
                  <div className='col-6'
                  data-aos="slide-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  >
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6'
                   data-aos="slide-left"
                   data-aos-offset="200"
                   data-aos-delay="50"
                   data-aos-duration="1000"
                  >
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <br></br>
                <div className='row formRow'>
                  <div className='col'
                   data-aos="slide-right"
                   data-aos-offset="200"
                   data-aos-delay="50"
                   data-aos-duration="1000"
                  >
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
               
                <br></br>
                <div className='row formRow'>
                  <div className='col'
                  
                  data-aos="slide-left"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  >
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                
                <br></br>
                
                <div class="buttons" style={{marginTop:"40px"}}>
                <button class="btn-hover color-cv" type="submit"
                >Send</button>
                </div>
              
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactForm;