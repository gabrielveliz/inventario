
import '../styles/ConfiPanel.css';

const ConfiPanel = () =>{
    return(
        <>
        <div className='conslist'>
            <div className='titleconso'><span>System Information</span></div>
            <div>
                <div className='titleinput'><span>System Name</span></div>
                <div className='inputconf'><input type="text" /></div>
                <div className='titleinput'><span>Short Name</span></div>
                <div className='inputconf'><input type="text" /></div>
                <div className='titleinput'><span>System Logo</span></div>
                <div className='inputconf'><input type="file" accept="image/*"/></div>
                <div className='titleinput'><span>Login Banner</span></div>
                <div className='inputconf'><input type="file" accept="image/*"/></div>
                <div className='titleinput'><button>Safe</button></div>
            </div>
        </div>

        </>
    )
}

export default ConfiPanel;