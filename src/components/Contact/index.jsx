
import React, { useRef } from 'react'
import "./Contact.css"
import { contacts } from '../../data'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const container = useRef(null)
  const formRef = useRef(null)

  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: .5,
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
      }
    })
    timeline
      .fromTo(".contact__form", { x: -100, opacity: 0 }, { opacity: 1, x: 0 })
      .fromTo(".option", { x: 100, opacity: 0 }, { opacity: 1, stagger: .5, x: 0 })
  }, { scope: container })

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_p841far',
      'template_njb6c14',
      formRef.current,
     'AMU0yJD5JO9TGAqUE'
    )
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message envoyé !',
          text: 'Merci pour votre message. Nous vous répondrons dans les plus brefs délais.',
        })
        formRef.current.reset()
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Échec de l’envoi',
          text: 'Une erreur est survenue. Veuillez réessayer plus tard.',
        })
      })
  }

  return (
    <section id='contact' ref={container}>
      <div className="container">
      <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
  <div className="contact__form__top">
    <h1 className="title">
      <span className="g-text">Join forces with us!</span>
    </h1>
    <p className="text__muted">
      We build with precision and passion, creating structures that stand 
      the test of time. It's as straightforward as that!
    </p>
  </div>

   <div className="contact__form__middle">
            <div className="row">
              <input type="text" placeholder='Lastname' name='name' className='control' required />
              <input type="text" placeholder='Name' name='lastname' className='control' required />
            </div>
            <div className="row">
              <input type="email" placeholder='E_mail Address' name='email' className='control' required />
              <input type="tel" placeholder='Phone' name='phone' className='control' />
            </div>
            <textarea name="message" cols={30} rows={10} placeholder='Your message ' className='control' required></textarea>
          </div>

  <div className="contact__form__bottom">
    <button type="submit" className="btn btn__primary">Send Now</button>
  </div>
</form>


        <div className="contact__options">
          {
            contacts.map((contact, index) => (
              <div className="option" key={index}>
                <div className="icon__container">
                  {contact.icon}
                </div>
                <h3 className="name">{contact.name}</h3>
                   {
          Array.isArray(contact.value) ? (
            contact.value.map((item, i) => (
              <h4 className="text__muted" key={i}>{item}</h4>
            ))
          ) : (
            <h4 className="text__muted">{contact.value}</h4>
          )
        }
                <div>
                  <a href={"#"} className="btn btn__primary">Contact Us</a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Contact
