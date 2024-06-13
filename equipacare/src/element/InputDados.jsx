import Style from './InputDados.module.css'

function InputDados({text, type, name}){
    return (
        <div className={Style.inputDados} >
            <div className={Style.textLabel}>
                <label>{text}</label>
            </div>
            <div>
                <input type={type} name={name} required ></input>
            </div>
        </div>
    )
}

export default InputDados