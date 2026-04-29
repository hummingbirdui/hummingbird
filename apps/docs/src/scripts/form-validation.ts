const formValidationInit = () => {
  const forms = document.querySelectorAll('.needs-validation') as NodeListOf<HTMLFormElement>;

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false,
    );
  });
};

export default formValidationInit;
