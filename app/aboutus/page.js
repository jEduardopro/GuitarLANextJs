import Layout from "../components/layout";
import Image from "next/image";
import styles from '../../styles/aboutus.module.css'

export const metadata = {
  title: 'GuitarLA - About Us',
}

export default function Aboutus() {
	return (
		<Layout>
			<main className="contenedor">
				<h2 className="heading">About US</h2>
				<div className={styles.content}>
					<Image
						src="/img/nosotros.jpg"
						width={1000}
						height={800}
						alt="About us"
					/>
					<div>
						<p>
							Vivamus hendrerit dolor id tristique dapibus. Integer tristique odio quis posuere commodo. Duis lobortis eu elit non iaculis. Maecenas efficitur leo sit amet massa ultricies, eget consectetur tellus semper. Sed sit amet lectus eget enim feugiat venenatis et at felis. Vivamus at enim ac nibh tincidunt mattis vel posuere lorem. Suspendisse convallis at ante sit amet eleifend. Cras tempor eget orci quis rutrum. Donec rhoncus, diam a consectetur euismod, magna arcu rutrum orci, a sagittis mauris elit a magna.
							Sed et sagittis enim. Sed a facilisis est, sit amet vehicula ante. Nulla dictum fermentum commodo.
						</p>

						<p>
							Vivamus hendrerit dolor id tristique dapibus. Integer tristique odio quis posuere commodo. Duis lobortis eu elit non iaculis. Maecenas efficitur leo sit amet massa ultricies, eget consectetur tellus semper. Sed sit amet lectus eget enim feugiat venenatis et at felis. Vivamus at enim ac nibh tincidunt mattis vel posuere lorem. Suspendisse convallis at ante sit amet eleifend. Cras tempor eget orci quis rutrum. Donec rhoncus, diam a consectetur euismod, magna arcu rutrum orci, a sagittis mauris elit a magna.
							Sed et sagittis enim. Sed a facilisis est, sit amet vehicula ante. Nulla dictum fermentum commodo.
						</p>
					</div>
				</div>
			</main>
		</Layout>
	)
}
