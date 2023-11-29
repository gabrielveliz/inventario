import LayTop from '../components/UpperMenu';
import LayLeft from '../components/LateralMenu';
import LayBottom from '../components/Footer';


const Returns = () => {
    return(
        <>
        <div className="panel">
            <LayTop/>
            <div className='contmain'>
                <LayLeft/>
                <div>Returns</div>
            </div>
            <LayBottom/>
        </div>
        </>
    )
}

export default Returns;