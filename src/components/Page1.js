import Question from "./Question";

function Page1() {
    return (
        <Question affTexte="Aimez-vous faire le design d'un site ?" suivant="/question-2" champs="noteQuestion1"/>
    );
}

export default Page1;