import Image from 'next/image'
import Facebook from './icons/Facebook'
import Instagram from './icons/Instagram'
import WhatsApp from './icons/WhatsApp'
import styles from './styles/homebanner.module.scss'

export default function HomeBanner() {
  return (
    <div className={styles.home_banner}>
      <div className={styles.home_banner_social}>
        <a href="https://wa.me/573134065099" target="_blank">
          <WhatsApp className={styles.social_wa} />
        </a>
        <a href="https://instagram.com/global.contablebca" target="_blank">
          <Instagram className={styles.social_ig} />
        </a>
        <a href="https://facebook.com/globalcontablebca" target="_blank">
          <Facebook className={styles.social_fb} />
        </a>
      </div>
      <div className={styles.banner_image_wrapper}>
        <Image
          src={'/img/banner.jpg'}
          width={1614}
          height={1076}
          className={styles.banner_image}
          alt="Global Contable - Contadores en Colombia"
          priority
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
