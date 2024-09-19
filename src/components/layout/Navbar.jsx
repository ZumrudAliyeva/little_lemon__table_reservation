import { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from '../../assets/burger_menu.svg'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <>
    <nav>
        <ul className={`${menuOpen ? 'opened' : ''}`}>
            <li>
                <Link to={'/'} className='navlink' onClick={toggleMenu}>Home</Link>
            </li>
            <li>
                <Link to={'/'} className='navlink'>About</Link>
            </li>
            <li>
                <Link to={'/'} className='navlink'>Menu</Link>
            </li>
            <li>
                <Link to={'/booking'} className='navlink' onClick={toggleMenu}>Reservations</Link>
            </li>
            <li>
                <Link to={'/'} className='navlink'>Order Online</Link>
            </li>
            <li>
                <Link to={'/'} className='navlink'>Login</Link>
            </li>
        </ul>
        <div className="menu_icon" onClick={toggleMenu}>
            <img src={menu} alt="" />
          </div>
    </nav>
    </>
  )
}

export default Navbar