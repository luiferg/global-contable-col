import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/navbar.module.scss'

const links = [
  { label: 'QUIÉNES SOMOS', route: '#quienes-somos' },
  { label: 'SERVICIOS', route: '#servicios' },
  { label: 'LOGROS', route: '#logros' },
  { label: 'CONTÁCTANOS', route: '#contactanos' },
]

export default function NavBar() {
  return (
    <nav className={styles.nav_container}>
      <Link href="/">
        <Image
          priority={true}
          src={'/svg/globalcontable-logo.svg'}
          width={0}
          height={0}
          className={styles.nav_logo}
          alt="Global Contable Logo"
        />
      </Link>
      <ul className={styles.nav_ul}>
        {links.map(({ label, route }) => (
          <li key={route}>
            <a href={route} className={styles.nav_link}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
