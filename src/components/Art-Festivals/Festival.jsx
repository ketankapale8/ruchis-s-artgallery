import React ,{useState} from 'react'
import './festival.scss'
import {FestivalData} from '../Art-Festivals/FestivalData'
import {FaArrowAltCircleRight , FaArrowAltCircleLeft} from 'react-icons/fa'

export default function Festival({slides}) {
     const [current , setCurrent] = useState(0);
     const length = slides.length;

     const nextSlide = () =>{
        setCurrent(current === length-1 ? 0 : current +1 ) 
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current -1)
    }

    if(!Array.isArray(slides) || slides.length<=0){
        return null
    }


     return (
        <div className='festival' id ='festival'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow'onClick={nextSlide} />
                

            {FestivalData.map((slide , index)=>{
                return (
                    <div className={index ===current ? 'slide active' : 'slide'} key={index}>
                        {index===current && (
                            <img src={slide.img} alt='images' className='image'/>
                        )}
                    </div>
                )

            })} 

       
        
            
        </div>
    )
}


    //  {FestivalData.map((item)=>{
    //         return (
    //         <Carousel>
    //             <Carousel.Item>
    //                 <img className="d-block w-100" src={item.img} alt="First slide" style={{height:"600px"}} />
    //                 <Carousel.Caption>
    //                     <h3>{item.title}</h3>
    //                 </Carousel.Caption>
    //             </Carousel.Item>
    //         </Carousel>
    //         )

    //         })}