import apireq from '../utils/api';
import '../styles/DelProduct.css';



// eslint-disable-next-line react/prop-types
const DeleteProduct = ({idprod,refreshdata,prod}) =>{

    //esta variable es para crear un id dinamico para el contenedor flotante de eliminar producto
    let idcontainer = "contdelproduct"+idprod;

    //funcion para eliminar datos
        const delProduct = async (id) =>{
            try{
                hidedel()
                await apireq.deleteProduct(id);
                refreshdata;// actualizamos la lista de productos
            }catch(error){
                console.error('error al eliminar producto')
            }
        }
            
    //funciones que muestran y ocultan el container flotante que permite eliminar productos
    function showdel(){
        document.getElementById(idcontainer).style.display = "flex";
    }
    function hidedel(){
        document.getElementById(idcontainer).style.display = "none";
    }

    return(<>
    <button className="red" onClick={showdel}>Delete</button>
        <div id={idcontainer} className="contaddproduct">
            <div className='contformadd'>
                <div className='messagealert'><span className='title'>Are you sure you want to remove this product? </span><span className='title'>Product: {prod}</span><span className='note'>Note: this will delete all associated orders</span></div>
                <div className='segmentdelete'>
                    <button className="red" onClick={()=>delProduct(idprod)}>Delete</button>
                    <button className='cancelar' onClick={hidedel}>Cancel</button>
                </div>
            </div>
        </div>
    </>);
}

export default DeleteProduct;