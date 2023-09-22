'use client'

import { createContext, useState } from 'react'

export const CartContext = createContext({})

export default function CartProvider({ children }) {
	const [cart, setCart] = useState([])

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
		window.localStorage.setItem('cart', JSON.stringify(cart));
	}
	
	const updateQuantity = guitar => {
		const cartUpdated = cart.map(guitarState => {
			if (guitarState.id === guitar.id) {
				guitarState.quantity = parseInt(guitar.quantity)
			}
			return guitarState
		})
		setCart(cartUpdated)
		window.localStorage.setItem('cart', JSON.stringify(cart));
	}

	return (
		<CartContext.Provider
			value={{
				addToCart,
				deleteProduct,
				updateQuantity
			}}
		>
			{children}
		</CartContext.Provider>
	)
}