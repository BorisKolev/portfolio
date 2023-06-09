import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_j8xyg0g', 'template_zaqttre', form.current, '_9YLG_5xB0BxjrVd_' )
    e.target.reset()
  }

  return (
    <section id="contact">

      <h5>Get In Touch</h5>

      <h2>Contact Me</h2>

      <div className="container contact__container">

        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>KolevBY@outlook.com</h5>
            <a href="mailto:KolevBY@outlook.com" target="_blank"> Send a message </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Borislav Kolev</h5>
            <a href="https://m.me/borislav.kolev.18400" target="_blank"> Send a message </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+44(0) 7340 192847</h5>
            <a href="https://api.whatsapp.com/send?phone=447340192847" target="_blank"> Send a message </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your e-mail" required />
          <textarea name="message" rows="7" placeholder="Your message" required />
          <button type="submit" className="btn btn-primary"> Send Message </button>
        </form>

      </div>
    </section>
  )
}

export default Contact