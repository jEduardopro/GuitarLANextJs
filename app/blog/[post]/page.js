import Layout from "@/app/components/layout";
import Image from "next/image";
import { notFound } from "next/navigation";
import {formatDate} from '../../../utils/helpers'
import styles from '../../../styles/blog.module.css'

async function getPost(post) {
	const res = await fetch(`${process.env.API_URL}/posts?filters[url]=${post}&populate=image`)
	const { data } = await res.json()
	return data[0]
}

export function generateMetadata({ params }) {
	return {
		title: `GuitarLA - Blog ${params.post}`
	}
}

export default async function Post({params}) {
	const post = await getPost(params.post)
	console.log(post);
	if (!post) {
		notFound()
	}
	const {title, content, image, publishedAt} = post.attributes

	return (
		<Layout>
			<article className={`${styles.post} ${styles['mt-3']}`}>
				<Image src={image.data.attributes.url} width={1000} height={400} alt={`post ${title}`} />
				<div className={styles.contenido}>
					<h3>{title}</h3>
					<p className={styles.fecha}>{formatDate(publishedAt)}</p>
					<p className={styles.texto}>{content}</p>
				</div>
				
			</article>
		</Layout>			
	)
}
