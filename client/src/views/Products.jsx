import LayTop from '../components/UpperMenu';
import LayLeft from '../components/LateralMenu';
import LayBottom from '../components/Footer';


const Products = () => {
    return(
        <>
        <div className="panel">
            <LayTop/>
            <div className='contmain'>
                <LayLeft/>
                <div>Products</div>
            </div>
            <LayBottom/>
        </div>
        </>
    )
}

export default Products;