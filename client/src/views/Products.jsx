import LayTop from '../components/UpperMenu';
import LayLeft from '../components/LateralMenu';
import LayBottom from '../components/Footer';
import Product from '../components/DetProduct';


const Products = () => {
    return(
        <>
        <div className="panel">
            <LayTop/>
            <div className='contmain'>
                <LayLeft/>
                <Product/>
            </div>
            <LayBottom/>
        </div>
        </>
    )
}

export default Products;