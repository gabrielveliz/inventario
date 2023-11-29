import {useNavigate} from 'react-router-dom';
import imgdash from '../assets/icons/dash.png';
import imgshop from '../assets/icons/menu.png';
import imgrece from '../assets/icons/receptor.png';
import imgret from '../assets/icons/regreso.png';
import imgsto from '../assets/icons/cantidad.png';
import imgsal from '../assets/icons/ventas.png';
import imgsupp from '../assets/icons/proveedor.png';
import imgpro from '../assets/icons/producto.png';
import imgus from '../assets/icons/grupo.png';
import imgconf from '../assets/icons/configuraciones.png';
import "../styles/LateralMenu.css"

const LateralMenu = () => {
    const navigate = useNavigate();
    //datos para menu lateral izquierdo, si en img se utiliza "" se considera un titulo
    let op = [
        {id:1,name:"Dashboard",img:imgdash,link:'/dash'},
        {id:2,name:"Shopping",img:imgshop,link:'/Shopping'},
        {id:3,name:"Received",img:imgrece,link:'/Received'},
        {id:4,name:"Returns",img:imgret,link:'/Returns'},
        {id:5,name:"Stocks",img:imgsto,link:'/Stocks'},
        {id:6,name:"Sales",img:imgsal,link:'/Sales'},
        {id:7,name:"Maintenance",img:"",link:''},
        {id:8,name:"Suppliers",img:imgsupp,link:'/Suppliers'},
        {id:9,name:"Products",img:imgpro,link:'/Products'},
        {id:10,name:"Users",img:imgus,link:'/Users'},
        {id:11,name:"Configuration",img:imgconf,link:'/Configuration'},
];

    return(
        <>
        <div className='lateral_menu'>
            { // mostrando el menu lateral izquierdo con los datos del arrelo op
                op.map((data) =>(
                    <div key={data.id} className={data.img ? "option" : "title_option"} onClick={()=>navigate(data.link)}>
                        {data.img ?
                            <img src={data.img} alt="iconmenu" />:""
                        }
                    <span>{data.name}</span></div>
                ) )
            }

        </div>
        </>
    )
}

export default LateralMenu;