import styles from "../styles/Navbar.module.css"
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <p className={styles.navItem}> <Link href="/">Home</Link></p>
    <p className={styles.navItem}><Link href="/store">Store</Link></p>
    <p className={styles.navItem}><Link href="/about">About Us</Link></p>
    <p className={styles.navItem}><Link href="/contact">Contact</Link></p>
  </div>
  )
}

export default Navbar