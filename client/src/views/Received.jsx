import LayTop from '../components/UpperMenu';
import LayLeft from '../components/LateralMenu';
import LayBottom from '../components/Footer';


const Received = () => {
    return(
        <>
        <div className="panel">
            <LayTop/>
            <div className='contmain'>
                <LayLeft/>
                <div>Received</div>
            </div>
            <LayBottom/>
        </div>
        </>
    )
}

export default Received;