import { useState,useEffect} from 'react';
import apireq from '../utils/api';
import '../styles/AddProduct.css';

const AddProduct = () =>{
    //variable para guardar el arreglo de proveedores
    const[supp,SetSupp] = useState([]);

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
                        <div className='inputadd'><input type="text" /></div>
                    </div>
                    <div className='segment'>
                        <div className='titleadd'><span>Description</span></div>
                        <div className='inputadd'><input type="text" /></div>
                    </div>
                    <div className='segment'>
                        <div className='titleadd'><span>Price</span></div>
                        <div className='inputadd'><input type="text" /></div>
                    </div>
                    <div className='segment'>
                        <div className='titleadd'><span>Supplier</span></div>
                        <div className='inputadd'>
                            <select name="selecsupp" id="selecsupp">

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
                            <select name="" id="">
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className='segmentbutton'>
                        <button>Save</button><button onClick={hideadd}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AddProduct;