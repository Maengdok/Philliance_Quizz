import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import ContextGlobal from '../common/ContextGlobal';

function Home() {
    const [email, setEmail] = useState('maengdok@contact.fr');
    const history = useHistory();
    const context = useContext(ContextGlobal);

    const handleClick = () => {
        context.email = email;
        history.push('/question-1');
    };

    return (
        <div className="App">
            <header className="App-header">
                <i className="fas fa-balance-scale-right" style={{fontSize:100 + 'px', marginBottom:50 + 'px'}}></i>
                <h1>Quel type de développeur(se) êtes-vous ?</h1>
                <div className="form-group">
                    <label>Entrez votre email : </label>
                    <input type="email" value={email} className="form-control text-center" onChange={e => setEmail(e.target.value)}/>
                </div>
                <button type="button" className="btn btn-success" onClick={handleClick}>Commencer le Quizz</button>
            </header>
        </div>
    );
}

export default Home;