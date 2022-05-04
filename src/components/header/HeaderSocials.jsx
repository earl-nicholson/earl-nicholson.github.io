import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FaGithubAlt} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className = 'header-socials'>
        <a href='https://www.linkedin.com/in/earl-nicholson-59b455204/' target='_blank' > <FiLinkedin/> </a>
        <a href='https://github.com/earl-nicholson' target='_blank' > <FaGithubAlt/> </a>
    </div>
  )
}

export default HeaderSocials