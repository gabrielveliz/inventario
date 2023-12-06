import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import apireq from '../utils/api';
import us from '../assets/images/usuario.png'
import pas from '../assets/images/candado.png'
import gv from '../assets/images/GV.png'
import '../styles/LoginIngreso.css'


const LoginIngreso = () =>{
  const navigate = useNavigate();

  const[user,setUser]=useState("");
  const[pass,setPass]=useState("");
  const[alert,setAlert]=useState("");

  const checklogin = async () =>{
    try{
      const credentials = {user:user,pass:pass}
      const response = await apireq.postLogin(credentials);
      console.log(response)
      if(response.data.success){navigate('/dash')}
      //f**********falta agregar el uso de sesiones****************
      //**********************************************
      //************************************* */ */
      
    }catch(error){
      setAlert("Incorrect user or password");
      console.log('error',error.mesagge);
    }
  }

  return(
    <>
    <div className='login'>
      <div className='logo'><img src={gv} alt="" /></div>
          <div className='input'><img src={us} alt="" /><input type="text" value={user}
        onChange={(event)=>{
          setUser(event.target.value)
        }} 
        placeholder='Ingresar usuario...' /></div>
          <div className='input'><img src={pas} alt="" /><input type="password" value={pass}
        onChange={(event)=>{
          setPass(event.target.value)
        }} 
        placeholder='Ingresar contraseña...'/>
        </div>
        <span className='alertlog'>{alert}</span>
          <div className='checkcontr'>
            <div className='chec'><input type="checkbox" id="scales" name="scales" /><label>Recordarme</label></div>
            <div className='olv'><span>¿Olvido su contraseña?</span></div>
          </div>
        <div className='botoningreso'>
          <button onClick={checklogin}>Ingresar</button>
        </div>
        
    </div>
    </>
  );
}

export default LoginIngreso;