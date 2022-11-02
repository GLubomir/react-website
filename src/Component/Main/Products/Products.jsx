import React from 'react'
import style from './Products.module.scss'

export default function Products({product, setActive}) {
	if(product.images.endsWith('tank.png')){
		return (
			<div className={style.Tank_conteiner}>
				  <div className={style.Tank_imgBlock}>
					  <img src={product.images} alt="tank" />	
				  </div>
				  <div className={style.Tank_info}>
					  <h3 className={style.Tank_title}>{product.title}</h3>
					  <p className={style.Tank_text}>{product.text}</p>
					  <button onClick={() => setActive(true)} className={style.Tank_button}><span>Купить</span></button>
				  </div>
			</div>
		 )
	}else if(product.images.endsWith('drill.png')){
		return(
		<div className={style.Drill_conteiner}>
		<div className={style.Drill_imgBlock}>
			<img src={product.images} alt="drill" />	
		</div>
		<div className={style.Drill_info}>
			<h3 className={style.Drill_title}>{product.title}</h3>
			<p className={style.Drill_text}>{product.text}</p>
			<button onClick={() => setActive(true)} className={style.Dril_button}><span>Купить</span></button>
		</div>
 		</div>
		)
	}else if (product.images.endsWith('motobur.png')){
		return(
			<div className={style.Motobur_conteiner}>
					<div className={style.Motobur_imgBlock}>
						<img src={product.images} alt="motobur" />	
					</div>
				<div className={style.Motobur_info}>
						<h3 className={style.Motobur_title}>{product.title}</h3>
						<p className={style.Motobur_text}>{product.text}</p>
					<button onClick={() => setActive(true)} className={style.Motobur_button}><span>Купить</span></button>
				</div>
 		</div>
		)
	}
	
}
