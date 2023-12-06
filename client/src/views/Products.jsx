import LayTop from '../components/UpperMenu';
import LayLeft from '../components/LateralMenu';
import LayBottom from '../components/Footer';
import Product from '../components/DetProduct';
import AddProduct from '../components/AddProduct';


const Products = () => {
    return(
        <>
        <div className="panel">
            <LayTop/>
            <div className='contmain'>
                <LayLeft/>
                <div>
                    <AddProduct/>
                    <Product/>
                </div>
                
            </div>
            <LayBottom/>
        </div>
        </>
    )
}

export default Products;