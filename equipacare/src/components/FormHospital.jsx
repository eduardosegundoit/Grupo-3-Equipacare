import Dados from '../element/InputDados'
import ElementButton from '../element/ElementButton'
import Style from '../components/css/FormHospital.module.css'

function FormHospital(){
    return (
        <div className={Style.formHospital}>
            <h1>Preencha com os dados da operação do Hospital</h1>
            <form action='' method=''>
                <Dados text={'Número de salas cirúrgicas'} type={'number'}  name={''} ></Dados>
                <Dados text={'Número cirurgias por sala e dia'} type={'text'}  name={''} ></Dados>
                <Dados text={'Processamento de tecidos?'} type={'text'}  name={''} ></Dados>
                <Dados text={'As cirurgias serão realizadas em quais dias da semana?'} type={'text'}  name={''} ></Dados>
                <Dados text={'Qual o intervalo de pico de funcionamento da CME?)'} type={'text'}  name={''} ></Dados>
                <Dados text={'Número leitos UTI'} type={'text'}  name={''} value={''}></Dados>
                <Dados text={'Número leitos Internação, RPA, Observações, HD...'} type={'text'}  name={''}></Dados>
                <Dados text={'Número de Autoclaves '} type={'text'}  name={''}></Dados>
                <Dados text={'Número de Lavadoras Termo'} type={'text'}  name={''}></Dados>
                <ElementButton  text={'Calular'}></ElementButton>
            </form>
        </div>
    )
}

export default FormHospital