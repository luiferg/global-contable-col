import styles from './styles/services.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Services() {
  const [card1IsHovered, setCard1IsHovered] = useState(false)
  const [card2IsHovered, setCard2IsHovered] = useState(false)
  return (
    <div id="servicios">
      <motion.div
        className={styles.services_section}
        whileInView={{ x: '0%', opacity: 1 }}
        initial={{ x: '-100%', opacity: 0 }}
        transition={{ duration: 1, damping: 10, delay: 0.5 }}
      >
        <div className={styles.services_content}>
          <Image
            priority={true}
            src={'/svg/horizontal-bar.svg'}
            width={50}
            height={50}
            className={styles.services_section_bar}
            alt="Global Contable - Un servicio inigualable"
          />
          <h2>
            NUESTROS
            <br />
            SERVICIOS
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh.
          </p>
        </div>
        <div className={styles.services_grid}>
          <motion.div
            className={styles.services_card}
            onClick={() => setCard1IsHovered(!card1IsHovered)}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.card_image_wrapper}>
              <Image
                src={'/img/global-card1-background.jpg'}
                width={700}
                height={700}
                className={styles.card_image}
                alt="Global Contable - Asesoría contable"
                priority
              />
            </div>
            <div className={styles.card_info_wrapper}>
              <div className={styles.card_info}>
                <div className={styles.card_title}>
                  <Image
                    src={'/svg/accountant-assistant.svg'}
                    width={50}
                    height={50}
                    className={styles.card_icon}
                    alt="Asesoría contable"
                  />
                  <h3>
                    <strong>Asesorías</strong>
                    <br />
                    Contables
                  </h3>
                </div>
              </div>
            </div>
            <motion.div
              className={styles.card_desc}
              initial={false}
              animate={card1IsHovered ? { y: '0' } : { y: '100%' }}
              transition={{ duration: 0.5, type: 'tween', damping: 10 }}
            >
              <p>Mortis mortis engorgio incendio momentum.</p>
            </motion.div>
          </motion.div>
          <motion.div
            className={styles.services_card}
            onClick={() => setCard2IsHovered(!card2IsHovered)}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.card_image_wrapper}>
              <Image
                src={'/img/global-card2-background.jpg'}
                width={700}
                height={700}
                className={styles.card_image}
                alt="Global Contable - Gestión Administrativa"
              />
            </div>
            <div className={styles.card_info_wrapper}>
              <div className={styles.card_info}>
                <div className={styles.card_title}>
                  <Image
                    src={'/svg/admin-management.svg'}
                    width={50}
                    height={50}
                    className={styles.card_icon}
                    alt="Gestión Administrativa"
                  />
                  <h3>
                    <strong>Gestión</strong>
                    <br />
                    Administrativa
                  </h3>
                </div>
              </div>
            </div>
            <motion.div
              className={styles.card_desc}
              initial={false}
              animate={card2IsHovered ? { y: '0' } : { y: '100%' }}
              transition={{ duration: 0.5, type: 'tween', damping: 10 }}
            >
              <p>Mortis mortis engorgio incendio momentum.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
