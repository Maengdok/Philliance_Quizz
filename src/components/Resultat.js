import { useHistory } from "react-router";
import { useContext } from 'react';
import ContextGlobal from "../common/ContextGlobal";

function Resultat() {
  const history = useHistory();
  const context = useContext(ContextGlobal);

  const handleClick = () => {
    history.push('/');
  };

  let email = context.email;
  let typeDeveloppement = 'BackEnd';

  const moyenne = (context.noteQuestion1 + context.noteQuestion2 + context.noteQuestion3) / 3.0;
  if (moyenne > 2.5) {
    typeDeveloppement = 'FrontEnd';
  }

  return (
    <div className="App">
      <header className="App-header">
        <i className="fas fa-laptop-code" style={{fontSize:100 + 'px', marginBottom:50 + 'px'}}></i>
        <div className="mt-5">
          <h1>Résultat</h1>
          <p>
            Votre type de développement est :
          </p>
          <div className="alert alert-success">
            {email}
          </div>
          <div className="alert alert-success">
            {typeDeveloppement}
          </div>
          <button className="btn btn-primary" onClick={handleClick}><i className="fas fa-arrow-alt-circle-left"></i> Retour</button>
        </div>
      </header>
    </div>
  );
}

export default Resultat;