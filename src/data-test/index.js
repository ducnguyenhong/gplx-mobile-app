export const questionListTakeExam = Array.from(Array(20).keys()).map(item => ({
  id: item,
  title: `CÂU ${item}`,
  question: `Đây là câu hỏi số ${item}`,
  answers: [
    {
      content: 'Đáp án A',
      value: 0,
    },
    {
      content: 'Đáp án B',
      value: 1,
    },
    {
      content: 'Đáp án C',
      value: 2,
    },
    {
      content: 'Đáp án D',
      value: 3,
    },
  ],
  correctAnswer: 2, // Câu C
  explainAnswer: 'Giải thích đáp án này...',
}));

export const questionListStudy = Array.from(Array(20).keys()).map(item => ({
  id: item,
  title: `CÂU ${item}`,
  question: `Đây là câu hỏi số ${item}`,
  answers: [
    {
      content: 'Đáp án A',
      value: 1,
    },
    {
      content: 'Đáp án B',
      value: 2,
    },
    {
      content: 'Đáp án C',
      value: 3,
    },
    {
      content: 'Đáp án D',
      value: 4,
    },
  ],
  correctAnswer: Math.floor(Math.random() * (4 - 1 + 1) + 1),
  explainAnswer: 'Giải thích đáp án này...',
}));
