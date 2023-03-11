import Image from 'next/image'
import styles from './styles/contact.module.scss'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE
  const refForm = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('default_service', templateId, refForm.current, publicKey)
      .then(
        () => {
          alert('¡Listo! Tu mensaje se ha enviado')
          window.location.reload(false)
        },
        () => {
          alert(':( no se ha podido enviar tu mensaje.')
        }
      )
  }
  return (
    <div id="contactanos" className={styles.contact_container}>
      <div className={styles.contact_image_wrapper}>
        <Image
          src={'/img/contact-global-contable.jpg'}
          width={1444}
          height={964}
          className={styles.contact_image}
          alt="Global Contable - Contáctanos"
        />
      </div>
      <div className={styles.contact_content}>
        <div>
          <Image
            priority={true}
            src={'/svg/horizontal-bar.svg'}
            width={0}
            height={0}
            className={styles.contact_bar}
            alt="Global Contable - La mejor gestión contable"
          />
        </div>
        <p className={styles.contact_subtitle}>NO DUDES EN CONTACTARNOS</p>
        <h2>CONTÁCTANOS</h2>
        <p className={styles.contact_phrase}>
          Déjanos saber cómo podemos asesorarte
        </p>
      </div>
      <div className={styles.contact_form_wrapper}>
        <form ref={refForm} onSubmit={sendEmail}>
          <div className={styles.form_row1}>
            <input type="text" name="name" placeholder="Nombre" />
          </div>
          <div className={styles.form_row2}>
            <input type="email" name="email" placeholder="Email" />
            <input type="tel" name="phone" placeholder="Teléfono" />
          </div>
          <div className={styles.form_row3}>
            <textarea name="message" placeholder="Mensaje"></textarea>
          </div>
          <div>
            <motion.input
              whileHover={{
                scale: 1.1,
              }}
              type="submit"
              value="Enviar"
              className={styles.form_button}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
