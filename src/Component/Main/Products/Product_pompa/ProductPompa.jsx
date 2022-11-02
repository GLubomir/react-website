import React from 'react'
import style from './ProductPompa.module.scss'
import slides from '../../Data/data_slider_pompa'
import Carousel from '../../Carousel/Carousel'
import contentProductPompa from '../../Data/data_content_pompa'
import Content from '../../Content/Content'
import Ask from '../../Ask/Ask'
import Products from '../Products'
import productItem from '../../Data/data.product'

export default function Product_pompa({setActive}) {
  return (
	 <div className={style.Pompa_conteiner}>
		<div className={style.first_block}>
				<Carousel ket={slides.id} slides={slides} />
				<Content setActive={setActive} content={contentProductPompa} />
		</div>
		<h2 className={style.pompa_title}>С этим товаром покупают :</h2>
			<div className={style.two_block}>
				<div className={style.product_first_conteiner}>
					<Products setActive={setActive} product={productItem[2]} />
				</div>
				<div className={style.product_two_conteiner}>
					<Products setActive={setActive} product={productItem[1]} />
				</div>
			</div>
			<Ask setActive={setActive} />
	 </div>
  )
}
