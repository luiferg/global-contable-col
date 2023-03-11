import { motion } from 'framer-motion'
import Image from 'next/image'
import Facebook from './icons/Facebook'
import Instagram from './icons/Instagram'
import WhatsApp from './icons/WhatsApp'
import styles from './styles/footer.module.scss'

const links = [
  { label: 'Quiénes Somos', route: '#quienes-somos' },
  { label: 'Servicios', route: '#servicios' },
  { label: 'Logros', route: '#logros' },
  { label: 'Contáctanos', route: '#contactanos' },
]
export default function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_logo_container}>
        <motion.a href="#" whileHover={{ scale: 1.1 }}>
          <Image
            priority={true}
            src={'/svg/globalcontable-logo.svg'}
            width={0}
            height={0}
            className={styles.footer_logo}
            alt="Global Contable Logo"
          />
        </motion.a>
      </div>
      <div className={styles.footer_row1}>
        <div>
          <p>Visítanos en Nuestras Oficinas</p>
          <strong>
            <p>
              Dirección: Calle 48 # 14 - 76 <br /> Barrio Buenos Aires
            </p>
            <p>Barrancabermeja, Santander</p>
            <p>Teléfono: 313 406 5099</p>
          </strong>
        </div>
        <div className={styles.site_map}>
          <p>Mapa de Sitio</p>
          <ul>
            {links.map(({ label, route }) => (
              <li key={route}>
                <a href={route}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footer_more_info}>
          <p>Contáctanos</p>
          <p>
            <strong>Información</strong>
            <br />
            <a
              href="mailto:luzmila.ortizrueda@gmail.com"
              style={{
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Correo: luzmila.ortizrueda@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className={styles.footer_row2}>
        <div className={styles.footer_social}>
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
        <div className={styles.footer_copyright}>
          <p>&copy; Global Contable Colombia 2022</p>
        </div>
      </div>
    </footer>
  )
}
