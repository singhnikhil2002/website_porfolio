import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="About_Image" />
              </div>
            </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>1+ Years</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Experience</h5>
                <small>1+ Years</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>5+ Completed</small>
              </article>
            </div>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt dolore tempora nihil praesentium harum. Dicta itaque odit magni est expedita!</p>

              <a href='#contact' className='btn btn-primary'>Lets Talk</a>
          </div>
          </div>
    </section>
  )
}

export default About

