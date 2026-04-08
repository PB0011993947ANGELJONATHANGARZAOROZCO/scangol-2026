// Lógica Trivia
window.triviaIndex = 0;
window.triviaScore = 0;
window.triviaQuestions = [];

window.loadTriviaQuestion = function() {
  const triviaBox = document.getElementById('triviaBox');
  const triviaQuestion = document.getElementById('triviaQuestion');
  const triviaResult = document.getElementById('triviaResult');
  
  // Fin del juego: Mostrar Puntuación
  if (window.triviaIndex >= window.triviaQuestions.length) { 
    triviaQuestion.innerHTML = `¡Juego Terminado!<br><span style="font-size:0.8em; color:#ccc">Tu Puntuación Final</span>`;
    const optionsDiv = document.getElementById('triviaOptions');
    optionsDiv.innerHTML = `
      <div style="width:100%; text-align:center;">
          <h1 style="font-size:3rem; margin:10px 0; background:linear-gradient(135deg, #00c6ff, #0072ff); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">${window.triviaScore} / ${window.triviaQuestions.length}</h1>
          <button onclick="window.closeTriviaOrVideo()" class="action-btn" style="margin:20px auto; display:inline-block;">Cerrar</button>
      </div>
    `;
    triviaResult.textContent = '';
    return; 
  }

  const questionData = window.triviaQuestions[window.triviaIndex];
  triviaQuestion.textContent = questionData.question;
  const optionsDiv = document.getElementById('triviaOptions');
  optionsDiv.innerHTML = '';
  triviaResult.textContent = '';
  triviaResult.className = '';
  questionData.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => window.checkAnswer(option, questionData.answer);
    optionsDiv.appendChild(btn);
  });
};

window.checkAnswer = function(selected, correct) {
  const triviaResult = document.getElementById('triviaResult');
  const btns = document.querySelectorAll('#triviaOptions button');
  btns.forEach(btn => btn.disabled = true); // Evitar doble click

  if (selected === correct) {
    triviaResult.textContent = '✅ ¡Correcto!';
    triviaResult.className = 'correct';
    window.triviaScore++;
  } else {
    triviaResult.textContent = `❌ Incorrecto. La respuesta era: ${correct}`;
    triviaResult.className = 'incorrect';
  }

  window.triviaIndex++;
  setTimeout(window.loadTriviaQuestion, 2000);
};

window.showTrivia = function() {
  if (window.hideAll) window.hideAll();
  window.triviaIndex = 0;
  window.triviaScore = 0;
  window.triviaQuestions = [...triviaData].sort(() => 0.5 - Math.random()).slice(0,5);
  window.loadTriviaQuestion();
  const triviaBox = document.getElementById('triviaBox');
  triviaBox.style.display = 'block';
};
