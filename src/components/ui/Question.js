import './Question.css';
const Question = ({index, onConfirm}) => {
    const confirmButtonClicked = () => {
        onConfirm(index);
    }
    return (
        <div className="survey-question">
            <p>Question {index}</p>
            <button onClick={confirmButtonClicked}>Confirm</button>
        </div>
    );
}
export default Question;