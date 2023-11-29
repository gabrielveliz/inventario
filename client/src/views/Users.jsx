import LayTop from '../components/UpperMenu';
import LayLeft from '../components/LateralMenu';
import LayBottom from '../components/Footer';


const Users = () => {
    return(
        <>
        <div className="panel">
            <LayTop/>
            <div className='contmain'>
                <LayLeft/>
                <div>Users</div>
            </div>
            <LayBottom/>
        </div>
        </>
    )
}

export default Users;