import React from 'react'
import style from './Footer.module.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
	 <div className={style.Footer_conteiner}>
		<div className={style.Footer_firstBlock}>
			<div className={style.Footer_logo}><span>Scientific</span>Equipment</div>	
			<div className={style.Footer_copy}>©2022ScientificEquipment</div>
		</div>
		<ul className={style.Footer_aboutUs_list}>
			<li><Link to="/equipment">Оборудование</Link></li>
			<li><Link to="/info">О нас</Link></li>
			<li>Политика конфиденциальности </li>
		</ul>		
		<ul className={style.Footer_contact_list}>
			<li className={style.Footer_contact_green}>Контакты</li>
			<li>scienteq.pro@gmail.com</li>
			<li>Youtube</li>
		</ul>
	 </div>
  )
}

