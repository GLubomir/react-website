import React from 'react'
import style from '../Content/Content.module.scss'

export default function Content({content, setActive}) {

	return (
	 <div  className={style.Content_conteiner}>
			<h2 key={content.title} className={style.Content_title}>{content.title}</h2>
			<h3 key={content.subTitle}  className={style.Content_subTitle}>{content.subTitle}</h3>
			<div className={style.Content_text}>{content.text.length === 3 ? content.text.map(el => {
				return (
					<p key={el}>{el}</p>
				)
			}): content.text}</div>
			<ul className={style.Content_list}>
				{
					content.item.map(el => {
						return(
								<li key={el}>{el}</li>
							)
						})
					}
			</ul>
			<button onClick={() => setActive(true)} className={style.Content_button}><span>Купить</span></button>
	 </div>
  )
}
