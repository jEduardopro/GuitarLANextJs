import Layout from './components/layout'
import styles from '../styles/grid.module.css'
import Guitar from './components/guitar'
import Post from './components/post'
import Course from './components/course'

async function getGuitars() {
	const res = await fetch(`${process.env.API_URL}/guitars?populate=image`)
	const {data} = await res.json()
  return data
}

async function getPosts() {
	const res = await fetch(`${process.env.API_URL}/posts?populate=image`)
	const {data} = await res.json()
	return data
}

async function getCourse() {
	const res = await fetch(`${process.env.API_URL}/course?populate=image`)
	const {data} = await res.json()
	return data
}

export default async function Home() {
	const [guitars, posts, course] = await Promise.all([getGuitars(), getPosts(), getCourse()])

	return	(
		<>			
			<Layout>
				<main className='contenedor'>
					<h1 className='heading'>Our Collection</h1>
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

				<Course course={course.attributes} />

				<section className='contenedor'>
					<h2 className='heading'>Blog</h2>
					<div className={styles.grid}>
						{
							posts.map(post => <Post key={post.id} post={post.attributes} />)
						}
					</div>
				</section>
			</Layout>
		</>
  )
}
