import React from 'react'
import style from './Info.module.scss' 
import workPeople  from '../../img/images1.png'
import workPeople2 from '../../img/images2.png'
import Ask from '../Main/Ask/Ask'

export default function Info({setActive}) {
  return (
	 <div className={style.Info_conteiner}>
		<div className={style.Info_aboutUs}>
			<img src={workPeople} alt="workPeople" />
			<div className={style.Info_block}>
				<h4 className={style.Info_title}>О нас</h4>
				<p>Scientific Equipment – небольшая научно-производственная компания, специализирующаяся на разработке, производстве и внедрении высокоточного оборудования и сопутствующих изделий. Наши разработки используются в ведущих институтах страны. </p>
				<p>Основу команды составляют специалисты и разработчики, имеющие опыт научной, инженерной и инновационной деятельности.</p>
			</div>
		</div>
		<div className={style.Info_contact}>
			<div className={style.Info_second_block}>
				<h4 className={style.Info_contact_title}>Контакты</h4>
				<p className={style.Info_contact_email}><span>E-mail</span>scienteq.pro@gmail.com</p>
			</div>
			<img src={workPeople2} alt="workPeople2" />
		</div>
		<Ask setActive={setActive}/>
	 </div>
  )
}
