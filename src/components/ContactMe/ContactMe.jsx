import React , {useState} from 'react'
import './contactme.scss'
export default function ContactMe() {
    const [text , setText] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        setTimeout(()=>{
            setText("Thankyou for filling the form , I will be in touch asap!!")

        },2000)
        
    }
    return (

        <div className='contact' id='contact'>
            <div className="left">
                <img src='assets/cover/contactme.png' alt='contact'/> 
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="name" placeholder='Name'/>
                    <input type="number" placeholder='Number'/>
                    <textarea placeholder='Query/Requirements'></textarea>
                    <button type='Submit'>Send</button>
                </form>
                <span>{text}</span>
            </div>
            
        </div>
    )
}
