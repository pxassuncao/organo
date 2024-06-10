import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'



const Formulario = () =>{
    const times =[
        'FullStack',
        'Front End',
        'Back End',
        'Mobile'
    ]
    return(
        <section className="formulario">
            <form>
            <h2>Preencha os dados para criar o card do programador</h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto label="Cargo" placeholder= "Digite o seu cargo"/>
            <CampoTexto label="Email" placeholder="Digite o endereço de email"/>
            <ListaSuspensa label ="Especialidade" itens = {times}/>
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}
export default Formulario