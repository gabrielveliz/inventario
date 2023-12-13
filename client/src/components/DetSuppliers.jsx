import { useState,useEffect} from 'react';
import apireq from '../utils/api';



const DetProduct = () =>{
    //variable de estado con un arreglo vacio para guardar la consulta que se realizara con axios
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
    
    //titulos de la tabla
    let headtable = ["#","Name","Contact Person","State"];


    return(
        <>
        <div className='conslist'>
            <div className='titleconso'><span>List of Suppliers</span></div>
            <div className='buttonadd'><button>Add Supplier</button></div>
                <table>
                    {/* cabecera de tabla*/}
                    <thead>
                        <tr>
                            {
                                headtable.map((data,index)=>(
                                    <th key={index}><p>{data}</p></th>
                                ))
                            }
                            <th colSpan="2"><p>Action</p></th>
                        </tr>
                    </thead>
                <tbody>
                    {/* cuerpo de la tabla con la lista de productos*/}
                {
                    supp.map((data)=>(
                        <tr key={data.id} className='datalist'>
                            <td><p>{data.id}</p></td>
                            <td><p>{data.name}</p></td>
                            <td><p>{data.contact_person}</p></td>
                            <td><p>{data.state===1 ? "Active":"Inactive" }</p></td>
                            <td className='center'><button>Edit</button></td>
                            <td className='center'><button>Delete</button></td>
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