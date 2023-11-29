import {useNavigate} from 'react-router-dom';
import imgshop from '../assets/icons/menu.png';
import imgrece from '../assets/icons/receptor.png';
import imgret from '../assets/icons/regreso.png';
import imgsal from '../assets/icons/ventas.png';
import imgsupp from '../assets/icons/proveedor.png';
import imgpro from '../assets/icons/producto.png';
import imgus from '../assets/icons/grupo.png';

import '../styles/ConsolaAdmin.css'

const ConsolaAdmin = () =>{
  const navigate = useNavigate();
  //datos para las opciones del dashboard
  let op = [
    {id:1,nameop:"Purchase Orders",img:imgshop,link:'/Shopping'},
    {id:2,nameop:"Purchase Received",img:imgrece,link:'/Received'},
    {id:3,nameop:"Returns",img:imgret,link:'/Returns'},
    {id:4,nameop:"Sales",img:imgsal,link:'/Sales'},
    {id:5,nameop:"Suppliers",img:imgsupp,link:'/Suppliers'},
    {id:6,nameop:"Products",img:imgpro,link:'/Products'},
    {id:7,nameop:"Users",img:imgus,link:'/Users'},
  ]

  return(
    <>
      <div className='contconsola'>
        <div className='titleconso'>Inventory Web System</div>
        <div className='optionconsogrid'>
        {// mostrando opciones del Dashboard
        op.map((data) => (
          <div key={data.id} className='optionconsoone' onClick={()=>navigate(data.link)}>
            <div className='imgconso'><img src={data.img} alt="iconoption" /></div>
            <div className='subtitleconso'><span>{data.nameop}</span></div>
          </div>
      ))}
          
        </div>

      </div>
    </>
  )
}

export default ConsolaAdmin;