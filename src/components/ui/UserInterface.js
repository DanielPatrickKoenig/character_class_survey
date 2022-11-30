import { useState } from 'react'; 
import Question from './Question';
import './UserInterface.css';
const UserInterface = ({scene}) => {
    const [currentQuestion, setCurrentQuestion] = useState(-1);
    const processAction = (data, type) => {
        scene.autoNavigation.paused = true;
        setCurrentQuestion(data);
        // display question here
    }
    const confirmAnswer = () => {
        scene.autoNavigation.paused = false;
        setCurrentQuestion(-1);
    }
    scene.setActionHandler(processAction);
        return (
        <div>
            {currentQuestion >= 0 ? <Question index={currentQuestion} onConfirm={confirmAnswer} /> : ''}
        </div>
    );
}
export default UserInterface;