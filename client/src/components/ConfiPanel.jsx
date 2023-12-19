import { useState,useEffect} from 'react';
import apireq from '../utils/api';
import '../styles/ConfiPanel.css';

const ConfiPanel = () =>{
    
    const [data,setData] = useState([]);
    const [name,setName] = useState("");
    const [shortn,setShortn] = useState("");

    const refreshdata = () => {
        apireq.getConfiguration()
        .then(response=>{
            if(response.data.success){
                setData(response.data.items);

            }else{
                console.error('Error al obtener datos del servidor: ',response.data.message);
            }
        })
    } 

    useEffect(()=>{
        //trayendo datos al cargar
        refreshdata();
    },[])

    return(
        <>
        <div className='conslist'>
            <div className='titleconso'><span>System Information</span></div>
                
                    <div>
                        <div className='titleinput'><span>System Name</span></div>
                        <div className='inputconf'><input type="text" value={name} 
                        onChange={(event)=>{
                            //registra el cambio del campo person
                            setName(event.target.value)
                        }} /></div>
                        <div className='titleinput'><span>Short Name</span></div>
                        <div className='inputconf'><input type="text" value={shortn}
                        onChange={(event)=>{
                            //registra el cambio del campo person
                            setShortn(event.target.value)
                        }} /></div>
                        <div className='titleinput'><span>System Logo</span></div>
                        <div className='inputconf'><input type="file" accept="image/*"/></div>
                        <div className='titleinput'><span>Login Banner</span></div>
                        <div className='inputconf'><input type="file" accept="image/*"/></div>
                        <div className='titleinput'><button>Safe</button></div>
                        </div>

        </div>

        </>
    )
}

export default ConfiPanel;