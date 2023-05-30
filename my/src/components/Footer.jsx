import React from 'react'
import {AiFillInstagram,AiFillFacebook,AiFillTwitterSquare,AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>techystar</h1>
        <p>@all rights reserved</p>
      </div>

      <div>
        <h5>Follow us on</h5>
        <div>
          <a href="https://instagram.com/amanjain5603?igshid=MzNlNGNkZWQ4Mg=="><AiFillInstagram/></a>
          <a href="https://www.facebook.com/profile.php?id=100009497724540&mibextid=ZbWKwL"><AiFillFacebook/></a>
          <a href='/'><AiFillTwitterSquare/></a>
          <a href="https://github.com/amanjn1122"><AiFillGithub/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer