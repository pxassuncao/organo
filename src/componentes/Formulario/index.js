import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'



const Formulario = (props) =>{
    
    const times =[
        'FullStack',
        'Front End',
        'Back End',
        'Mobile'
    ]
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('') 
    const [email, setEmail] = useState('')
    const[time,setTime] = useState('')

    const aoSalvar=(evento)=>{
        evento.preventDefault()
        console.log('Formulário foi submetido =>', nome, cargo, email, time)
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do programador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={varlor =>setNome(valor)}/>
            <CampoTexto obrigatorio={true} label="Cargo" placeholder= "Digite o seu cargo" valor={cargo} aoAlterado={varlor =>setCargo(valor)}/>
            <CampoTexto obrigatorio={true} label="Email" placeholder="Digite o endereço de email" valor={email} aoAlterado={varlor =>setEmail(valor)}/>
            <ListaSuspensa obrigatorio={true} label ="Especialidade" itens = {times}valor={time} aoAlterado={varlor =>setTime(valor)}/>
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}
export default Formulario