import {useState} from "react";

function FaqQuestion({questionData}) {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  function handleClick() {
    setIsQuestionOpen(!isQuestionOpen);
  }
  return (
    <li className="faq__question-content">
      <div className="faq__question">
        <p
          className={`faq__question-text ${
            isQuestionOpen ? "faq__question-text_active" : ""
          }`}
        >
          {questionData.question}
        </p>
        <button
          className={`faq__answer-button ${
            isQuestionOpen ? "faq__answer-button_active" : ""
          }`}
          area-label="The answer to your question"
          type="button"
          onClick={handleClick}
        >
          &#10140;
        </button>
      </div>
      <p
        className={`faq__answer ${isQuestionOpen ? "faq__answer_active" : ""}`}
      >
        {questionData.answer}
      </p>
    </li>
  );
}

export default FaqQuestion;
