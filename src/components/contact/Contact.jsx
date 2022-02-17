import React from 'react'
import './Contact.scss';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="handshake"/>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form>
          <input type="email" required placeholder='E-mail'/>
          <textarea placeholder='Message'/>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact