import React from 'react'
import SocialLinks from '../constants/socialLinks'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="">
        <SocialLinks styleClass="footer-icons"/>
        <p>&copy;{new Date().getFullYear()} SPORTBlog</p>
      </div>
    </footer>
  )
}

export default Footer
