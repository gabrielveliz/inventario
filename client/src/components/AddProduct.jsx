import { useState,useEffect} from 'react';
import apireq from '../utils/api';
import '../styles/AddProduct.css';

const AddProduct = () =>{
    const[supp,SetSupp] = useState([]);

    useEffect(()=>{
        //trayendo datos al cargar
        apireq.getSupp()
        .then(response=>{
            if(response.data.success){
                SetSupp(response.data.items);
            }else{
                console.error('Error al obtener datos del servidor: ',response.data.message);
            }
        })
    },[])

    function showadd(){
        document.getElementById('contaddproduct').style.display = "flex";
    }
    function hideadd(){
        document.getElementById('contaddproduct').style.display = "none";
    }

    return(
        <>
            <button onClick={showadd}>Add</button>
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
                            {supp.map((data)=>(
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