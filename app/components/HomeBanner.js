import Image from 'next/image'
import styles from './styles/homebanner.module.scss'

export default function HomeBanner() {
  return (
    <div className={styles.home_banner}>
      <div className={styles.home_banner_social}></div>
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
