'use client'

import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({})

export default function CartProvider({ children }) {
	const cartStorageExists = typeof window !== 'undefined' ? localStorage.getItem('cart') : false
	const cartFromStorage = cartStorageExists ? JSON.parse(cartStorageExists) : []
	const [cart, setCart] = useState(cartFromStorage)
	const [clientReady, setClientReady] = useState(false)

	useEffect(() => {
		setClientReady(true)
	}, [])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const addToCart = guitar => {
		console.log('add to cart this guitar: ', guitar);
		if (cart.some(guitarState => guitarState.id === guitar.id)) {
			const cartUpdated = cart.map(guitarState => {
				if (guitarState.id === guitar.id) {
					guitarState.quantity = guitar.quantity;
				}
				return guitarState;
			});
			setCart([...cartUpdated]);
			localStorage.setItem('cart', JSON.stringify(cart));
		} else {
			setCart([...cart, guitar]);
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	}
	
	const deleteProduct = id => {
		const cartUpdated = cart.filter(product => product.id != id)
		setCart(cartUpdated)
		localStorage.setItem('cart', JSON.stringify(cart));
	}
	
	const updateQuantity = guitar => {
		const cartUpdated = cart.map(guitarState => {
			if (guitarState.id === guitar.id) {
				guitarState.quantity = parseInt(guitar.quantity)
			}
			return guitarState
		})
		setCart(cartUpdated)
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	return clientReady && (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				deleteProduct,
				updateQuantity
			}}
		>
			{children}
		</CartContext.Provider>
	)
}