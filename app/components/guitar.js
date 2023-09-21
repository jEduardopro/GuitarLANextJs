import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/guitarras.module.css'

export default function Guitar({ guitar }) {
	const { title, price, image, description, url } = guitar
	return (
		<div className={styles.guitarra}>
			<Image src={image.data.attributes.formats.medium.url} width={600} height={400} alt={`Guitar ${title}`} />
			<div className={styles.contenido}>
				<h3>{title}</h3>
				<p className={styles.descripcion}>{description}</p>
				<p className={styles.precio}>${price}</p>
				<Link className={styles.enlace} href={`/guitars/${url}`}>View more</Link>
			</div>
		</div>
	)
}
