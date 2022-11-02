import React from 'react'
import style from './Main.module.scss'
import Carousel from './Carousel/Carousel';
import Content from './Content/Content';
import slides from './Data/data_slider';
import contentMain from './Data/data_content'
import WeDoing from './WeDoing/WeDoing';
import productItem from './Data/data.product'
import Products from './Products/Products';
import Ask from './Ask/Ask';

export default function Main({setActive}) {

	return (
		<main className={style.Main_conteiner}>
			<div className={style.first_block}>
				<Carousel ket={slides.id} slides={slides} />
				<Content content={contentMain} setActive={setActive}/>
			</div>
			<WeDoing />
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

		</main>
	)
}
