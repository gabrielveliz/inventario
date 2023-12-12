import LayTop from '../components/UpperMenu';
import LayLeft from '../components/LateralMenu';
import LayBottom from '../components/Footer';
import DetUsers from '../components/DetUsers';


const Users = () => {
    return(
        <>
        <div className="panel">
            <LayTop/>
            <div className='contmain'>
                <LayLeft/>
                <DetUsers/>
            </div>
            <LayBottom/>
        </div>
        </>
    )
}

export default Users;