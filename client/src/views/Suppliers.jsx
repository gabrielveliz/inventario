import LayTop from '../components/UpperMenu';
import LayLeft from '../components/LateralMenu';
import LayBottom from '../components/Footer';
import Supp from '../components/DetSuppliers';

const Suppliers = () => {
    return(
        <>
        <div className="panel">
            <LayTop/>
            <div className='contmain'>
                <LayLeft/>
                <Supp/>
            </div>
            <LayBottom/>
        </div>
        </>
    )
}

export default Suppliers;