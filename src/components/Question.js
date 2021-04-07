import Icon from './Icon/Icon';
import {useHistory} from 'react-router-dom';
import { useContext } from 'react';
import ContextGlobal from '../common/ContextGlobal';

function Question(props) {
    const history = useHistory();
    const context = useContext(ContextGlobal)

    const handleClick = (note) => () => {
        context[props.champs] = note; 
        history.push(props.suivant);
    };

    const buttons = [];

    for (let i = 0; i < 5; i++) {
        buttons.push(<button type="button" className="btn btn-light mx-2" onClick={handleClick(i + 1)}>{i + 1}</button>)
    }

    return (
        <div className="App">
            <header className="App-header">
            <Icon />
            <h4>{props.affTexte}</h4>

            <div className="Ranking">
                {buttons}
            </div>
            </header>
        </div>
    );
}

export default Question;