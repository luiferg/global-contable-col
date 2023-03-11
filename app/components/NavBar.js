import Image from 'next/image'
import styles from './styles/navbar.module.scss'
import { motion } from 'framer-motion'

const links = [
  { label: 'QUIÉNES SOMOS', route: '#quienes-somos' },
  { label: 'SERVICIOS', route: '#servicios' },
  { label: 'LOGROS', route: '#logros' },
  { label: 'CONTÁCTANOS', route: '#contactanos' },
]

export default function NavBar() {
  return (
    <nav className={styles.nav_sticky}>
      <div style={{ backgroundColor: '#111111' }}>
        <motion.div
          className={styles.nav_container}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, damping: 10 }}
        >
          <a href="#">
            <Image
              priority={true}
              src={'/svg/globalcontable-logo.svg'}
              width={0}
              height={0}
              className={styles.nav_logo}
              alt="Global Contable Logo"
            />
          </a>
          <ul className={styles.nav_ul}>
            {links.map(({ label, route }) => (
              <li key={route}>
                <motion.a
                  href={route}
                  className={styles.nav_link}
                  whileHover={{ scale: 1.1 }}
                >
                  {label}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  )
}
