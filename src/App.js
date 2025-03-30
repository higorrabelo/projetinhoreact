
import { useState } from 'react';
import './App.css';
import { Container } from './components/Container';
import { Content } from './components/Content';
import { FormCliente } from './components/FormCliente';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Sidebar } from './components/Sidebar';
import { Contato } from './components/Contato';
import { QuemSomos } from './components/QuemSomos';

function App() {

const [ pagina,setPagina ] = useState('Home');

function exibePagina(){
  switch(pagina){
    case 'Home':
      return <Home  />
    case 'FormCliente':
      return <FormCliente pagina={pagina} setPagina={setPagina} />
    case 'Contato':
      return <Contato />
    case 'QuemSomos':
      return <QuemSomos />
    default :
      return ""
  }
}

  return (
    <div className="App">
          <Menu pagina={pagina} setPagina={setPagina}/>
          <Container>
          <Content>
            {exibePagina()}
          </Content>
          <Sidebar />
          </Container>
    </div>
  );
}

export default App;
