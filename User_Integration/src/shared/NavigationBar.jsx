import {IoHomeOutline} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = ({children, title}) => {

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="navbar">
            <div style={{display: "flex", justifyContent: "center"}}> 
                <div className="navbar-items" style={{paddingLeft: "10px", marginRight: "auto"}}>
                    <div onClick={() => handleNavigate("/")} className="navbar-item">
                        <div className="transition" style={{paddingRight: "25px", paddingTop: "3px"}}>
                            <IoHomeOutline/>
                        </div>
                        <p className='transition'>Dashboard</p>
                    </div>
    
                    <div onClick={() => handleNavigate("/register")} className="navbar-item">
                        <p className="transition">Registro</p>
                    </div>
                </div>
            </div> 
            {children}
        </div>
    );
};

export default NavigationBar;