import React , {useState} from 'react'
import './images.scss'
import {ImagesData} from '../../components/Portfolio-Images/ImagesData'
import {FaArrowAltCircleRight , FaArrowAltCircleLeft} from 'react-icons/fa'

export default function Images({slides}) {
    const [current , setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () =>{
        setCurrent(current === length-1 ? 0 : current +1 ) 
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current -1)
    }

    // onClick={prevSlide}
    // onClick={nextSlide}

    if(!Array.isArray(slides) || slides.length<=0){
        return null
    }

    return (
        <section className='images' id='images'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow'onClick={nextSlide} />
            {/* <img src='assets/arrow.png' alt='arrow left' className='left-arrow' onClick={prevSlide}/>
            <img src='assets/arrow.png' alt='arrow right' className='right-arrow' onClick={nextSlide}/> */}


            {ImagesData.map((slide , index)=>{
                return (
                    <>
                    <div className={index ===current ? 'slide active' : 'slide'} key={index}>
                        <>
                        {  index===current && (
                            <img src={slide.img} alt='images' className='image'/>
                        )}
                        
                        </>
                    </div>
                    </>
                )

            })} 
           
            
        </section>
    )
}
