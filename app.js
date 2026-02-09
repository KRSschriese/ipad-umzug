(() => {
  const body = document.body;
  const steps = Array.from(document.querySelectorAll('.step'));
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  const modeButtons = document.querySelectorAll('[data-mode]');
  const total = steps.length;
  let current = 0;

  function updateProgress() {
    if (body.classList.contains('mode-quick')) {
      progressFill.style.width = '100%';
      progressText.textContent = 'Alle Schritte sichtbar';
      return;
    }
    const percent = ((current + 1) / total) * 100;
    progressFill.style.width = `${percent}%`;
    progressText.textContent = `Schritt ${current + 1} von ${total}`;
  }

  function showStep(index) {
    current = Math.min(Math.max(index, 0), total - 1);
    steps.forEach((step, i) => {
      step.classList.toggle('is-current', i === current);
    });
    updateProgress();
    const currentStep = steps[current];
    if (body.classList.contains('mode-guided') && currentStep) {
      currentStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${currentStep.id}`);
    }
  }

  function setMode(mode) {
    body.classList.toggle('mode-guided', mode === 'guided');
    body.classList.toggle('mode-quick', mode === 'quick');
    modeButtons.forEach((btn) => {
      btn.classList.toggle('primary', btn.dataset.mode === mode);
      btn.classList.toggle('ghost', btn.dataset.mode !== mode);
    });
    updateProgress();
  }

  steps.forEach((step) => {
    step.querySelectorAll('[data-next]').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (current === total - 1) {
          showStep(0);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          showStep(current + 1);
        }
      });
    });
    step.querySelectorAll('[data-prev]').forEach((btn) => {
      btn.addEventListener('click', () => showStep(current - 1));
    });
  });

  modeButtons.forEach((btn) => {
    btn.addEventListener('click', () => setMode(btn.dataset.mode));
  });

  const hash = window.location.hash.replace('#', '');
  const indexFromHash = steps.findIndex((step) => step.id === hash);
  if (indexFromHash >= 0) {
    showStep(indexFromHash);
  } else {
    showStep(0);
  }

  setMode('guided');
})();
