import Link from 'next/link'
import React from 'react'
import styles from '../../styles/footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={`contenedor ${styles.content}`}>
				<nav className={styles.nav}>
					<Link href='/'>Home</Link>
					<Link href='/aboutus'>About Us</Link>
					<Link href='/store'>Store</Link>
					<Link href='/blog'>Blog</Link>
				</nav>
				<p className={styles.copyrigth}>All rights reserved { new Date().getFullYear() }</p>
			</div>
		</footer>
	)
}
