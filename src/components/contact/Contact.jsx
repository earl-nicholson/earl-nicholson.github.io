import React from 'react'
import './Contact.css'
import {MdMarkEmailUnread} from 'react-icons/md'
import {SiWhatsapp} from 'react-icons/si'

const Contact = () => {
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    
    <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
          <MdMarkEmailUnread className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>Link to email</h5>
          <a href='mailto:earl.r.nicholson@gmail.com' target='_blank' >Send me an Email</a>
        </article>

        <article className='contact__option'>
          <SiWhatsapp className="contact__option-icon"/>
          <h4>WhatsApp</h4>
          <h5>Link to #</h5>
          <a href='https://api.whatsapp.com/send?phone=123' target='_blank' >Send me an Message</a>
        </article>

      </div>
{/* end of contact options */}
      <form action="">
        <input type="text" name="name" placeholder="Your Full Name" required /> 
        <input type="email" name="email" placeholder="Your Email" required /> 
        <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
        <button type="submit" class="btn btn-primary" >Send Message</button>
      </form>
    </div>
  </section>
  )
}

export default Contact