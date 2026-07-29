export function initQuoteCalculator(showToast) {
  const dirSelect = document.getElementById('calc-direction');
  const serviceSelect = document.getElementById('calc-service');
  const urgencySelect = document.getElementById('calc-urgency');
  const wordsSlider = document.getElementById('calc-words-slider');
  const wordsInput = document.getElementById('calc-words-input');
  const wordCountVal = document.getElementById('word-count-val');
  const swornCheckbox = document.getElementById('calc-sworn-cert');
  const priceDisplay = document.getElementById('calculated-price');
  const estimatedDateEl = document.getElementById('estimated-date');
  const perWordRateEl = document.getElementById('per-word-rate');
  const bookBtn = document.getElementById('calc-book-btn');

  const baseRates = {
    general: 0.14,
    legal: 0.18,
    literary: 0.16,
    proofreading: 0.07
  };

  const urgencyMultipliers = {
    standard: 1.0,
    express: 1.25,
    rush: 1.50
  };

  function calculate() {
    const service = serviceSelect.value;
    const urgency = urgencySelect.value;
    const words = parseInt(wordsInput.value, 10) || 100;
    const isSworn = swornCheckbox.checked;

    const baseRate = baseRates[service] || 0.14;
    const multiplier = urgencyMultipliers[urgency] || 1.0;

    let total = words * baseRate * multiplier;
    if (isSworn) {
      total += 25; // €25 fixed sworn certification fee
    }

    priceDisplay.textContent = Math.round(total).toLocaleString();
    perWordRateEl.textContent = `€${(baseRate * multiplier).toFixed(2)} / word`;

    // Calculate delivery date estimate
    let days = Math.ceil(words / 1500); // 1500 words/day standard
    if (urgency === 'express') days = Math.ceil(days / 2);
    if (urgency === 'rush') days = 1;
    if (days < 1) days = 1;

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + days + 1); // add business buffer
    estimatedDateEl.textContent = targetDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  wordsSlider?.addEventListener('input', (e) => {
    const val = e.target.value;
    wordsInput.value = val;
    wordCountVal.textContent = `${parseInt(val, 10).toLocaleString()} Words`;
    calculate();
  });

  wordsInput?.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10) || 100;
    wordsSlider.value = Math.min(val, 15000);
    wordCountVal.textContent = `${val.toLocaleString()} Words`;
    calculate();
  });

  serviceSelect?.addEventListener('change', calculate);
  urgencySelect?.addEventListener('change', calculate);
  dirSelect?.addEventListener('change', calculate);
  swornCheckbox?.addEventListener('change', calculate);

  bookBtn?.addEventListener('click', () => {
    // Pre-fill contact form
    const serviceType = serviceSelect.options[serviceSelect.selectedIndex].text;
    const wordCount = wordsInput.value;
    const estPrice = priceDisplay.textContent;

    const contactService = document.getElementById('contact-service');
    const contactWords = document.getElementById('contact-words');
    const contactMessage = document.getElementById('contact-message');

    if (contactService) contactService.value = serviceSelect.value;
    if (contactWords) contactWords.value = `${wordCount} words (Estimated: €${estPrice})`;
    if (contactMessage) {
      contactMessage.value = `Hello Hussein Mohamed Hassan,\n\nI would like to book a translation for approx ${wordCount} words under the category "${serviceType}". Estimated price quoted: €${estPrice}.\n\nDetails / Deadline instructions:\n`;
    }

    // Scroll smoothly to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    showToast('Quote details pre-filled into contact form below!');
  });

  calculate();
}
