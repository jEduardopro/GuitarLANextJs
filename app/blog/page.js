import Layout from "../components/layout";
import Post from "../components/post";
import styles from '../../styles/grid.module.css'

export const metadata = {
  title: 'GuitarLA - Blog',
}

async function getPosts() {
	const res = await fetch(`${process.env.API_URL}/posts?populate=image`)
	const posts = await res.json()
	return posts.data
}

export default async function Blog() {
	const posts = await getPosts()

	return (
		<Layout>
			<main className="contenedor">
				<h1 className="heading">Blog</h1>
				<div className={styles.grid}>
					{
						posts.map(post => <Post key={post.id} post={post.attributes} />)
					}
				</div>
			</main>
		</Layout>
	)
}
