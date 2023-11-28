import imguser from '../assets/images/user.png';
import '../styles/UpperMenu.css'


const UpperMenu = () => {
let usuario = "Gabito";

    return(
        <>
        <div className="upper_menu">
            <div className="logo"><h1>GV ERP</h1></div>
            <div className='barsearch'><input type="text" placeholder='Search...' /></div>
            <div className="user">
                <div className='imguser'><img src={imguser} alt="img user" /></div>
                <div className='nameuser'><span>{usuario}</span></div>
            </div>
        </div>
        </>
    )
}

export default UpperMenu;