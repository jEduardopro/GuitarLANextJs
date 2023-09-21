import Link from "next/link";
import Layout from "../components/layout";
import Guitar from "../components/guitar";
import styles from '../../styles/grid.module.css'

export const metadata = {
  title: 'GuitarLA - Store',
}

async function getGuitars() {
	const res = await fetch(`${process.env.API_URL}/guitars?populate=image`)
	const guitars = await res.json()
	return guitars.data
}

export default async function Store() {
	const guitars = await getGuitars()

	return (
		<Layout>
			<main className="contenedor">
				<h1 className="heading">Our Collection</h1>
				<div className={styles.grid}>
					{
						guitars.map(guitar => (
							<Guitar
								key={guitar.id}
								guitar={guitar.attributes}
							/>
						))
					}
				</div>
			</main>
		</Layout>
	)
}