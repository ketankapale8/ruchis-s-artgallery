import React from 'react'
import './navbar.scss'

export default function Navbar({menuOpen,setMenuOpen}) {
    return (
        <div className={'navbar ' + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href='#profile'>
                        <img src='assets/ruchikasign.png' className='logo' alt='sign'/>
                    </a>
                    <div className="itemContainer">
                            <span>Being creative is not a hobby , it is a way of life!</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>

                    </div>
                   
                </div>
            </div>
            
            
          
            
            
        </div>
    )
}
