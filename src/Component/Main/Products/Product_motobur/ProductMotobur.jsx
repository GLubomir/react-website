import React from 'react'
import Carousel from '../../Carousel/Carousel'
import style from './ProductMotobur.module.scss'
import slides from '../../Data/data_slider';
import Content from '../../Content/Content';
import contentProductMotobur from '../../Data/data_contentProductMotobur'
import productItem from '../../Data/data.product';
import Ask from '../../Ask/Ask';
import Products from '../Products';

export default function Product_motobur({setActive}) {
	return (
		<div className={style.Product_motobur_conteiner}>
			<div className={style.first_block}>
				<Carousel ket={slides.id} slides={slides} />
				<Content setActive={setActive} content={contentProductMotobur} />
			</div>
			<h2 className={style.main_title}>С этим товаром покупают :</h2>
			<div className={style.two_block}>
				<div className={style.product_first_conteiner}>
					<Products setActive={setActive} product={productItem[0]} />
				</div>
				<div className={style.product_two_conteiner}>
					<Products setActive={setActive} product={productItem[1]} />
				</div>
			</div>
			<Ask setActive={setActive} />
		</div>
	)
}
