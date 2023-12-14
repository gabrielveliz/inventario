import apireq from '../utils/api';
import '../styles/AddProduct.css';

// eslint-disable-next-line react/prop-types
const AddEditSupp = ({refreshdata, hideadd ,idsupp, title,addname ,setAddname,addades, setAddades,addper, setAddper,addnumb, setAddnumb,addstate, setAddstate}) =>{

    
    //funcion para agregar un nuevo proveedor
    const addsupplier = async () =>{
        //primer if es para editar
        if(idsupp>0){
            const datasuppliers = {id:idsupp,name:addname,address:addades,contact_person:addper,contact_number:addnumb,state:addstate}
            hideadd();
            await apireq.editSupp(datasuppliers);
            refreshdata; // actualizamos la lista de proveedores 
        }else{
            //else para agregar un nuevo proveedor
            try{
                
                const datasuppliers = {name:addname,address:addades,contact_person:addper,contact_number:addnumb,state:addstate}
                hideadd();
                await apireq.addsupp(datasuppliers);
                refreshdata; // actualizamos la lista de proveedores 
            }catch(error){
                console.error('error al agregar proveedor')
            }
        }
    }
    
    return(
        <>
            <div id='contadd' className="contaddproduct">
            <div className='contformadd'>
                    <span className='titleform'>{title}</span>
                    <div className='segment'>
                        <div className='titleadd'><span>Name</span></div>
                        <div className='inputadd'><input type="text" value={addname}
                        onChange={(event)=>{
                            //registra el cambio del campo name
                            setAddname(event.target.value)
                        }}  
                        /></div>
                    </div>
                    <div className='segment'>
                        <div className='titleadd'><span>Address</span></div>
                        <div className='inputadd'><input type="text" value={addades}
                        onChange={(event)=>{
                            //registra el cambio del campo address
                            setAddades(event.target.value)
                        }} 
                        /></div>
                    </div>
                    <div className='segment'>
                        <div className='titleadd'><span>Contact Person</span></div>
                        <div className='inputadd'><input type="text"  value={addper}
                        onChange={(event)=>{
                            //registra el cambio del campo person
                            setAddper(event.target.value)
                        }} 
                        /></div>
                    </div>
                    <div className='segment'>
                        <div className='titleadd'><span>Contact Number</span></div>
                        <div className='inputadd'><input type="text"  value={addnumb}
                        onChange={(event)=>{
                            //registra el cambio del campo number
                            setAddnumb(event.target.value)
                        }} 
                        /></div>
                    </div>
                    <div className='segment'>
                        <div className='titleadd'><span>State</span></div>
                        <div className='inputadd'>
                            <select name="" id="" value={addstate}
                            onChange={(event)=>{
                            //registra el cambio del campo state
                            setAddstate(event.target.value)
                        }} >
                                <option value="">Choose a State</option>
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className='segmentbutton'>
                        <button onClick={ ()=> addsupplier() }>Save</button><button onClick={hideadd}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AddEditSupp;