import { useNavigate } from 'react-router-dom'
import logo from '../components2/logo.png'

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


    return (
        <div>
        <nav>

        <div className="logo-container">
            <button className='logo-container' onClick={navigateHome}>
                <img className='logo' src={logo}/>
            </button>
        </div>

        <div className='button-container'>
            <button className='nav-button' onClick={navigateHome}>
                Home
            </button>
            <button className='nav-button' onClick={navigateContact}>
                Contact 
            </button>
            <button className='nav-button' onClick={navigateSponsors}>
                Sponsors 
            </button>
        </div>

        </nav>
        </div>
    )
}

export default Navbar;