import imgshop from '../assets/icons/menu.png';
import imgrece from '../assets/icons/receptor.png';
import imgret from '../assets/icons/regreso.png';
import imgsal from '../assets/icons/ventas.png';
import imgsupp from '../assets/icons/proveedor.png';
import imgpro from '../assets/icons/producto.png';
import imgus from '../assets/icons/grupo.png';

import '../styles/ConsolaAdmin.css'

const ConsolaAdmin = () =>{

  //datos para las opciones del dashboard
  let op = [
    {id:1,nameop:"Purchase Orders",img:imgshop},
    {id:2,nameop:"Purchase Received",img:imgrece},
    {id:3,nameop:"Returns",img:imgret},
    {id:4,nameop:"Sales",img:imgsal},
    {id:5,nameop:"Suppliers",img:imgsupp},
    {id:6,nameop:"Products",img:imgpro},
    {id:7,nameop:"Users",img:imgus},
  ]

  return(
    <>
      <div className='contconsola'>
        <div className='titleconso'>Inventory Web System</div>
        <div className='optionconsogrid'>
        {// mostrando opciones del Dashboard
        op.map((data) => (
          <div key={data.id} className='optionconsoone'>
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