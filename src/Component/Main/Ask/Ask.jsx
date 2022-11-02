import React from 'react'
import style from './Ask.module.scss'

export default function Ask({setActive}) {
  return (
	 <div className={style.Ask_conteiner}>
		<div className={style.Ask_info}>
			<h3 className={style.Ask_title}>Остались вопросы?</h3>
			<div className={style.Ask_text}>Закажите обратный звонок, с вами свяжется менеджер и всё объяснит</div>
		</div>
		<button onClick={() => setActive(true)} className={style.Ask_button}><span>Заказать звонок</span></button>
	 </div>
  )
}
