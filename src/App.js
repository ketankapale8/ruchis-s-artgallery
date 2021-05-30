import React , {useState} from 'react'
import Navbar from '../src/components/Navbar/Navbar'
import Profile from '../src/components/Profile/Profile'
import Services from '../src/components/Services/Services'
import Festival from '../src/components/Art-Festivals/Festival'
import ContactMe from '../src/components/ContactMe/ContactMe'
import Images from '../src/components/Portfolio-Images/Images'
import Menu from '../src/components/Menu/Menu'
import './../src/components/app.scss'
import {ImagesData} from '../src/components/Portfolio-Images/ImagesData'
import {FestivalData} from '../src/components/Art-Festivals/FestivalData'



function App() {
  const [menuOpen , setMenuOpen] = useState(false) 
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Profile/>
        <Images slides={ImagesData}/>
        <Festival slides={FestivalData}/>
        <Services/>
        <ContactMe/>
      </div>
    </div>
  );
}

export default App;
