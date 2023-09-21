"use client";

import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/header.module.css'
import {usePathname} from 'next/navigation'

export default function Header() {
	const pathname = usePathname()
	return (
		<header className={styles.header}>
			<div className={`contenedor ${styles.bar}`}>
				<Link href='/'>
					<Image src='/img/logo.svg' width={300} height={40} alt='logo' />
				</Link>
				<nav className={styles.nav}>
					<Link className={pathname === '/' ? styles.active: ''} href='/'>Home</Link>
					<Link className={pathname === '/aboutus' ? styles.active: ''} href='/aboutus'>About Us</Link>
					<Link className={pathname === '/store' ? styles.active: ''} href='/store'>Store</Link>
					<Link className={pathname === '/blog' ? styles.active: ''} href='/blog'>Blog</Link>
				</nav>
			</div>
		</header>
	)
}
