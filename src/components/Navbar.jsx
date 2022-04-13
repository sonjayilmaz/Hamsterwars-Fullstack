import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => (
    <nav className='navbar'>
        <Link to='/'>Start</Link>
        <Link to='/gallery'>Gallery</Link>
    </nav>
)

export default Navbar;