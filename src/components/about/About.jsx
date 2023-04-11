import React from 'react'
import './About.css'
import About_me from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
        
    <h5>Get To Know</h5>
    <h2>About Me</h2>  

    <div className='container about_container'>
      <div className='about_me'>
    <div className='about_me-image'>
      <img src={About_me} alt='about-me'/>
    </div>

      </div>

    <div className='about_content'>
      <div className='about_cards'>

        <article className='about_card'>
          <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small>1+ Years Working</small>
        </article>

        <article className='about_card'>
          <FiUsers className='about_icon'/>
          <h5>company</h5>
          <small>2+ South Africa</small>
        </article>

        <article className='about_card'>
          <VscFolderLibrary className='about_icon'/>
          <h5>Projects</h5>
          <small>10+ Completed</small>
        </article>

      </div>

    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing 
    elit. Dolorem eaque expedita vero, animi saepe eos.
    Lorem ipsum dolor sit amet consectetur adipisicing 
    elit. Dolorem eaque expedita vero, animi saepe eos.

    </p>

    <a href='#contact' className='btn btn-primary' >Let's Talk</a>
    </div>

    </div>
    
      </section>
  )
}

export default About