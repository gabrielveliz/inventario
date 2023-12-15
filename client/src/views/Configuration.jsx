import LayTop from '../components/UpperMenu';
import LayLeft from '../components/LateralMenu';
import LayBottom from '../components/Footer';
import ConfiPanel from '../components/ConfiPanel'


const Configuration = () => {
    return(
        <>
        <div className="panel">
            <LayTop/>
            <div className='contmain'>
                <LayLeft/>
                <ConfiPanel/>
            </div>
            <LayBottom/>
        </div>
        </>
    )
}

export default Configuration;