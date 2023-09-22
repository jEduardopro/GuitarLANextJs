import Layout from "../components/layout";
import styles from '../../styles/cart.module.css'

export const metadata = {
	title: "GuitarLA - Cart",
}

export default function Cart() {
	return (
		<Layout>
			<main className="contenedor">
				<h2 className="heading">Cart</h2>
				<div className={styles.content}>
					<div className={styles.cart}>
						<h2>Products</h2>
					</div>

					<aside className={styles.summary}>
						<h3>Order summary</h3>
						<p>Total:</p>
					</aside>
				</div>
			</main>
		</Layout>
	)
}
