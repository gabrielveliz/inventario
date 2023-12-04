import { useState,useEffect} from 'react';
import axios from 'axios';


const DetProduct = () =>{
    const[product,SetProduct] = useState([]);

    useEffect(()=>{
        //trayendo datos al cargar
        axios.get('http://localhost:3001/products')
        .then(response=>{
            if(response.data.success){
                SetProduct(response.data.items);
                console.log(response.data.items)
            }else{
                console.error('Error al obtener el inventario: ',response.data.message);
            }
        })
    },[])
    
    return(
        <>
        <div>
            {
                product.map((data)=>(
                    <div key={data.id}><p>{data.name}</p></div>
                ))
            }
        </div>
        </>
    );
}

export default DetProduct;