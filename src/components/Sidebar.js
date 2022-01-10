import { RiLogoutBoxRLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { links } from './SidebarData';
import TrustbancLogo from '../images/trustbanclogo.png'; 

const Sidebar = () => {
    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <aside className='sidebar'>
            <div className="sidebar-header">
                <img src={TrustbancLogo} alt="trustbanc" />
            </div>

            <ul className="links">
                {links.map(link => {
                const {id, url, text, icon} = link;
                return (
                    <li key={id}>
                    <Link to={url}>
                        {icon}
                        {text}
                    </Link> 
                    </li>
                )
                })}
            </ul>

            <div className='sidebar-logout' onClick={logout}>
                <RiLogoutBoxRLine />
                logout
            </div>
        </aside>
    )
}

export default Sidebar; 