import './css/Navbar.css';
import equipacare from '../img/logo-eqpc.png';

function Navbar() {
    return (
        <div id="navbar">
            <img src={equipacare} alt="equipacareLogo" />
        </div>
    )
}

export default Navbar;