import React from 'react'
import style from './WeDoing.module.scss'
import man from '../../../img/man.png'
import { Link } from 'react-router-dom'


export default function WeDoing() {
  return (
	 <div className={style.WeDoing_conteiner}>
		<div className={style.WeDoing_content}>
			<h3 className={style.WeDoing_title}>Чем мы занимаемся?</h3>
			<p className={style.WeDoing_text}>
				Компания Scientific Equipment занимается разработкой, проектированием и созданием механизмов различного назначения. Нашими основными направлениями деятельности являются работы в разработке высокотемпературного и вакуумного оборудования, а также механизированные системы с высокими требованиями к точности изготовления.
			</p>
			<Link to="/info" className={style.WeDoing_button}>
				<span>Узнать подробнее</span>
			</Link>
		</div>
		<img src={man} alt="man" />
	 </div>
  )
}
