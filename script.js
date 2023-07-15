document.addEventListener('DOMContentLoaded', () => {
    const containerMain = document.querySelector('.container.main');
    const containerThankYou = document.querySelector('.container.thank-you');

    containerThankYou.style.display = 'none';

    const submitButton = document.querySelector('button');

    submitButton.addEventListener('click', () => {
        containerMain.style.display = 'none';
        containerThankYou.style.display = 'flex';
    });

    const scores = document.querySelectorAll('.score');
    const youSelected = document.querySelector('.you-selected');

    scores.forEach(score => {
    score.addEventListener('click', () => {
      const selectedScore = score.textContent;
      youSelected.textContent = `You selected ${selectedScore} out of 5`;
    });
  });

  });
  