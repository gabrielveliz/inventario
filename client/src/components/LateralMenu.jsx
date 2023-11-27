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

    let op = ["Dashboard",
            "Shopping",
            "Received",
            "Returns",
            "Stocks",
            "Sales",
            "Maintenance",
            "Suppliers",
            "Products",
            "Users",
            "Configuration"];

    return(
        <>
        <div className='lateral_menu'>
            <div className="option"><img src={imgdash} alt="iconmenu" /><span>{op[0]}</span></div>
            <div className="option"><img src={imgshop} alt="iconmenu" /><span>{op[1]}</span></div>
            <div className="option"><img src={imgrece} alt="iconmenu" /><span>{op[2]}</span></div>
            <div className="option"><img src={imgret} alt="iconmenu" /><span>{op[3]}</span></div>
            <div className="option"><img src={imgsto} alt="iconmenu" /><span>{op[4]}</span></div>
            <div className="option"><img src={imgsal} alt="iconmenu" /><span>{op[5]}</span></div>
            <div className="title_option"><span>{op[6]}</span></div>
            <div className="option"><img src={imgsupp} alt="iconmenu" /><span>{op[7]}</span></div>
            <div className="option"><img src={imgpro} alt="iconmenu" /><span>{op[8]}</span></div>
            <div className="option"><img src={imgus} alt="iconmenu" /><span>{op[9]}</span></div>
            <div className="option"><img src={imgconf} alt="iconmenu" /><span>{op[10]}</span></div>


        </div>
        </>
    )
}

export default LateralMenu;