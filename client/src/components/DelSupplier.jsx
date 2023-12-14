import apireq from '../utils/api';
import '../styles/DelProduct.css';

// eslint-disable-next-line react/prop-types
const DelSupplier = ({idsupp,refreshdata,supplier}) =>{

    //esta variable es para crear un id dinamico para el contenedor flotante de eliminar proveedor
    let idcontainer = "contdelprov"+idsupp;

    //funcion para eliminar datos
        const delSupplier = async (id) =>{
            try{
                hidedel()
                await apireq.deleteSupp(id);
                refreshdata;// actualizamos la lista de proveedores
            }catch(error){
                console.error('error al eliminar proveedor')
            }
        }
            
    //funciones que muestran y ocultan el container flotante que permite eliminar proveedores
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
                <div className='messagealert'><span className='title'>Are you sure you want to remove this Supplier? </span>
                <span className='title'>Supplier: {supplier}</span><span className='note'>Note: this will delete all associated Products and Orders</span></div>
                <div className='segmentdelete'>
                    <button className="red" onClick={()=>delSupplier(idsupp)}>Delete</button>
                    <button className='cancelar' onClick={hidedel}>Cancel</button>
                </div>
            </div>
        </div>
    </>);
}

export default DelSupplier;