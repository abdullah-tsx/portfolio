import React, {useRef, useState} from 'react'
import './Contact.scss';
import {Alert, Snackbar} from "@mui/material";
//import emailjs from '@emailjs/browser';

const Contact = () => {
  const emailRef = useRef();
  const msgRef = useRef();
  const nameRef = useRef();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const msg = msgRef.current.value;
    const name = nameRef.current.value;
    setFormSubmitted(true);

    emailRef.current.value = '';
    msgRef.current.value = '';
    nameRef.current.value = '';
  }

  return (

    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="handshake"/>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={onSubmitHandler}>
          <input type="text" ref={nameRef} required placeholder='Full Name'/>
          <input type="email" ref={emailRef} required placeholder='E-mail'/>
          <textarea ref={msgRef} placeholder='Message' required/>
          <button type="submit">Send</button>
        </form>
        <Snackbar open={formSubmitted} autoHideDuration={6000} anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                  onClose={() => {
                    setFormSubmitted(false)
                  }}>
          <Alert onClose={() => {
            setFormSubmitted(false)
          }} severity="success" sx={{width: '100%'}}>
            Message Sent!!
          </Alert>
        </Snackbar>
      </div>
    </div>

  )
}

export default Contact