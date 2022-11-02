import React from 'react'
import style from './Modal.module.scss';
import { IoCloseSharp } from "react-icons/io5";
export default function Modal({open, setOpen}){
	
	return (
	 <div className={open ? `${style.Modal_conteiner} ${style.show}` : style.Modal_conteiner}>
		<div className={open ? `${style.Modal_window} ${style.show}` : style.Modal_window}>
			<div className={style.Modal_logo}><span>Scientific</span>Equipment</div>
			<IoCloseSharp onClick={() => setOpen(false)} className={style.delete_icon}/>
			<form>
				<p>Ваше имя<span>*</span></p>
				<input className={style.Input_name} type="text" placeholder='Как к вам обращаться?'/>
				<p>Номер телефона<span>*</span></p>
				<input className={style.Input_number} type="text" placeholder='Введите ваш номер телефона' />
				<p>Комментарий</p>
				<textarea className={style.TextArea} type="text" placeholder='Когда с вами удобнее связаться?'/>
				<div className={style.checkbox_conteiner}>
				<label className={style.label} htmlFor="idC">
					<input className={style.checkbox_input} type="checkbox" id="idC"/>
					<span className={style.fake}></span>
					<p className={style.checkbox_text}>Даю своё согласие на обработку <span className={style.green_text}>персональных данных</span> </p>
					
				</label>
				</div>
				<button><span>Оставить заявку</span></button>
			</form>			
		</div>
	 </div>
  )
}
