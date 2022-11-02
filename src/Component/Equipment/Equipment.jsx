import React from 'react'
import './Equipment.css'
import Products from '../Main/Products/Products'
import productItem from '../Main/Data/data.product'
import Ask from '../Main/Ask/Ask'

export default function Equipment({setActive}) {

	return (
		<div>
			<section className='equipment-conteiner'>
				<div className='first-border-conteiner'>
					<Products setActive={setActive} product={productItem[2]} />
				</div>
				<div className='two-border-conteiner'>
					<Products setActive={setActive} product={productItem[0]} />
				</div>
				<div className='three-border-conteiner'>
					<Products setActive={setActive} product={productItem[1]} />
				</div>
			</section>
			<Ask />
		</div>
	)
}
