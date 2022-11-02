import React from 'react'
import { Link } from 'react-router-dom'
import style from './HeaderModal.module.scss'


export default function HeaderModal({active, setActive}) {
  return (
	<div className={active ? `${style.header_modal} ${style.modal_active}`:style.header_modal} onMouseOver={() => setActive(true)} onMouseOut={() => setActive(false)} >
					<ul className={style.header_modal_list} onMouseOut={() => setActive(false)}>
						<li>
								<Link to="/product_motobur">Бензиновый буровой станок Pomeroy 
EZ CoreD261-C D261-C</Link>
						</li>
						<li>
								<Link to="/pompa">Помпа для колонкового бура Pomeroy</Link>
						</li>
						<li>
								<Link to="/drill">Коронка Pomeroy с внутренним 
диаметром 1″ для бура</Link>
						</li>
				
					</ul>
				</div>
  )
}
