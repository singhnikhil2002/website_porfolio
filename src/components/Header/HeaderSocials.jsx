import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://.linkedincom" target='_blank' rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com" target='_blank' rel="noreferrer"><FaGithub/></a>
      <a href="https://twitter.com" target='_blank' rel="noreferrer"><FaTwitter /></a>
    </div>
  )
}

export default HeaderSocials
