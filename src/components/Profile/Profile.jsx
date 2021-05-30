import React , {useEffect , useRef} from 'react'
import './profile.scss'
import {init} from 'ityped'

export default function Profile() {
    const textRef = useRef();

      useEffect(()=>{
        init(textRef.current ,
            {showCursor : false , typeSpeed: 150 , backDelay:1500,
            backSpeed :60,  strings : [
                " ,Illustrator & Designer"
        ]})
       
    },[textRef])
    return (
        <div className='profile' id='profile'>
            <div className="left">
                 <div className="imgContainer">
                  <img src='assets/cover/dogcover.jpg' alt='coverphoto'/>
                </div> 
            </div> 
             <div className="right"> 
                     <div className="wrapper">
                         <h1>Ruchika Palorkar</h1>
                         <h2>Sketch Artist <span ref={textRef}></span></h2>
                     </div>

                     <a href='#images'>
                         <img src='assets/cover/down.png' alt=''/>
                     </a>

             </div>
        </div>
    )
}



