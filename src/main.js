import { initHeroPreview } from './components/hero.js';
import { initQuoteCalculator } from './components/quoteCalculator.js';
import { initPortfolioViewer } from './components/portfolioViewer.js';
import { initLanguageToggle } from './components/languageToggle.js';
import { initModalManager } from './components/modalManager.js';
import { testimonialsData } from './data/testimonials.js';
import { faqData } from './data/faq.js';

// Toast Notification Helper
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-accent"></i> <span>${message}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Render Testimonials Grid
function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;

  grid.innerHTML = testimonialsData.map(t => `
    <div class="testimonial-card glass-panel">
      <div class="testimonial-stars">
        ${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}
      </div>
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="author-info">
        <div class="author-avatar">${t.initials}</div>
        <div class="author-details">
          <span class="author-name">${t.author}</span>
          <span class="author-role">${t.role}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Render FAQ Accordion
function renderFAQ() {
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  container.innerHTML = faqData.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'active' : ''}">
      <button class="faq-question">
        <span>${faq.question}</span>
        <i class="fa-solid fa-chevron-down faq-icon"></i>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('active');
    });
  });
}

// About Me Tab Switcher
function initAboutTabs() {
  const tabBtns = document.querySelectorAll('.about-tab-btn');
  const tabContents = document.querySelectorAll('.about-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(`tab-${target}`)?.classList.add('active');
    });
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  toggleBtn?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('active');
    });
  });
}

// Theme Toggle (Dark / Light Mode)
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  themeBtn?.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');

    if (isLight) {
      themeIcon.className = 'fa-solid fa-sun';
      showToast('Switched to Light Theme');
    } else {
      themeIcon.className = 'fa-solid fa-moon';
      showToast('Switched to Dark Theme');
    }
  });
}

// Contact Form Handler & File Drag Drop
function initContactForm() {
  const form = document.getElementById('main-contact-form');
  const dropZone = document.getElementById('file-drop-zone');
  const fileInput = document.getElementById('contact-file');
  const uploadText = document.getElementById('file-upload-text');

  fileInput?.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      uploadText.textContent = `Attached File: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
    }
  });

  dropZone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = 'var(--accent-gold)';
  });

  dropZone?.addEventListener('dragleave', () => {
    dropZone.style.borderColor = 'var(--border-color)';
  });

  dropZone?.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = 'var(--border-color)';
    if (e.dataTransfer.files.length > 0) {
      fileInput.files = e.dataTransfer.files;
      const file = e.dataTransfer.files[0];
      uploadText.textContent = `Attached File: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
    }
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    
    // Simulate submission success
    showToast(`Thank you ${name}! Your inquiry has been sent to Hussein Mohamed Hassan.`);
    form.reset();
    if (uploadText) {
      uploadText.textContent = 'Drag & drop sample document (PDF, DOCX, TXT) or click to browse';
    }
  });
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  const { openModal } = initModalManager();

  initHeroPreview();
  initQuoteCalculator(showToast);
  initPortfolioViewer(openModal);
  initLanguageToggle(showToast);
  renderTestimonials();
  renderFAQ();
  initAboutTabs();
  initMobileMenu();
  initThemeToggle();
  initContactForm();
});
