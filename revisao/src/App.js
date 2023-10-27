
import './App.css';
import Imagem from "./Imagem/sapinhopet.jpg"
import ProfileImagens from './componentes/ProfileImagens'

function App() {
  return (
    <div className="App">
      <h1>teste</h1>
      <ProfileImagens
      titulo= "Imagem teste ilustrativa"
      imagem={Imagem}
      alt="teste"
      nome= "Sapinho do alasca"
      preco= "50.000"
      descricao="Um sapinho mutio fofo e bonito"/>
     
    </div>
  );
}

export default App;
