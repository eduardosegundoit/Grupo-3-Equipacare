import logoEqpc from '../img/logo-eqpc.png';
import greatPlaceWork from '../img/greatPlaceWork.png'
import seloQualificacao from '../img/seloQualificacao.png'
import './css/Footer.css';

function Footer() {
    return (
        <footer>
            <div id='contact'>
                <div>
                    <img src={logoEqpc} alt="logoEqpc" />
                </div>
                <div id="socialMedia">
                    <a target='blanck' href='https://web.facebook.com/Equipacare/?locale=pt_BR&_rdc=1&_rdr'> <i className="fa-brands fa-facebook" style={{ color: '#a7b927' }}></i></a>
                    <a target='blanck' href='https://www.instagram.com/equipacare/?hl=pt-br'><i className="fa-brands fa-instagram" style={{ color: '#a7b927' }}></i></a>
                    <a target='blanck' href='https://www.linkedin.com/company/equipacare/?originalSubdomain=br'><i className="fa-brands fa-linkedin" style={{ color: '#a7b927' }}></i></a>
                    <a target='blanck' href='https://www.youtube.com/c/Equipacare'><i className="fa-brands fa-youtube" style={{ color: '#a7b927' }}></i></a>
                </div>
                <a>contato@equipacare.com.br</a>
                <a>+55 (24) 3348 – 7157</a>
                <a>+55 (24) 98119 – 1448</a>

            </div>
        </footer>
    )
}

export default Footer;
