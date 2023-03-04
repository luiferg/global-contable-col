import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './styles/achievements.module.scss'

export default function Achievements() {
  return (
    <div className={styles.achievements_container}>
      <div className={styles.ach_card_grid}>
        <div className={styles.ach_card_row}>
          <div className={styles.ach_card}>
            <motion.p
              className={styles.ach_card_title}
              whileHover={{ scale: 1.1 }}
            >
              <strong>+100</strong>
              <br />
              CLIENTES
            </motion.p>
            <Image
              src={'/svg/horizontal-bar.svg'}
              width={20}
              height={5}
              alt="Global Contable - Un servicio inigualable"
              className={styles.ach_card_bar}
            />
            <p className={styles.ach_card_desc}>
              A lo largo de toda nuestra trayectoria
            </p>
          </div>
          <div className={styles.ach_card}>
            <motion.p
              className={styles.ach_card_title}
              whileHover={{ scale: 1.1 }}
            >
              <strong>+100</strong>
              <br />
              CLIENTES
            </motion.p>
            <Image
              src={'/svg/horizontal-bar.svg'}
              width={20}
              height={5}
              alt="Global Contable - Un servicio inigualable"
              className={styles.ach_card_bar}
            />
            <p className={styles.ach_card_desc}>
              A lo largo de toda nuestra trayectoria
            </p>
          </div>
        </div>
        <div className={styles.ach_card_row}>
          <div className={styles.ach_card}>
            <motion.p
              className={styles.ach_card_title}
              whileHover={{ scale: 1.1 }}
            >
              <strong>+100</strong>
              <br />
              CLIENTES
            </motion.p>
            <Image
              src={'/svg/horizontal-bar.svg'}
              width={20}
              height={5}
              alt="Global Contable - Un servicio inigualable"
              className={styles.ach_card_bar}
            />
            <p className={styles.ach_card_desc}>
              A lo largo de toda nuestra trayectoria
            </p>
          </div>
          <div className={styles.ach_card}>
            <motion.p
              className={styles.ach_card_title}
              whileHover={{ scale: 1.1 }}
            >
              <strong>+100</strong>
              <br />
              CLIENTES
            </motion.p>
            <Image
              src={'/svg/horizontal-bar.svg'}
              width={20}
              height={5}
              alt="Global Contable - Un servicio inigualable"
              className={styles.ach_card_bar}
            />
            <p className={styles.ach_card_desc}>
              A lo largo de toda nuestra trayectoria
            </p>
          </div>
        </div>
      </div>
      <div className={styles.ach_content}>
        <Image
          src={'/svg/horizontal-bar.svg'}
          width={20}
          height={5}
          alt="Global Contable - Un servicio inigualable"
          className={styles.ach_image}
        />
        <h2>NUESTRA EXPERIENCIA</h2>
        <h3>
          AVALADA POR
          <br />
          NUESTROS LOGROS
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipising elit, sed diam
          nonummy nibh.
        </p>
      </div>
    </div>
  )
}
