import Image from 'next/image'
import Facebook from './icons/Facebook'
import Instagram from './icons/Instagram'
import WhatsApp from './icons/WhatsApp'
import styles from './styles/homebanner.module.scss'
import { motion } from 'framer-motion'

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
      <motion.div
        className={styles.banner_image_wrapper}
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={'/img/banner.jpg'}
          width={1614}
          height={1076}
          className={styles.banner_image}
          alt="Global Contable - Contadores en Colombia"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Image
          src={'/svg/vertical-bar.svg'}
          width={0}
          height={0}
          className={styles.home_banner_bar}
          alt="Global Contable - Soluciones contables"
        />
      </motion.div>
      <div>
        <div className={styles.home_banner_content}>
          <div>
            <motion.h1
              initial={{ y: '800%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, damping: 10 }}
            >
              LA CONTABILIDAD
            </motion.h1>
          </div>
          <div>
            <motion.h1
              initial={{ y: '800%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, damping: 10 }}
            >
              DE TU EMPRESA
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p>DE LA MANO DE EXPERTOS</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
