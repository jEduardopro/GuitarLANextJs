import Image from "next/image"
import Link from "next/link"
import styles from '../../styles/blog.module.css'
import {formatDate} from '../../utils/helpers'

export default function Post({ post }) {
	const { title, content, url, image, publishedAt} = post

	return (
		<article>
			<Image src={image.data.attributes.formats.medium.url} width={600} height={400} alt={`blog ${title}`} />
			<div className={styles.contenido}>
				<h3>{title}</h3>
				<p className={styles.fecha}>{formatDate(publishedAt)}</p>
				<p className={styles.resumen}>{content}</p>
				<Link className={styles.enlace} href={`/blog/${url}`}>Learn more</Link>
			</div>
			
		</article>
	)
}
