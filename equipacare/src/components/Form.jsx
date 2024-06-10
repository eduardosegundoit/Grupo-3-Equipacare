import "./css/Form.module.css";

function Form() {
    return (

        <div id='formSection'>
            <form>
                <div id='column'>
                    <h1 id="title">ESTIMATIVA DO VOLUME DIÁRIO DE MATERIAL</h1>
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
                        <input type="number" placeholder=' Telefone' />
                    </div>
                    <div>
                        <input type="text" placeholder=' Endereço' />
                    </div>
                    <div>
                        <button type='button'>enviar</button>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default Form;