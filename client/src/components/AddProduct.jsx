import { useState,useEffect} from 'react';
import apireq from '../utils/api';
import '../styles/AddProduct.css';

const AddProduct = () =>{
    //variable para guardar el arreglo de proveedores
    const[supp,SetSupp] = useState([]);
    const[addname,setAddname]=useState("");
    const[adddes,setAdddes]=useState("");
    const[addprice,setAddprice]=useState("");
    const[addsupp,setAddsupp]=useState("");
    const[addstate,setAddstate]=useState("");


    useEffect(()=>{
        //trayendo datos de los proveedores al cargar
        apireq.getSupp()
        .then(response=>{
            if(response.data.success){
                SetSupp(response.data.items);
            }else{
                console.error('Error al obtener datos del servidor: ',response.data.message);
            }
        })
    },[])
    
    //funcion para agregar un nuevo producto

    /* ----------------- pendiente recargar componente cuando se agregue un nuevo producto------------ */
    const addProduct = async (refreshdata) =>{
        try{
            const dataproduct = {name:addname,descr:adddes,price:addprice,state:addstate,id_supp:addsupp}
            setAddname(""),setAdddes(""),setAddprice(""),setAddstate(""),setAddsupp("");
            hideadd();
            await apireq.addProduct(dataproduct);
            refreshdata; // actualizamos la lista de productos
        }catch(error){
            console.error('error al agregar producto')
        }

    }
    
    //funciones que muestran y ocultan el container flotante que permite crear nuevos productos
    function showadd(){
        document.getElementById('contaddproduct').style.display = "flex";
    }
    function hideadd(){
        document.getElementById('contaddproduct').style.display = "none";
    }


    return(
        <>
        <div className='buttonadd'><button onClick={showadd}>Add Product</button></div>
            <div id='contaddproduct' className="contaddproduct">
                <div className='contformadd'>
                    <span className='titleform'>Add New Product</span>
                    <div className='segment'>
                        <div className='titleadd'><span>Name</span></div>
                        <div className='inputadd'><input type="text" value={addname}
                        onChange={(event)=>{
                            //registra el cambio del campo name
                            setAddname(event.target.value)
                        }}  
                        /></div>
                    </div>
                    <div className='segment'>
                        <div className='titleadd'><span>Description</span></div>
                        <div className='inputadd'><input type="text" value={adddes}
                        onChange={(event)=>{
                            //registra el cambio del campo description
                            setAdddes(event.target.value)
                        }} 
                        /></div>
                    </div>
                    <div className='segment'>
                        <div className='titleadd'><span>Price</span></div>
                        <div className='inputadd'><input type="text"  value={addprice}
                        onChange={(event)=>{
                            //registra el cambio del campo price
                            setAddprice(event.target.value)
                        }} 
                        /></div>
                    </div>
                    <div className='segment'>
                        <div className='titleadd'><span>Supplier</span></div>
                        <div className='inputadd'>
                            <select name="selecsupp" id="selecsupp" value={addsupp}
                            //registra el cambio del campo suppliers
                            onChange={(event)=>{
                            setAddsupp(event.target.value)
                        }} >
                            <option value="">Choose a Supplier</option>

                            {//funcion para listar los proveedores para mas tarde enviar el id
                            supp.map((data)=>(
                                <option key={data.id} value={data.id}>{data.name}</option>
                            ))}
                            </select>
                        </div>
                    </div>
                    <div className='segment'>
                        <div className='titleadd'><span>State</span></div>
                        <div className='inputadd'>
                            <select name="" id="" value={addstate}
                            onChange={(event)=>{
                            //registra el cambio del campo state
                            setAddstate(event.target.value)
                        }} >
                                <option value="">Choose a State</option>
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className='segmentbutton'>
                        <button onClick={ ()=> addProduct() }>Save</button><button onClick={hideadd}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AddProduct;