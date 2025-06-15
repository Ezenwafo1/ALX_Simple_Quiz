function checkAnswer() {
    const correctAnswer = "4";

    const selectedOption = document.querySelector ('input[name="quiz"]checked:');

    if (!selectedOption){
        document.getElementById('feedback').textContent='please select an option before submitting'
        return;
     }

     const userAnswer = selectedOption.value;

     if (userAnswer === correctAnswer){
        document.getElementById('feedback').textContent='correct answer. well done'
        return;
     }
     else{
        document.getElementById('feedback').textContent='Incorrect. try again';

     }
     }

     const submitButton = document.getElementById('submit-answer');
     submitButton.addEventListener('click', checkAnswer);

