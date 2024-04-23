import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar justify-content-center'>
      <Link to='/' style={{ color: 'white', textDecoration: 'none', padding: '0 10px 0 0' }}> 🏠 Home </Link> | <Link to='/favoritos' style={{ color: 'white', textDecoration: 'none', padding: '0 0 0 10px' }}> 📒 Favoritos </Link>
    </nav>
  )
}
export default Navbar
