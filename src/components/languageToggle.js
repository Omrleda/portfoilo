import { i18n } from '../data/translations.js';

export function initLanguageToggle(showToast) {
  const langSwitchBtn = document.getElementById('lang-switch-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  const currentLangFlag = document.getElementById('current-lang-flag');
  const currentLangCode = document.getElementById('current-lang-code');
  const langOpts = document.querySelectorAll('.lang-opt');

  let currentLang = 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    const translations = i18n[lang];
    if (!translations) return;

    // Update Flag & Code
    if (lang === 'en') {
      currentLangFlag.textContent = '🇬🇧';
      currentLangCode.textContent = 'EN';
    } else {
      currentLangFlag.textContent = '🇩🇪';
      currentLangCode.textContent = 'DE';
    }

    // Update active dropdown item
    langOpts.forEach(opt => {
      if (opt.dataset.lang === lang) opt.classList.add('active');
      else opt.classList.remove('active');
    });

    // Translate all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const keyPath = el.dataset.i18n.split('.');
      let text = translations;
      for (const k of keyPath) {
        if (text && text[k]) text = text[k];
        else { text = null; break; }
      }
      if (text) el.textContent = text;
    });

    showToast(lang === 'en' ? 'Language switched to English' : 'Sprache auf Deutsch umgestellt');
  }

  langSwitchBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('hidden');
  });

  document.addEventListener('click', () => {
    langDropdown?.classList.add('hidden');
  });

  langOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      const selected = opt.dataset.lang;
      applyLanguage(selected);
      langDropdown.classList.add('hidden');
    });
  });
}
