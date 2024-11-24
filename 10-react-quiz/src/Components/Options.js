function Options({ question, answer, dispatch, nextQuestion }) {
  const hasAnswered = answer !== null;
  return (
    <>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
      {/* {hasAnswered && (
        <button
          className="btn"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )} */}
    </>
  );
}

export default Options;
