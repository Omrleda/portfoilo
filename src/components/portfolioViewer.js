import { samplesData } from '../data/samples.js';

export function initPortfolioViewer(openModal) {
  const portfolioGrid = document.getElementById('portfolio-grid');
  const filterBtns = document.querySelectorAll('#portfolio-filters .filter-btn');

  function renderSamples(filter = 'all') {
    if (!portfolioGrid) return;
    
    const filtered = filter === 'all' 
      ? samplesData 
      : samplesData.filter(s => s.category === filter);

    portfolioGrid.innerHTML = filtered.map(sample => {
      let highlightedSource = sample.sourceText;
      let highlightedTarget = sample.targetText;

      sample.highlights.forEach(h => {
        highlightedSource = highlightedSource.replace(
          h.term,
          `<span class="highlight-term" title="Term Note: ${h.note}">${h.term}</span>`
        );
      });

      return `
        <div class="sample-card glass-panel" data-sample-id="${sample.id}">
          <div>
            <div class="sample-header">
              <span class="sample-category"><i class="fa-solid fa-folder-open"></i> ${sample.categoryLabel}</span>
              <span class="badge-iso text-xs">${sample.direction}</span>
            </div>
            <h3 class="sample-title">${sample.title}</h3>
            
            <div class="sample-comparison-box">
              <div class="sample-col">
                <span class="sample-col-lang">SOURCE TEXT</span>
                <p class="sample-text">${highlightedSource}</p>
              </div>
              <div class="sample-col">
                <span class="sample-col-lang">TRANSLATION (GERMAN/ENGLISH)</span>
                <p class="sample-text">${highlightedTarget}</p>
              </div>
            </div>
          </div>

          <div class="sample-footer">
            <span class="sample-client"><i class="fa-solid fa-building"></i> ${sample.client}</span>
            <button class="btn-view-sample" data-sample-id="${sample.id}">
              <i class="fa-solid fa-magnifying-glass-plus"></i> View Full Snippet
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listener to sample buttons
    document.querySelectorAll('.btn-view-sample').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.sampleId;
        const item = samplesData.find(s => s.id === id);
        if (item) {
          openSampleModal(item);
        }
      });
    });
  }

  function openSampleModal(item) {
    const contentHtml = `
      <div class="modal-sample-detail">
        <div class="modal-header-tag" style="color: var(--accent-gold); font-weight: 700; font-size: 0.85rem; margin-bottom: 0.5rem;">
          <i class="fa-solid fa-file-contract"></i> EXCERPT CASE STUDY
        </div>
        <h2 style="font-family: var(--font-heading); margin-bottom: 0.5rem;">${item.title}</h2>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">
          Client: <strong>${item.client}</strong> | Direction: <strong>${item.direction}</strong>
        </p>

        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
          <h4 style="color: var(--accent-gold); margin-bottom: 0.5rem;"><i class="fa-solid fa-quote-left"></i> Source Original</h4>
          <p style="margin-bottom: 1.25rem; font-style: italic; line-height: 1.6;">${item.sourceText}</p>
          
          <h4 style="color: var(--accent-teal); margin-bottom: 0.5rem;"><i class="fa-solid fa-check-double"></i> Expert Translation</h4>
          <p style="line-height: 1.6;">${item.targetText}</p>
        </div>

        <h4 style="margin-bottom: 0.75rem;"><i class="fa-solid fa-lightbulb text-gold"></i> Key Terminology & Translation Rationales</h4>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
          ${item.highlights.map(h => `
            <div style="background: var(--bg-tertiary); border-left: 3px solid var(--accent-gold); padding: 0.75rem 1rem; border-radius: 4px; font-size: 0.875rem;">
              <strong>"${h.term}"</strong> ➔ <span style="color: var(--accent-teal); font-weight: 600;">"${h.translation}"</span>
              <p style="color: var(--text-secondary); margin-top: 0.25rem;">${h.note}</p>
            </div>
          `).join('')}
        </div>

        <div style="display: flex; gap: 1rem; justify-content: flex-end;">
          <a href="#contact" class="btn btn-primary modal-close-trigger" style="text-decoration: none;">Request Similar Translation</a>
        </div>
      </div>
    `;
    openModal(contentHtml);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSamples(btn.dataset.filter);
    });
  });

  renderSamples('all');
}
