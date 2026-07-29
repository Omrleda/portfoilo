import { heroLiveSamples } from '../data/samples.js';

export function initHeroPreview() {
  const domainTabs = document.querySelectorAll('#hero-domain-tabs .domain-tab');
  const dirEnDeBtn = document.getElementById('dir-en-de');
  const dirDeEnBtn = document.getElementById('dir-de-en');
  const sourceLangLabel = document.getElementById('hero-source-lang');
  const targetLangLabel = document.getElementById('hero-target-lang');
  const sourceText = document.getElementById('hero-source-text');
  const targetText = document.getElementById('hero-target-text');
  const nuanceNote = document.getElementById('hero-nuance-note');
  const copyBtn = document.getElementById('copy-source-btn');

  let currentDomain = 'legal';
  let currentDirection = 'en-de'; // 'en-de' or 'de-en'

  function updatePreview() {
    const sample = heroLiveSamples[currentDomain] || heroLiveSamples.legal;
    
    if (currentDirection === 'en-de') {
      sourceLangLabel.textContent = 'English Source';
      targetLangLabel.textContent = 'German Translation';
      sourceText.textContent = sample.en;
      targetText.textContent = sample.de;
    } else {
      sourceLangLabel.textContent = 'German Source';
      targetLangLabel.textContent = 'English Translation';
      sourceText.textContent = sample.de;
      targetText.textContent = sample.en;
    }

    nuanceNote.textContent = `Linguistic Nuance: ${sample.note}`;
  }

  domainTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      domainTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentDomain = tab.dataset.domain;
      updatePreview();
    });
  });

  dirEnDeBtn?.addEventListener('click', () => {
    dirEnDeBtn.classList.add('active');
    dirDeEnBtn?.classList.remove('active');
    currentDirection = 'en-de';
    updatePreview();
  });

  dirDeEnBtn?.addEventListener('click', () => {
    dirDeEnBtn.classList.add('active');
    dirEnDeBtn?.classList.remove('active');
    currentDirection = 'de-en';
    updatePreview();
  });

  copyBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText(sourceText.textContent);
    const origIcon = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fa-solid fa-check text-accent"></i>';
    setTimeout(() => copyBtn.innerHTML = origIcon, 2000);
  });

  updatePreview();
}
