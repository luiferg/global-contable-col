import styles from './styles/about.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function About() {
  return (
    <div id="quienes-somos">
      <motion.div
        className={styles.about_section}
        initial={{ x: '100%', opacity: 0 }}
        whileInView={{ x: '0%', opacity: 1 }}
        transition={{ duration: 1, damping: 10, delay: 0.5 }}
      >
        <Image
          priority={true}
          src={'/svg/horizontal-bar.svg'}
          width={0}
          height={0}
          className={styles.about_section_bar}
          alt="Global Contable - La mejor gestión contable"
        />
        <h2 className={styles.about_title}>QUIÉNES SOMOS</h2>
        <div className={styles.about_phrase_wrapper}>
          <h3 className={styles.about_phrase}>
            NUESTRO VALOR
            <br />
            ES TU CONFIANZA
          </h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrudexerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.{' '}
        </p>
        <p>
          <strong>Duis autem vel</strong>
        </p>
      </motion.div>
    </div>
  )
}
