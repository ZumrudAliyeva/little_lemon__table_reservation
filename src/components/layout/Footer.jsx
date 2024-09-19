import React from 'react'
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
      <div className="container_inner">
        <figure>
          <img src={logo} alt="little_lemon" />
        </figure>
        <div>
          <h4>Doormat Navigation</h4>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/menu'}>Menu</Link>
            </li>
            <li>
              <Link to={'/reservations'}>Reservations</Link>
            </li>
            <li>
              <Link to={'/order-online'}>Order Online</Link>
            </li>
            <li>
              <Link to={'/login'}>Login</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Chicago, Illinois, USA</p>
          <p>+555 888 77 66</p>
          <p>littlelemon@gmail.com</p>
        </div>
        <div>
          <h4>Social Media Links</h4>
          <ul>
            <li>
              <Link to={'/'}>instagram</Link>
            </li>
            <li>
              <Link to={'/'}>facebook</Link>
            </li>
            <li>
              <Link to={'/'}>youtube</Link>
            </li>
            </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer