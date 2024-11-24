function NextButton({ dispatch, answer }) {
  const hasAsnwered = answer !== null;

  if (answer === null) return null;
  return (
    <>
      {hasAsnwered && (
        <button
          className="btn"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}
    </>
  );
}

export default NextButton;
