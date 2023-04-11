import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/IMG.jpg'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
   <header>

<div className='container header_container'>
  <h5>Hello I'm</h5>
  <h1>Muleya Pfano</h1>
  <h5 className='text-light'>Fullstack Developer</h5>
  <CTA/>
  <HeaderSocial/>
  <div className='me'>
  <img src={Me} alt='me' className='img' />
  </div>
  <a href='#contact' className='scroll_down'>scroll down</a>
 
</div>

   </header>
  )
}

export default Header