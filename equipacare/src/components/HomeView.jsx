import Style from '../components/css/FormHospital.module.css'
import { IMaskInput } from "react-imask";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Dados from '../element/InputDados'
import ElementButton from '../element/ElementButton'

function HomeView() {

    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://api.sheetmonkey.io/form/6zuHEu44p7HrWoV9a45wcW', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setFormSubmitted(true);
                navigate('/FormHospital');
            } else {
                console.error('Erro ao enviar o formulário');
            }
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
        }
    }

    return (     
        <div className={Style.formHospital}>
                
            <h1>Preencha com seus dados</h1>
            <form onSubmit={handleSubmit}>
                <Dados text={'Nome'} type={'text'}  name={'Nome'} ></Dados>
                <Dados text={'Email'} type={'text'}  name={'Email'} ></Dados>
                <Dados text={'CEP'} type={'number'}  name={'CEP'} ></Dados>
                <Dados text={'CPF/CNPJ'}  name={'CPF/CNPJ'} IMaskInput={IMaskInput} mask="000.000.000-00 00.000.000/0000-00" ></Dados>
                <Dados text={'Telefone'} type={'number'}  name={'Telefone'} ></Dados>
                <Dados text={'Endereço'} type={'text'}  name={'Endereço'} ></Dados>
                <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
                <ElementButton  text={'Calular'}></ElementButton>
            </form>
        </div>
    ) 
}

export default HomeView;
