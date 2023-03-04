import Image from 'next/image'
import styles from './styles/contact.module.scss'

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_image_wrapper}>
        <Image
          src={'/img/contact-global-contable.jpg'}
          width={1444}
          height={964}
          className={styles.contact_image}
          alt="Global Contable - Contáctanos"
        />
      </div>
      <div>
        <Image
          src={'/svg/vertical-bar.svg'}
          width={0}
          height={0}
          className={styles.home_banner_bar}
          alt="Global Contable - Soluciones contables"
        />
      </div>
      <div className={styles.home_banner_content}>
        <h1>LA CONTABILIDAD</h1>
        <h1>DE TU EMPRESA</h1>
        <p>DE LA MANO DE EXPERTOS</p>
      </div>
    </div>
  )
}
