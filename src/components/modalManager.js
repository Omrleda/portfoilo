export function initModalManager() {
  const globalModal = document.getElementById('global-modal');
  const modalInnerBody = document.getElementById('modal-inner-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const downloadCvBtn = document.getElementById('download-cv-btn');
  const viewCertBtn = document.getElementById('view-cert-modal-btn');
  const openCertModalBtn = document.getElementById('btn-open-cert-modal');
  const certThumb = document.getElementById('cert-img-thumb');

  function openModal(htmlContent) {
    if (!globalModal || !modalInnerBody) return;
    modalInnerBody.innerHTML = htmlContent;
    globalModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    modalInnerBody.querySelectorAll('.modal-close-trigger').forEach(btn => {
      btn.addEventListener('click', closeModal);
    });
  }

  function closeModal() {
    if (!globalModal) return;
    globalModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  modalCloseBtn?.addEventListener('click', closeModal);
  globalModal?.addEventListener('click', (e) => {
    if (e.target === globalModal) closeModal();
  });

  // Certificate Modal Display
  function openCertModal() {
    const certHtml = `
      <div style="text-align: center;">
        <div style="color: var(--accent-gold); font-weight: 700; text-transform: uppercase; font-size: 0.85rem; margin-bottom: 0.5rem;">
          OFFICIAL LANGUAGE CERTIFICATE
        </div>
        <h2 style="font-family: var(--font-heading); margin-bottom: 0.5rem;">Deutschen Sprachkurse (B2.2)</h2>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">
          Hussein Mohamed Hassan | <strong>Lernquader Nachhilfe Kairo</strong> | Grade: <strong>Sehr Gut</strong>
        </p>

        <div style="max-height: 70vh; overflow-y: auto; border-radius: 12px; border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
          <img src="./assets/certificate.jpg" alt="German Certificate B2.2 - Hussein Mohamed Hassan" style="width: 100%; display: block;" />
        </div>

        <div style="display: flex; gap: 1rem; justify-content: center;">
          <button class="btn btn-outline modal-close-trigger">Close Document</button>
        </div>
      </div>
    `;
    openModal(certHtml);
  }

  viewCertBtn?.addEventListener('click', openCertModal);
  openCertModalBtn?.addEventListener('click', openCertModal);
  certThumb?.addEventListener('click', openCertModal);

  // Download CV Modal Handler
  downloadCvBtn?.addEventListener('click', () => {
    const cvHtml = `
      <div class="cv-preview-modal text-left">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid var(--accent-gold); padding-bottom: 1rem; margin-bottom: 1.5rem;">
          <div>
            <h2 style="font-family: var(--font-heading); font-size: 1.75rem;">Hussein Mohamed Hassan</h2>
            <p style="color: var(--accent-gold); font-weight: 600;">English & German Translator | Al-Alsun Cairo University</p>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Cairo, Egypt | hussein.m.hassan@alsun.cu.edu.eg</p>
          </div>
          <a href="#" id="trigger-pdf-download" class="btn btn-primary btn-sm">
            <i class="fa-solid fa-download"></i> Save CV PDF
          </a>
        </div>

        <h3 style="color: var(--accent-teal); margin-bottom: 0.5rem;"><i class="fa-solid fa-graduation-cap"></i> Education</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.6; font-size: 0.95rem;">
          <li><strong>Faculty of Al-Alsun, Cairo University (2022–Present)</strong> – 4th Year Senior, English Department</li>
          <li>Focus on Translation Theory, Simultaneous Interpretation, Contrastive Linguistics & Literature.</li>
        </ul>

        <h3 style="color: var(--accent-teal); margin-bottom: 0.5rem;"><i class="fa-solid fa-newspaper"></i> Professional Experience & Training</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.6; font-size: 0.95rem;">
          <li><strong>Middle East News Agency (MENA)</strong> – News & Political Translation Trainee</li>
          <li>Translated daily international press wires, economic reports, and diplomatic statements under tight newsroom deadlines.</li>
        </ul>

        <h3 style="color: var(--accent-teal); margin-bottom: 0.5rem;"><i class="fa-solid fa-certificate"></i> Certifications</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.6; font-size: 0.95rem;">
          <li><strong>German B2.2 Certificate (Sehr Gut)</strong> – Lernquader Nachhilfe Kairo (Dec 2025)</li>
        </ul>

        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color); font-size: 0.85rem;">
          <i class="fa-solid fa-user-check text-accent"></i> <strong>Verification:</strong> Certified academic record at Cairo University & Middle East News Agency.
        </div>
      </div>
    `;
    openModal(cvHtml);

    document.getElementById('trigger-pdf-download')?.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Downloading Hussein_Mohamed_Hassan_CV.pdf (Simulated Download)');
    });
  });

  // Service Details Modal Triggers
  document.querySelectorAll('.service-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modalType = e.currentTarget.dataset.modal;
      let serviceTitle = "Specialized Translation Service";
      let serviceDesc = "High precision, Al-Alsun & MENA newsroom standard translation.";
      
      if (modalType === 'journalistic') {
        serviceTitle = "Media & Press Wire Translation";
        serviceDesc = "Fast, accurate news bulletin translation learned through intensive press training at the Middle East News Agency (MENA). Direct translation between English, German, and Arabic.";
      } else if (modalType === 'literary') {
        serviceTitle = "Literary & Academic Translation";
        serviceDesc = "Academic research papers, prose, cultural essays, and university publications translated with deep linguistic rigor from the Faculty of Al-Alsun.";
      } else if (modalType === 'legal') {
        serviceTitle = "Legal & Commercial Translation";
        serviceDesc = "Commercial contracts, business proposals, official certificates, and corporate correspondence with verified terminology.";
      } else if (modalType === 'localization') {
        serviceTitle = "Localization & Native Proofreading";
        serviceDesc = "Comprehensive proofreading and web copy localization ensuring natural fluency in Arabic, English, and German.";
      }

      const content = `
        <div>
          <div style="color: var(--accent-gold); font-weight: 700; text-transform: uppercase; font-size: 0.85rem; margin-bottom: 0.5rem;">
            SERVICE OVERVIEW
          </div>
          <h2 style="font-family: var(--font-heading); margin-bottom: 1rem;">${serviceTitle}</h2>
          <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem; font-size: 1.05rem;">${serviceDesc}</p>
          
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: 12px; margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.75rem;"><i class="fa-solid fa-list-check text-accent"></i> Standard Guarantees:</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem;">
              <li><i class="fa-solid fa-check text-accent"></i> 100% human translation with academic proofreading</li>
              <li><i class="fa-solid fa-check text-accent"></i> Fast turnaround matching newsroom speeds</li>
              <li><i class="fa-solid fa-check text-accent"></i> High terminology accuracy in EN, DE, and AR</li>
            </ul>
          </div>

          <div style="display: flex; gap: 1rem; justify-content: flex-end;">
            <a href="#calculator" class="btn btn-primary modal-close-trigger">Calculate Rate & Order</a>
          </div>
        </div>
      `;
      openModal(content);
    });
  });

  return { openModal, closeModal };
}
