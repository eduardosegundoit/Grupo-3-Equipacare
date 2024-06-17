import './css/HomeView.css';
import { IMaskInput } from "react-imask";
import { useNavigate } from 'react-router-dom'

function HomeView() {
        const navigate = useNavigate();
      
        const handleClick = () => {
          navigate('/Form');
        }; 

    return (     
        <div id = 'formSection' >
            <form>
                <div id='column'>
                    <h1>Preencha com seus dados</h1>
                    <div>
                        <input type="text" placeholder=' Nome' />
                    </div>
                    <div>
                        <input type="email" placeholder=' Email' />
                    </div>
                    <div>
                        <input type="number" placeholder=' CEP' />
                    </div>
                    <div>
                        <IMaskInput mask="000.000.000-00 00.000.000/0000-00" placeholder=" CPF/CNPJ" />
                    </div>
                    <div>
                        <input type="number" placeholder=' Telefone' />
                    </div>
                    <div>
                        <input type="text" placeholder=' Endereço' />
                    </div>
                    <div>
                        <button onClick={handleClick} type='button'>enviar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HomeView;