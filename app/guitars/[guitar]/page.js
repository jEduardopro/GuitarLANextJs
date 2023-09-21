import Image from 'next/image'
import styles from '../../../styles/guitarras.module.css'
import Layout from '@/app/components/layout'
import { notFound } from 'next/navigation'

async function getGuitar(guitar) {
  const res = await fetch(`${process.env.API_URL}/guitars?filters[url]=${guitar}&populate=image`)
	const {data} = await res.json()
  return data[0]
}

export async function generateMetadata({ params }) {
  return {
    title: `GuitarLA - Guitar ${params.guitar}`
  }
}

export default async function Guitar({ params }) {
	const guitar = await getGuitar(params.guitar)
	if (!guitar) {
		notFound()
	}
	const {title, description, image, price} = guitar.attributes
	
	return (
		<Layout>
			<div className={styles.guitarra}>
				<Image src={image.data.attributes.url} width={600} height={400} alt={`Guitar ${title}`} />
				<div className={styles.contenido}>
					<h3>{title}</h3>
					<p className={styles.descripcion}>{description}</p>
					<p className={styles.precio}>${price}</p>
				</div>
			</div>	
		</Layout>
	)
}
