import { useState,useEffect} from 'react';
import apireq from '../utils/api';
import AddProduct from '../components/AddProduct';
import DeleteProduct from '../components/DelProduct';
import '../styles/DetProduct.css';

const DetProduct = () =>{
    //variable de estado con un arreglo vacio para guardar la consulta que se realizara con axios
    const[idprod,setIdprod] = useState("");
    const[product,SetProduct] = useState([]);
    const[addname,setAddname]=useState("");
    const[adddes,setAdddes]=useState("");
    const[addprice,setAddprice]=useState("");
    const[addsupp,setAddsupp]=useState("");
    const[addstate,setAddstate]=useState("");
    const[mess,setMess]=useState("");
    

    function refreshdata(){
        apireq.getProducts()
        .then(response=>{
            if(response.data.success){
                SetProduct(response.data.items);
            }else{
                console.error('Error al obtener datos del servidor: ',response.data.message);
            }
        })
    } 

    useEffect(()=>{
        //trayendo datos al cargar
        refreshdata();
    },[product])
    
//funciones que muestran y ocultan el container flotante que permite crear nuevos productos
    function show(){
        document.getElementById('contaddproduct').style.display = "flex";
    }
    function hide(){
        document.getElementById('contaddproduct').style.display = "none";
        setIdprod(""),setAddname(""),setAdddes(""),setAddprice(""),setAddstate(""),setAddsupp("");

    }

    function addproduct(){
        show();
        setMess("Add New Product");
    }
    function edit(id,name, desc,price,sup,state){
        setIdprod(id);
        setAddname(name);
        setAdddes(desc);
        setAddprice(price);
        setAddsupp(sup)
        setAddstate(state);
        setMess("Edit a Product");
        show();
    }
    //titulos de las tablas, no esta incluida la de editar y eliminar en este caso "Action"
    let headtable = ["#","Name","Price","Supplier","State"];

    return(
        <>
        <div className='consproduct'>
            <div className='titleconso'><span>List of Products</span></div>
            <div className='buttonadd'><button onClick={()=>addproduct()}>Add Product</button></div>
            <AddProduct refreshdata={refreshdata} hideadd={hide} 
            title={mess}
                    addname={addname} setAddname={setAddname}
                    adddes={adddes} setAdddes={setAdddes}
                    addprice={addprice} setAddprice={setAddprice}
                    addsupp={addsupp} setAddsupp={setAddsupp}
                    addstate={addstate} setAddstate={setAddstate}
                    ></AddProduct>
            
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
                    product.map((data)=>(
                        <tr key={data.id} className='datalist'>
                            <td><p>{data.id}</p></td>
                            <td><p>{data.name}</p></td>
                            <td><p>${data.price}</p></td>
                            <td><p>{data.name_supplier}</p></td>
                            <td><p>{data.state===1 ? "Active":"Inactive" }</p></td>
                            <td className='center'><button onClick={()=>edit(data.id,data.name,data.des,data.price,data.id_sup,data.state)}>Edit</button></td>
                            <td className='center'><DeleteProduct idprod={data.id} refreshdata={refreshdata}></DeleteProduct></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        </>
    );
}

export default DetProduct;