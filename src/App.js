
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';


function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
     <Banner/>
     <Formulario aoColaboradorCadastrado={colaborador => aoNovoColoboradorAdicionado(colaborador) }/>
     
    </div>
  );
}

export default App;
