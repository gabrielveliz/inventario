import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import us from '../assets/images/usuario.png'
import pas from '../assets/images/candado.png'
import gv from '../assets/images/GV.png'
import '../styles/LoginIngreso.css'


const LoginIngreso = () =>{
  const navigate = useNavigate();

  const[user,setUser]=useState("");
  const[pass,setPass]=useState("");

  const checklogin = async () =>{
    try{
      const response = await axios.post('http://localhost:3001/users/login',{
        user:user,
        pass:pass,
      });
      if(response.data.success){navigate('/administration')}
      //f**********alta agregar el uso de sesiones****************
      //**********************************************
      //************************************* */ */
      
    }catch(error){
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
        placeholder='Ingresar contraseña...'/></div>
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