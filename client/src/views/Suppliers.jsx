import LayTop from '../components/UpperMenu';
import LayLeft from '../components/LateralMenu';
import LayBottom from '../components/Footer';


const Suppliers = () => {
    return(
        <>
        <div className="panel">
            <LayTop/>
            <div className='contmain'>
                <LayLeft/>
                <div>Suppliers</div>
            </div>
            <LayBottom/>
        </div>
        </>
    )
}

export default Suppliers;