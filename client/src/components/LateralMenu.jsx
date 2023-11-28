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

    //datos para menu lateral izquierdo, si en img se utiliza "" se considera un titulo
    let op = [
        {id:1,name:"Dashboard",img:imgdash},
        {id:2,name:"Shopping",img:imgshop},
        {id:3,name:"Received",img:imgrece},
        {id:4,name:"Returns",img:imgret},
        {id:5,name:"Stocks",img:imgsto},
        {id:6,name:"Sales",img:imgsal},
        {id:7,name:"Maintenance",img:""},
        {id:8,name:"Suppliers",img:imgsupp},
        {id:9,name:"Products",img:imgpro},
        {id:10,name:"Users",img:imgus},
        {id:11,name:"Configuration",img:imgconf},
];

    return(
        <>
        <div className='lateral_menu'>
            { // mostrando el menu lateral izquierdo con los datos del arrelo op
                op.map((data) =>(
                    <div key={data.id} className={data.img ? "option" : "title_option"}>
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