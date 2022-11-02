import React, { useState } from 'react'
import  '../Carousel/Carousel.css'
import VectorLeft from '../../../img/ico/Vector2.png'
import VectorRight from '../../../img/ico/Vector1.png'

export default function Carousel(props) {
	const [offset, setOfset] = useState(0)
	const PAGE_WIDHT = 600;

	const handleLeftArrowClick = () => {
		setOfset((currentOffset) => {
			const newOffset  = currentOffset + PAGE_WIDHT;
			return Math.min(newOffset, 0);
		})
	}
	const handleRightArrowClick = () =>{
	

		setOfset((currentOffset) => {
			const newOffset  = currentOffset - PAGE_WIDHT;
			return Math.max(newOffset, -1200);
		})
	}
  return (
	 <div className='main-conteiner'>
		<div className='window'> 
			{
				props.slides.map((el) => {
					return (
						<div  className='conteiner' key={el.id}
							style={{
								transform: `translateX(${offset}px)`
							
							}}
						>
							<img  src={`../../../public ${el.images}`} alt="foto" />
						</div>
						)
					})
				}
				<button onClick={handleLeftArrowClick} className='arrowLeft'><img src={VectorLeft} alt="VectorLeft" /></button>
				<button onClick={handleRightArrowClick} className='arrowRight'><img src={VectorRight} alt="VectorRight" /></button>
		</div>
	 </div>
  )
}
