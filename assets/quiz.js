// Quiz widget: reusable across lessons
// Usage: Add class="quiz" to a container, with data-answer="N" (0-indexed)
// Each .quiz-option gets a click handler that reveals correct/incorrect state

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz').forEach(quiz => {
    const correctIndex = parseInt(quiz.dataset.answer, 10);
    const options = quiz.querySelectorAll('.quiz-option');
    const feedback = quiz.querySelector('.quiz-feedback');
    let answered = false;

    options.forEach((option, i) => {
      option.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        if (i === correctIndex) {
          option.classList.add('correct');
          if (feedback) {
            feedback.textContent = '✓ Correct!';
            feedback.style.display = 'block';
            feedback.style.background = '#dafbe1';
          }
        } else {
          option.classList.add('incorrect');
          options[correctIndex].classList.add('correct');
          if (feedback) {
            feedback.textContent = '✗ Not quite. See the highlighted answer.';
            feedback.style.display = 'block';
            feedback.style.background = '#ffebe9';
          }
        }
      });
    });
  });
});
