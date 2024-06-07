import './Formulario.css'
import CampoTexto from '../CampoTexto'



const Formulario = () =>{
    return(
        <section className="formulario">
            <form>
            <h2>Preencha os dados para criar o card do coloborador</h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto label="Cargo" placeholder= "Digite o seu cargo"/>
            <CampoTexto label="Email" placeholder="Digite o endereço de email"/>
            </form>
        </section>
    )
}
export default Formulario