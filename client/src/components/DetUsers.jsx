import { useState,useEffect} from 'react';
import apireq from '../utils/api';

const DetUsers = () =>{

        //variable de estado con un arreglo vacio para guardar la consulta que se realizara con axios
        const[users,setUsers] = useState([]);

        useEffect(()=>{
            //trayendo datos al cargar
            apireq.getusers()
            .then(response=>{
                if(response.data.success){
                    setUsers(response.data.items);

                }else{
                    console.error('Error al obtener datos del servidor: ',response.data.message);
                }
            })
        },[])
        //titulos de la tabla
        let headtable = ["#","User","state","Role"];

        return(
        <>
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
                {//seccion para lista datos
                    users.map((data)=>(
                        <tr key={data.id}>
                            <td><p>{data.id}</p></td>
                            <td><p>{data.username}</p></td>
                            <td><p>{data.state === 0 ? "Active" : "Block"}</p></td>
                            <td><p>{data.role}</p></td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>

                        ))
                }
                </tbody>
            </table>
        </>
            );
    
}

export default DetUsers;