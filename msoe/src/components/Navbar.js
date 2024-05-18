import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
    const navigate = useNavigate();


    const navigateHome = () => {
        navigate('/');
    }

    const navigateContact = () => {
        navigate('/contactus');
    }

    const navigateSponsors = () => {
        navigate('/sponsors');
    }

    const navigateGallery = () => {
        navigate('/gallery');
    }


    return (
        <div>
            <div className='filler'></div>
        <nav>
        
        <div className="logo">
            <button className='logo-container' onClick={navigateHome}>
                <img className='logo' src={logo}/>
            </button>
        </div>

            <button className='nav-button' onClick={navigateHome}>
                Home
            </button>
            <button className='nav-button' onClick={navigateGallery}>
                Gallery
            </button>
            <button className='nav-button' onClick={navigateSponsors}>
                Sponsors 
            </button>
            <button className='nav-button' onClick={navigateContact}>
                Contact 
            </button>

        </nav>
        </div>
    )
}

export default Navbar;