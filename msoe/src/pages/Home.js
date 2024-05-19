import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import test from '../assets/test.jpeg'

const Home = () => {
    return (
        <div>
            <home>
                <Navbar/>
                <img className='test' src={test}/>
            </home>
        </div>
    )
}

export default Home;