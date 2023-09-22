'use client'

import Image from 'next/image'
import styles from '../../../styles/guitarras.module.css'
import Layout from '@/app/components/layout'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '@/app/providers/cart-provider'

async function getGuitar(guitar) {
  const res = await fetch(`http://localhost:1337/api/guitars?filters[url]=${guitar}&populate=image`)
	const {data} = await res.json()
  return data[0]
}

export default function Guitar({ params }) {
	const {addToCart} = useContext(CartContext)
	const [quantity, setQuantity] = useState(0)
	const [guitar, setGuitar] = useState(null)
	
	useEffect(() => {
		const fetchGuitar = async () => {
			console.log('fetch guitar');
			const data = await getGuitar(params.guitar)
			setGuitar(data)
		}
		fetchGuitar()
	}, [])

	const { title, description, image, price } = guitar?.attributes || {}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (quantity < 1) {
			alert('Please select a quantity')
			return
		}

		const guitarSelected = {
			id: guitar.id,
			image: image.data.attributes.url,
			title,
			price,
			quantity
		}

		console.log(guitarSelected);
		addToCart(guitarSelected)
	}
	
	return (
		<Layout>
			{
				guitar && (
					<div className={styles.guitarra}>
						<Image src={image.data.attributes.url} width={600} height={400} alt={`Guitar ${title}`} />
						<div className={styles.contenido}>
							<h3>{title}</h3>
							<p className={styles.descripcion}>{description}</p>
							<p className={styles.precio}>${price}</p>
							<form className={styles.form} onSubmit={handleSubmit}>
								<label>Quantity:</label>
								<select
									onChange={(e) => setQuantity(parseInt(e.target.value))}
								>
									<option value="0">-- Select --</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>

								<input type="submit" value="Add to cart" />
							</form>
						</div>
					</div>	
				)
			}
		</Layout>
	)
}
