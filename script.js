// Lógica interactiva para la Landing Page del Lab 12
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Alternar menú móvil
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 2. Evaluación interactiva de la autoevaluación
  const submitQuizBtn = document.getElementById('submit-quiz-btn');
  const quizFeedback = document.getElementById('quiz-feedback');

  if (submitQuizBtn) {
    submitQuizBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const q1 = document.querySelector('input[name="q1"]:checked');
      const q2 = document.querySelector('input[name="q2"]:checked');
      const q3 = document.querySelector('input[name="q3"]:checked');

      if (!q1 || !q2 || !q3) {
        alert('Por favor responde las 3 preguntas situacionales antes de evaluar.');
        return;
      }

      let score = 0;
      if (q1.value === 'B') score++;
      if (q2.value === 'B') score++;
      if (q3.value === 'C') score++;

      quizFeedback.classList.remove('hidden');
      if (score === 3) {
        quizFeedback.className = "mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm";
        quizFeedback.innerHTML = `<strong>¡Excelente! (3/3 aciertos)</strong> Demostraste un criterio preventivo sólido frente a situaciones de riesgo digital.`;
      } else {
        quizFeedback.className = "mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm";
        quizFeedback.innerHTML = `<strong>Obtuviste ${score}/3 aciertos.</strong> Te recomendamos revisar los puntos de la Guía Visual para reforzar la verificación de enlaces y permisos.`;
      }
    });
  }
});
