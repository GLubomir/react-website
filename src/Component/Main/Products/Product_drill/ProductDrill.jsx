import React from 'react'
import style from './ProductDrill.module.scss'
import contentProductDrill from '../../Data/data_content_drill'
import slidesDrill from '../../Data/data.slider_drill'
import Carousel from '../../Carousel/Carousel'
import Content from '../../Content/Content'
import Products from '../Products'
import Ask from '../../Ask/Ask'
import productItem from '../../Data/data.product'

export default function Product_drill({setActive}) {
	console.log(setActive)
  return (
	 <div className={style.Product_drill_conteiner}>
		<div className={style.first_block}>
				<Carousel ket={slidesDrill.id} slides={slidesDrill} />
				<Content setActive={setActive} content={contentProductDrill} />
			</div>
			<h2 className={style.main_title}>С этим товаром покупают :</h2>
			<div className={style.two_block}>
				<div className={style.product_first_conteiner}>
					<Products setActive={setActive} product={productItem[0]} />
				</div>
				<div className={style.product_two_conteiner}>
					<Products setActive={setActive} product={productItem[2]} />
				</div>
			</div>
			<Ask setActive={setActive} />
	 </div>
  )
}
