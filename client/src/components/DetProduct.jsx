import { useState,useEffect} from 'react';
import apireq from '../utils/api';
import '../styles/DetProduct.css';


const DetProduct = () =>{
    //variable de estado con un arreglo vacio para guardar la consulta que se realizara con axios
    const[product,SetProduct] = useState([]);

    useEffect(()=>{
        //trayendo datos al cargar
        apireq.getProducts()
        .then(response=>{
            if(response.data.success){
                SetProduct(response.data.items);
            }else{
                console.error('Error al obtener datos del servidor: ',response.data.message);
            }
        })
    },[])
    
    //titulos de la tabla
    let headtable = ["#","Name","Price","Supplier","State"];


    return(
        <>
        <div className='consproduct'>
            <div className='titleconso'><span>List of Products</span></div>
                <table>
                    {/* cabecera de tabla*/}
                    <thead>
                        <tr>
                            {
                                headtable.map((data,index)=>(
                                    <th key={index}><p>{data}</p></th>
                                ))
                            }
                        </tr>
                    </thead>
                <tbody>
                    {/* cuerpo de la tabla con la lista de productos*/}
                {
                    product.map((data)=>(
                        <tr key={data.id} className='datalist'>
                            <td><p>{data.id}</p></td>
                            <td><p>{data.name}</p></td>
                            <td><p>${data.price}</p></td>
                            <td><p>{data.name_supplier}</p></td>
                            <td><p>{data.state===1 ? "Active":"Inactive" }</p></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        </>
    );
}

export default DetProduct;