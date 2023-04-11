import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


function Experience() {
  return (
    <section id='experience'>
<h5>What Skills I Have</h5>
<h2>My Experience</h2>
     <div className='container experience_container'>
      <div className='experience_frontend'>
        <h3>Frontend Development</h3>
        <div className='experience_content'>

          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>BOOTSTRAP</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>MATERIAL UI</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>

            <h4>JAVASCRIPT</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>REACT JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>REACT NATIVE</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>


        </div>

        
      </div>

      <div className='experience_Backend'>

      <h3>Backend Development</h3>
        <div className='experience_content'>

          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>AWS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>FIREBASE</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>PYTHON</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>JAVA</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>NODE JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

        


        </div>


      </div>

      </div> 
      
      
      </section>
  )
}

export default Experience 