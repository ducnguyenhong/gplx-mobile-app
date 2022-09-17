export const getCheckBoxColor = (
  index,
  selectedAnswer,
  correctAnswer,
  isChooseCorrect,
  readOnly,
) => {
  if (isChooseCorrect === false && selectedAnswer === index) {
    return 'red';
  }
  if (isChooseCorrect === false && correctAnswer === index) {
    return 'green';
  }
  if (
    (correctAnswer && correctAnswer === index && readOnly) ||
    (isChooseCorrect && selectedAnswer === index)
  ) {
    return 'green';
  }
  return index === selectedAnswer ? 'orange' : 'gray';
};

export const getCheckBoxIcon = (
  index,
  selectedAnswer,
  correctAnswer,
  isChooseCorrect,
  readOnly,
) => {
  if (isChooseCorrect === true && selectedAnswer === index) {
    return 'check-circle';
  }
  if (isChooseCorrect === false && selectedAnswer === index) {
    return 'close-circle';
  }
  if (isChooseCorrect === false && correctAnswer === index) {
    return 'check-circle';
  }
  if (
    (correctAnswer && correctAnswer === index && readOnly) ||
    index === selectedAnswer
  ) {
    return 'check-circle';
  }

  return 'checkbox-blank-circle-outline';
};

export const getTextAnswerStyle = (
  normal,
  correct,
  wrong,
  correctAnswer,
  index,
  readOnly,
  isChooseCorrect,
  checkedAnswer,
  selectedAnswer,
) => {
  if (
    (correctAnswer && correctAnswer === index && readOnly) ||
    (correctAnswer && isChooseCorrect && selectedAnswer === index) ||
    (!isChooseCorrect && correctAnswer === index && checkedAnswer)
  ) {
    return correct;
  }
  if (!isChooseCorrect && correctAnswer === index && checkedAnswer) {
    return wrong;
  }
  return normal;
};
