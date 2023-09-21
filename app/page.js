import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import Layout from './components/layout'

export default function Home() {
	return	(
		<>			
			<Layout>
				<h1>Hola mundo</h1>
			</Layout>
		</>
  )
}
