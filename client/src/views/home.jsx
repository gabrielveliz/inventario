import LayTop from '../components/UpperMenu';
import LayLeft from '../components/LateralMenu';
import LayRight from '../components/ConsolaAdmin';
import LayBottom from '../components/Footer';
import '../styles/ConsolaAdmin.css';

const Home = () => {
    return(
        <>
        <div className="panel">
            <LayTop/>
            <div className='contmain'>
                <LayLeft/>
                <LayRight/>
            </div>
            <LayBottom/>
        </div>
        </>
    )
}

export default Home;