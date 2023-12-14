import { useState,useEffect} from 'react';
import apireq from '../utils/api';
import AddEditSupp from './AddEditSupp';
import DelSupplier from './DelSupplier';

const DetSuppliers = () =>{
    //variable de estado con un arreglo vacio para guardar la consulta que se realizara con axios
    const[supp,SetSupp] = useState([]);
    //variables de estado para agregar y editar
    const[idsupp,setIdsupp]=useState("");
    const[addname,setAddname]=useState("");
    const[addades,setAddades]=useState("");
    const[addper,setAddper]=useState("");
    const[addnumb,setAddnumb]=useState("");
    const[addstate,setAddstate]=useState("");
    //variable que se utiliza como titulo para Agregar o Editar
    const[mess,setMess]=useState("");



    function refreshdata(){
        apireq.getSupp()
        .then(response=>{
            if(response.data.success){
                SetSupp(response.data.items);
            }else{
                console.error('Error al obtener datos del servidor: ',response.data.message);
            }
        })
    } 

    useEffect(()=>{
        //trayendo datos al cargar
        refreshdata();
    },[supp])
    
//funciones que muestran y ocultan el container flotante que permite crear nuevos productos
    function show(){
        document.getElementById('contadd').style.display = "flex";
    }
    function hide(){
        document.getElementById('contadd').style.display = "none";
        setIdsupp("");
        setAddname("");
        setAddades("");
        setAddper("");
        setAddnumb("");
        setAddstate("");
    }

    function addsupplier(){
        show();
        setMess("Add New Supplier");
    }

    function edit(id,name, desc,per,num,state){
        setIdsupp(id)
        setAddname(name)
        setAddades(desc)
        setAddper(per)
        setAddnumb(num)
        setAddstate(state);
        setMess("Edit Supplier");
        show();
    }
    
    //titulos de la tabla
    let headtable = ["#","Name","Contact Person","State"];


    return(
        <>
        <div className='conslist'>
            <div className='titleconso'><span>List of Suppliers</span></div>
            <div className='buttonadd'><button onClick={()=>addsupplier()}>Add Supplier</button></div>
            <AddEditSupp refreshdata={refreshdata} hideadd={hide} 
                idsupp={idsupp} title={mess}
                    addname={addname} setAddname={setAddname}
                    addades={addades} setAddades={setAddades}
                    addper={addper} setAddper={setAddper}
                    addnumb={addnumb} setAddnumb={setAddnumb}
                    addstate={addstate} setAddstate={setAddstate}
                    ></AddEditSupp>
                <table>
                    {/* cabecera de tabla*/}
                    <thead>
                        <tr>
                            {
                                headtable.map((data,index)=>(
                                    <th key={index}><p>{data}</p></th>
                                ))
                            }
                            <th colSpan="2"><p>Action</p></th>
                        </tr>
                    </thead>
                <tbody>
                    {/* cuerpo de la tabla con la lista de productos*/}
                {
                    supp.map((data)=>(
                        <tr key={data.id} className='datalist'>
                            <td><p>{data.id}</p></td>
                            <td><p>{data.name}</p></td>
                            <td><p>{data.contact_person}</p></td>
                            <td><p>{data.state===1 ? "Active":"Inactive" }</p></td>
                            <td className='center'><button onClick={()=>edit(data.id,data.name,data.address,data.contact_person,data.contact_number,data.state)}>Edit</button></td>
                            <td className='center'><DelSupplier idsupp={data.id} refreshdata={refreshdata} supplier={data.name}/></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        </>
    );
}

export default DetSuppliers;