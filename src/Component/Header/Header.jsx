import React, { useState } from 'react';
import style from './Header.module.scss';
import HeaderModal from './Header_modal/HeaderModal';
import { Link } from 'react-router-dom';



export default function Header() {
		const [modalActive, setModalActive] = useState(false);	

  return (
	<header className={style.header}>
	<div className={style.header_logo}><span className={style.green}>Scientific</span>Equipment</div>
	<nav className={style.header_nav}>
		<ul className={style.nav_list}>
			<li className={style.green_home}>
				<Link to="/main">Главная</Link>
			</li>
			<li className={style.modal} onMouseOver={() => setModalActive(true)} >
				<Link to="/equipment">Оборудование</Link>
			</li>
			<li>
				<Link to="/info">О нас</Link>
			</li>
			<li>
				<Link to="#">scienteq.pro@gmail.com</Link>
			</li>
		</ul>
		<HeaderModal active={modalActive} setActive={setModalActive}/>
	</nav>
</header>
  )
}

