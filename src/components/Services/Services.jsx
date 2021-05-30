import React, {useState} from 'react'
import './services.scss'
// import {serviceData} from '../Services/serviceData'

export default function Services() {
    const [text , setText] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        setText('Thanks for subscribing!')

    }
    return (
        <div className='services' id='newsletter'>
            <div className="wrapper">
                <div className="left">
                    <img src='assets/services/services.jpeg' alt='services'/>
                </div>
                <div className="right">
                    <div className="container">

                    <p>
                        Ruchika is a professional sketch artist who works on realistic portraits. She loves hyper-realistic drawings and does comissioned artwork as well. Her work got recognzed at Mumbai and Pune Art Festivals and she actively participates in art ,painting and rangoli events.
                    </p>

                    <form onSubmit={handleSubmit} >
                        <h5>Subscribe to my newsletter</h5>
                        <input type='text' placeholder='Mention your email address'></input>
                        <button type='submit'>Send</button>
                        
                    </form>
                    <span>{text}</span>


                    </div>
                    
                </div>
            </div>
        </div>
    )
}
