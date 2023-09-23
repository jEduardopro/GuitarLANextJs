'use client'
import Layout from "../components/layout";
import styles from '../../styles/cart.module.css'
import { CartContext } from "../providers/cart-provider";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";

export default function Cart() {
	const { cart, updateQuantity, deleteProduct } = useContext(CartContext)
	
	const [total, setTotal] = useState(0)

	useEffect(() => {
		const amount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
		setTotal(amount)
	}, [cart])

	return (
		<Layout>
			<main className="contenedor">
				<h2 className="heading">Cart</h2>
				<div className={styles.content}>
					<div className={styles.cart}>
						<h2>Products</h2>

						{cart.length === 0 ? 'Cart Empty' : (
							cart.map((product) => (
								<div className={styles.product} key={product.id}>
									<div>
										<Image src={product.image} width={250} height={480} alt={product.title} />
									</div>
									<div>
										<p className={styles.title}>{product.title}</p>

										<div className={styles.quantity}>
											<p>Quantity:</p>
											<select
												className={styles.select}
												onChange={(e) => updateQuantity({ id: product.id, quantity: e.target.value })}
												value={product.quantity}
											>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
											</select>
										</div>

										<p className={styles.price}>$<span>{product.price}</span></p>
										<p className={styles.subtotal}>Subtotal: $<span>{product.quantity * product.price}</span></p>
									</div>

									<button className={styles.delete} type="button"
										onClick={() => deleteProduct(product.id)}
									>
										X
									</button>

								</div>
							))
						)}
					</div>

					<aside className={styles.summary}>
						<h3>Order summary</h3>
						<p>Total: ${total}</p>
					</aside>
				</div>
			</main>
		</Layout>
	)
}
