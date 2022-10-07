import React from 'react'
import './Footer.css'

const Footers = () => {
  return (
    <div className='footer'>
            <p>© 2022 Airbnb clone! No rights reserved - this is a demo!</p>
            <div className='footer-links'>
                <a className='ref-link' href="https://github.com/bob-skywalker"><img id ="git" src="https://i.postimg.cc/JnbMcLyf/Git-Hub-Mark-120px-plus.png" alt="github" width='40' height="40"/></a>
                <a href="https://www.linkedin.com/in/bo-zhong-bb4a4b13a/"><img id="linkedin" src="https://i.postimg.cc/y8tHMd0q/LI-In-Bug.png" alt="LinkedIn" width="40" height="40"/></a>
          </div>
    </div>
  )
}

export default Footers
