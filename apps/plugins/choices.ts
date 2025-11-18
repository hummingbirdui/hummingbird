import Choices from 'choices.js';

const choicesInit = () => {
  const hbChoices = document.querySelectorAll('[data-choices="data-choices"]');
  if (hbChoices) {
    hbChoices.forEach((choice) => new Choices(choice, { removeItemButton: true }));
  }
};

export default choicesInit;
