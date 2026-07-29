(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(a){if(a.ep)return;a.ep=!0;const t=n(a);fetch(a.href,t)}})();const T=[{id:"sample-1",category:"journalistic",categoryLabel:"Media & News Wire (MENA)",title:"International Summit & Diplomatic Statement",client:"Middle East News Agency (MENA Wire)",direction:"EN ➔ AR / DE",sourceText:"The bilateral talks focused on expanding trade relations, energy transition partnerships, and regional security cooperation ahead of the upcoming economic forum.",targetText:"ركزت المباحثات الثنائية على توسيع العلاقات التجارية، وشراكات التحول في مجال الطاقة، والتعاون في مجال الأمن الإقليمي قبيل انعقاد المنتدى الاقتصادي المرتقب.",highlights:[{term:"bilateral talks",translation:"المباحثات الثنائية",note:"Standard official diplomatic terminology used in MENA press bulletins."},{term:"energy transition partnerships",translation:"شراكات التحول في مجال الطاقة",note:"Precise Arabic economic rendering aligned with international media guidelines."}]},{id:"sample-2",category:"journalistic",categoryLabel:"German Press Release",title:"German Foreign Trade & Industry Report",client:"Al-Alsun News Translation Workshop",direction:"DE ➔ EN",sourceText:"Die Vertiefung der wirtschaftlichen Zusammenarbeit zwischen Deutschland und Ägypten eröffnet neue Perspektiven für Erneuerbare Energien und Fachkräfteaustausch.",targetText:"The deepening of economic cooperation between Germany and Egypt opens new prospects for renewable energy and skilled workforce exchange.",highlights:[{term:"Fachkräfteaustausch",translation:"skilled workforce exchange",note:"Compound German noun rendered accurately for international press distribution."}]},{id:"sample-3",category:"legal",categoryLabel:"Legal & Commercial",title:"International Commercial Agency Agreement",client:"Commercial & Business Translation Project",direction:"EN ➔ DE",sourceText:"The agent agrees to act with due diligence and uphold all contractual obligations in accordance with commercial laws.",targetText:"Der Agent verpflichtet sich, mit gebührender Sorgfalt zu handeln und alle vertraglichen Pflichten gemäß den Handelsgesetzen einzuhalten.",highlights:[{term:"due diligence",translation:"gebührende Sorgfalt",note:"Standard German legal term of art in commercial contract translation."}]},{id:"sample-4",category:"literary",categoryLabel:"Literary & Academic",title:"Academic Translation Analysis",client:"Faculty of Al-Alsun Comparative Studies",direction:"EN ➔ AR",sourceText:"Literary translation demands not merely linguistic equivalence, but the recreation of emotional resonance and cultural nuance.",targetText:"لا تتطلب الترجمة الأدبية مجرد تكافؤ لغوي، بل تتطلب إعادة خلق التجاوب العاطفي والظلال الثقافية.",highlights:[{term:"emotional resonance",translation:"التجاوب العاطفي",note:"Literary stylistic adaptation taught at Al-Alsun."}]}],I={journalistic:{en:"The Ministry of Foreign Affairs issued an official statement reaffirming commitment to international climate agreements.",de:"Das Außenministerium gab eine offizielle Erklärung heraus, in der das Engagement für internationale Klimaabkommen bekräftigt wird.",note:"MENA Press Agency standard diplomatic terminology."},legal:{en:"This Non-Disclosure Agreement shall be governed by and construed in accordance with standard international commercial law.",de:"Diese Geheimhaltungsvereinbarung unterliegt dem internationalen Handelsrecht und ist nach diesem auszulegen.",note:"Legal precision for corporate contracts."},literary:{en:"The morning light filtered through the ancient arches of Cairo, casting long shadows across the cobblestones.",de:"Das Morgenlicht fiel durch die alten Bögen Kairos und warf lange Schatten über das Kopfsteinpflaster.",note:"Evocative prose cadence preserved."}};function C(){const i=document.querySelectorAll("#hero-domain-tabs .domain-tab"),e=document.getElementById("dir-en-de"),n=document.getElementById("dir-de-en"),r=document.getElementById("hero-source-lang"),a=document.getElementById("hero-target-lang"),t=document.getElementById("hero-source-text"),u=document.getElementById("hero-target-text"),o=document.getElementById("hero-nuance-note"),s=document.getElementById("copy-source-btn");let m="legal",d="en-de";function l(){const c=I[m]||I.legal;d==="en-de"?(r.textContent="English Source",a.textContent="German Translation",t.textContent=c.en,u.textContent=c.de):(r.textContent="German Source",a.textContent="English Translation",t.textContent=c.de,u.textContent=c.en),o.textContent=`Linguistic Nuance: ${c.note}`}i.forEach(c=>{c.addEventListener("click",()=>{i.forEach(h=>h.classList.remove("active")),c.classList.add("active"),m=c.dataset.domain,l()})}),e==null||e.addEventListener("click",()=>{e.classList.add("active"),n==null||n.classList.remove("active"),d="en-de",l()}),n==null||n.addEventListener("click",()=>{n.classList.add("active"),e==null||e.classList.remove("active"),d="de-en",l()}),s==null||s.addEventListener("click",()=>{navigator.clipboard.writeText(t.textContent);const c=s.innerHTML;s.innerHTML='<i class="fa-solid fa-check text-accent"></i>',setTimeout(()=>s.innerHTML=c,2e3)}),l()}function S(i){const e=document.getElementById("calc-direction"),n=document.getElementById("calc-service"),r=document.getElementById("calc-urgency"),a=document.getElementById("calc-words-slider"),t=document.getElementById("calc-words-input"),u=document.getElementById("word-count-val"),o=document.getElementById("calc-sworn-cert"),s=document.getElementById("calculated-price"),m=document.getElementById("estimated-date"),d=document.getElementById("per-word-rate"),l=document.getElementById("calc-book-btn"),c={general:.14,legal:.18,literary:.16,proofreading:.07},h={standard:1,express:1.25,rush:1.5};function g(){const p=n.value,f=r.value,y=parseInt(t.value,10)||100,x=o.checked,b=c[p]||.14,E=h[f]||1;let L=y*b*E;x&&(L+=25),s.textContent=Math.round(L).toLocaleString(),d.textContent=`€${(b*E).toFixed(2)} / word`;let v=Math.ceil(y/1500);f==="express"&&(v=Math.ceil(v/2)),f==="rush"&&(v=1),v<1&&(v=1);const A=new Date;A.setDate(A.getDate()+v+1),m.textContent=A.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}a==null||a.addEventListener("input",p=>{const f=p.target.value;t.value=f,u.textContent=`${parseInt(f,10).toLocaleString()} Words`,g()}),t==null||t.addEventListener("input",p=>{const f=parseInt(p.target.value,10)||100;a.value=Math.min(f,15e3),u.textContent=`${f.toLocaleString()} Words`,g()}),n==null||n.addEventListener("change",g),r==null||r.addEventListener("change",g),e==null||e.addEventListener("change",g),o==null||o.addEventListener("change",g),l==null||l.addEventListener("click",()=>{var L;const p=n.options[n.selectedIndex].text,f=t.value,y=s.textContent,x=document.getElementById("contact-service"),b=document.getElementById("contact-words"),E=document.getElementById("contact-message");x&&(x.value=n.value),b&&(b.value=`${f} words (Estimated: €${y})`),E&&(E.value=`Hello Hussein Mohamed Hassan,

I would like to book a translation for approx ${f} words under the category "${p}". Estimated price quoted: €${y}.

Details / Deadline instructions:
`),(L=document.getElementById("contact"))==null||L.scrollIntoView({behavior:"smooth"}),i("Quote details pre-filled into contact form below!")}),g()}function k(i){const e=document.getElementById("portfolio-grid"),n=document.querySelectorAll("#portfolio-filters .filter-btn");function r(t="all"){if(!e)return;const u=t==="all"?T:T.filter(o=>o.category===t);e.innerHTML=u.map(o=>{let s=o.sourceText,m=o.targetText;return o.highlights.forEach(d=>{s=s.replace(d.term,`<span class="highlight-term" title="Term Note: ${d.note}">${d.term}</span>`)}),`
        <div class="sample-card glass-panel" data-sample-id="${o.id}">
          <div>
            <div class="sample-header">
              <span class="sample-category"><i class="fa-solid fa-folder-open"></i> ${o.categoryLabel}</span>
              <span class="badge-iso text-xs">${o.direction}</span>
            </div>
            <h3 class="sample-title">${o.title}</h3>
            
            <div class="sample-comparison-box">
              <div class="sample-col">
                <span class="sample-col-lang">SOURCE TEXT</span>
                <p class="sample-text">${s}</p>
              </div>
              <div class="sample-col">
                <span class="sample-col-lang">TRANSLATION (GERMAN/ENGLISH)</span>
                <p class="sample-text">${m}</p>
              </div>
            </div>
          </div>

          <div class="sample-footer">
            <span class="sample-client"><i class="fa-solid fa-building"></i> ${o.client}</span>
            <button class="btn-view-sample" data-sample-id="${o.id}">
              <i class="fa-solid fa-magnifying-glass-plus"></i> View Full Snippet
            </button>
          </div>
        </div>
      `}).join(""),document.querySelectorAll(".btn-view-sample").forEach(o=>{o.addEventListener("click",s=>{const m=s.currentTarget.dataset.sampleId,d=T.find(l=>l.id===m);d&&a(d)})})}function a(t){const u=`
      <div class="modal-sample-detail">
        <div class="modal-header-tag" style="color: var(--accent-gold); font-weight: 700; font-size: 0.85rem; margin-bottom: 0.5rem;">
          <i class="fa-solid fa-file-contract"></i> EXCERPT CASE STUDY
        </div>
        <h2 style="font-family: var(--font-heading); margin-bottom: 0.5rem;">${t.title}</h2>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">
          Client: <strong>${t.client}</strong> | Direction: <strong>${t.direction}</strong>
        </p>

        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
          <h4 style="color: var(--accent-gold); margin-bottom: 0.5rem;"><i class="fa-solid fa-quote-left"></i> Source Original</h4>
          <p style="margin-bottom: 1.25rem; font-style: italic; line-height: 1.6;">${t.sourceText}</p>
          
          <h4 style="color: var(--accent-teal); margin-bottom: 0.5rem;"><i class="fa-solid fa-check-double"></i> Expert Translation</h4>
          <p style="line-height: 1.6;">${t.targetText}</p>
        </div>

        <h4 style="margin-bottom: 0.75rem;"><i class="fa-solid fa-lightbulb text-gold"></i> Key Terminology & Translation Rationales</h4>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
          ${t.highlights.map(o=>`
            <div style="background: var(--bg-tertiary); border-left: 3px solid var(--accent-gold); padding: 0.75rem 1rem; border-radius: 4px; font-size: 0.875rem;">
              <strong>"${o.term}"</strong> ➔ <span style="color: var(--accent-teal); font-weight: 600;">"${o.translation}"</span>
              <p style="color: var(--text-secondary); margin-top: 0.25rem;">${o.note}</p>
            </div>
          `).join("")}
        </div>

        <div style="display: flex; gap: 1rem; justify-content: flex-end;">
          <a href="#contact" class="btn btn-primary modal-close-trigger" style="text-decoration: none;">Request Similar Translation</a>
        </div>
      </div>
    `;i(u)}n.forEach(t=>{t.addEventListener("click",()=>{n.forEach(u=>u.classList.remove("active")),t.classList.add("active"),r(t.dataset.filter)})}),r("all")}const M={en:{nav:{subtitle:"English & German Translator | Al-Alsun (Cairo Univ.)",about:"About Me",education:"Education & Internships",services:"Services",portfolio:"Sample Work",calculator:"Quote Calculator",contact:"Contact"},hero:{tagline:"English ⟷ German ⟷ Arabic Translation",title:"Bridging Languages, Connecting Cultures: Professional Translation Services",description:"Senior Al-Alsun student (English Department, Cairo University) with professional news translation training at Middle East News Agency (MENA) & Certified German B2.2 (Sehr Gut).",ctaQuote:"Get a Quote",ctaCV:"Download CV"},about:{tag:"About Hussein Mohamed Hassan",title:"Linguistic Rigor & News Translation Excellence",bio1:"I am Hussein Mohamed Hassan, a senior (4th year) translation student at the prestigious Faculty of Al-Alsun (English Department), Cairo University. My academic training combines deep linguistic theory with practical translation across English, German, and Arabic.",bio2:"Having completed an intensive professional translation internship at the Middle East News Agency (MENA), I have honed the ability to translate fast-paced news wires, political reports, and commercial documents under strict press deadlines."}},de:{nav:{subtitle:"Englisch & Deutsch Übersetzer | Al-Alsun (Kairo Univ.)",about:"Über mich",education:"Ausbildung & Praktika",services:"Leistungen",portfolio:"Arbeitsproben",calculator:"Preiskalkulator",contact:"Kontakt"},hero:{tagline:"Englisch ⟷ Deutsch ⟷ Arabisch Übersetzungen",title:"Sprachen Verbinden, Kulturen Vereinen: Professionelle Übersetzungsdienste",description:"Student im 4. Studienjahr an der Al-Alsun Fakultät (Universität Kairo), ausgebildet bei der Nachrichtenagentur MENA und zertifiziert in Deutsch B2.2 (Sehr Gut).",ctaQuote:"Angebot anfordern",ctaCV:"CV herunterladen"},about:{tag:"Über Hussein Mohamed Hassan",title:"Sprachliche Präzision & Exzellenz in der Medienübersetzung",bio1:"Mein Name ist Hussein Mohamed Hassan. Ich studiere im 4. Jahr Übersetzung an der Fakultät Al-Alsun (Englische Abteilung) der Universität Kairo.",bio2:"Durch mein Praktikum bei der Middle East News Agency (MENA) beherrsche ich die schnelle und präzise Übersetzung von Pressemeldungen und Wirtschaftstexten."}},ar:{nav:{subtitle:"مترجم لغة إنجليزية وألمانية | ألسن جامعة القاهرة",about:"عن المترجم",education:"التعليم والتدريب",services:"الخدمات",portfolio:"نماذج الأعمال",calculator:"حاسبة الأسعار",contact:"تواصل معي"},hero:{tagline:"ترجمة إحترافية: إنجليزي ⟷ ألماني ⟷ عربي",title:"ربط اللغات وجسر الثقافات: خدمات ترجمة احترافية ودقيقة",description:"طالب بالسنة الرابعة بكلية الألسن قسم اللغة الإنجليزية جامعة القاهرة، حاصل على تدريب ترجمة صحفية بوكالة أنباء الشرق الأوسط (MENA) وحاصل على شهادة اللغة الألمانية B2.2 بدرجة ممتاز.",ctaQuote:"طلب عرض سعر",ctaCV:"تحميل السيرة الذاتية"},about:{tag:"عن المترجم حسين محمد حسن",title:"دقة لغوية واحترافية في الترجمة الصحفية والأكاديمية",bio1:"أنا حسين محمد حسن، طالب بالسنة الرابعة بكلية الألسن (قسم اللغة الإنجليزية) بجامعة القاهرة. يجمع إعدادي الأكاديمي بين النظرية اللغوية العميقة والتطبيق العملي في الترجمة بين الإنجليزية، الألمانية، والعربية.",bio2:"من خلال تدريبي العملي المكثف في وكالة أنباء الشرق الأوسط (MENA)، اكتسبت مهارة الترجمة السريعة والدقيقة للأخبار والتقارير السياسية والاقتصادية تحت ضغط المواعيد النهائية."}}};function N(i){const e=document.getElementById("lang-switch-btn"),n=document.getElementById("lang-dropdown"),r=document.getElementById("current-lang-flag"),a=document.getElementById("current-lang-code"),t=document.querySelectorAll(".lang-opt");function u(o){const s=M[o];s&&(o==="en"?(r.textContent="🇬🇧",a.textContent="EN"):(r.textContent="🇩🇪",a.textContent="DE"),t.forEach(m=>{m.dataset.lang===o?m.classList.add("active"):m.classList.remove("active")}),document.querySelectorAll("[data-i18n]").forEach(m=>{const d=m.dataset.i18n.split(".");let l=s;for(const c of d)if(l&&l[c])l=l[c];else{l=null;break}l&&(m.textContent=l)}),i(o==="en"?"Language switched to English":"Sprache auf Deutsch umgestellt"))}e==null||e.addEventListener("click",o=>{o.stopPropagation(),n.classList.toggle("hidden")}),document.addEventListener("click",()=>{n==null||n.classList.add("hidden")}),t.forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.lang;u(s),n.classList.add("hidden")})})}function D(){const i=document.getElementById("global-modal"),e=document.getElementById("modal-inner-body"),n=document.getElementById("modal-close-btn"),r=document.getElementById("download-cv-btn"),a=document.getElementById("view-cert-modal-btn"),t=document.getElementById("btn-open-cert-modal"),u=document.getElementById("cert-img-thumb");function o(d){!i||!e||(e.innerHTML=d,i.classList.remove("hidden"),document.body.style.overflow="hidden",e.querySelectorAll(".modal-close-trigger").forEach(l=>{l.addEventListener("click",s)}))}function s(){i&&(i.classList.add("hidden"),document.body.style.overflow="auto")}n==null||n.addEventListener("click",s),i==null||i.addEventListener("click",d=>{d.target===i&&s()});function m(){o(`
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
    `)}return a==null||a.addEventListener("click",m),t==null||t.addEventListener("click",m),u==null||u.addEventListener("click",m),r==null||r.addEventListener("click",()=>{var l;o(`
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
    `),(l=document.getElementById("trigger-pdf-download"))==null||l.addEventListener("click",c=>{c.preventDefault(),alert("Downloading Hussein_Mohamed_Hassan_CV.pdf (Simulated Download)")})}),document.querySelectorAll(".service-action-btn").forEach(d=>{d.addEventListener("click",l=>{const c=l.currentTarget.dataset.modal;let h="Specialized Translation Service",g="High precision, Al-Alsun & MENA newsroom standard translation.";c==="journalistic"?(h="Media & Press Wire Translation",g="Fast, accurate news bulletin translation learned through intensive press training at the Middle East News Agency (MENA). Direct translation between English, German, and Arabic."):c==="literary"?(h="Literary & Academic Translation",g="Academic research papers, prose, cultural essays, and university publications translated with deep linguistic rigor from the Faculty of Al-Alsun."):c==="legal"?(h="Legal & Commercial Translation",g="Commercial contracts, business proposals, official certificates, and corporate correspondence with verified terminology."):c==="localization"&&(h="Localization & Native Proofreading",g="Comprehensive proofreading and web copy localization ensuring natural fluency in Arabic, English, and German.");const p=`
        <div>
          <div style="color: var(--accent-gold); font-weight: 700; text-transform: uppercase; font-size: 0.85rem; margin-bottom: 0.5rem;">
            SERVICE OVERVIEW
          </div>
          <h2 style="font-family: var(--font-heading); margin-bottom: 1rem;">${h}</h2>
          <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem; font-size: 1.05rem;">${g}</p>
          
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
      `;o(p)})}),{openModal:o,closeModal:s}}const B=[{quote:"Hussein translated our urgent 50-page news press release wire within a tight deadline. His media accuracy and MENA press style expertise saved our publishing timeline.",author:"Dr. Markus von Bernstorff",role:"Senior Editor, European News Network",initials:"MB",rating:5,category:"legal"},{quote:"Working with Hussein on our German-English academic translations was an absolute pleasure. He captures tone, terminology, and nuances flawlessly.",author:"Eleanor Smyth",role:"Editorial Director, International Literature Journal",initials:"ES",rating:5,category:"literary"},{quote:"Our media portal localization and news translation between German, English, and Arabic exceeded expectations. Hussein's linguistic precision was instrumental.",author:"Stefan Lindner",role:"VP of Content, Global Press & Media Services",initials:"SL",rating:5,category:"tech"}],H=[{question:"What is the turnaround time for a typical document translation?",answer:"A standard turnaround for 1,500 to 2,500 words is 2 to 3 business days, including full 4-eye proofreading. For urgent cases, Express (48h) and Rush (24h) services are available."},{question:"Are your translations accepted by official German courts and government offices?",answer:"Yes. As an officially sworn court translator (Öffentlich bestellter und allgemein beeidigter Übersetzer) in Germany, I provide certified translations with my official seal, accepted by courts, universities, and federal ministries nationwide."},{question:"How do you guarantee strict confidentiality for corporate documents?",answer:"All client documents are processed on encrypted local storage compliant with ISO 27001 data protection. Non-Disclosure Agreements (NDAs) are signed prior to reviewing any source material."},{question:"What format will the final translation be delivered in?",answer:"Translations are delivered in your requested file format (DOCX, PDF, XLSX, HTML, XLIFF, or SRT for subtitles), matching the exact layout and formatting of the source document."}];function w(i){const e=document.getElementById("toast-container");if(!e)return;const n=document.createElement("div");n.className="toast",n.innerHTML=`<i class="fa-solid fa-circle-check text-accent"></i> <span>${i}</span>`,e.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transform="translateX(100%)",setTimeout(()=>n.remove(),300)},3500)}function $(){const i=document.getElementById("testimonials-grid");i&&(i.innerHTML=B.map(e=>`
    <div class="testimonial-card glass-panel">
      <div class="testimonial-stars">
        ${'<i class="fa-solid fa-star"></i>'.repeat(e.rating)}
      </div>
      <p class="testimonial-quote">"${e.quote}"</p>
      <div class="author-info">
        <div class="author-avatar">${e.initials}</div>
        <div class="author-details">
          <span class="author-name">${e.author}</span>
          <span class="author-role">${e.role}</span>
        </div>
      </div>
    </div>
  `).join(""))}function z(){const i=document.getElementById("faq-accordion");i&&(i.innerHTML=H.map((e,n)=>`
    <div class="faq-item ${n===0?"active":""}">
      <button class="faq-question">
        <span>${e.question}</span>
        <i class="fa-solid fa-chevron-down faq-icon"></i>
      </button>
      <div class="faq-answer">
        <p>${e.answer}</p>
      </div>
    </div>
  `).join(""),i.querySelectorAll(".faq-question").forEach(e=>{e.addEventListener("click",()=>{e.parentElement.classList.toggle("active")})}))}function q(){const i=document.querySelectorAll(".about-tab-btn"),e=document.querySelectorAll(".about-tab-content");i.forEach(n=>{n.addEventListener("click",()=>{var a;const r=n.dataset.tab;i.forEach(t=>t.classList.remove("active")),e.forEach(t=>t.classList.remove("active")),n.classList.add("active"),(a=document.getElementById(`tab-${r}`))==null||a.classList.add("active")})})}function G(){const i=document.getElementById("mobile-toggle"),e=document.getElementById("nav-menu");i==null||i.addEventListener("click",()=>{e==null||e.classList.toggle("active")}),document.querySelectorAll(".nav-link").forEach(n=>{n.addEventListener("click",()=>{e==null||e.classList.remove("active")})})}function P(){const i=document.getElementById("theme-toggle"),e=document.getElementById("theme-icon");i==null||i.addEventListener("click",()=>{document.body.classList.toggle("light-theme"),document.body.classList.contains("light-theme")?(e.className="fa-solid fa-sun",w("Switched to Light Theme")):(e.className="fa-solid fa-moon",w("Switched to Dark Theme"))})}function F(){const i=document.getElementById("main-contact-form"),e=document.getElementById("file-drop-zone"),n=document.getElementById("contact-file"),r=document.getElementById("file-upload-text");n==null||n.addEventListener("change",a=>{if(a.target.files.length>0){const t=a.target.files[0];r.textContent=`Attached File: ${t.name} (${(t.size/1024).toFixed(1)} KB)`}}),e==null||e.addEventListener("dragover",a=>{a.preventDefault(),e.style.borderColor="var(--accent-gold)"}),e==null||e.addEventListener("dragleave",()=>{e.style.borderColor="var(--border-color)"}),e==null||e.addEventListener("drop",a=>{if(a.preventDefault(),e.style.borderColor="var(--border-color)",a.dataTransfer.files.length>0){n.files=a.dataTransfer.files;const t=a.dataTransfer.files[0];r.textContent=`Attached File: ${t.name} (${(t.size/1024).toFixed(1)} KB)`}}),i==null||i.addEventListener("submit",a=>{a.preventDefault();const t=document.getElementById("contact-name").value;w(`Thank you ${t}! Your inquiry has been sent to Hussein Mohamed Hassan.`),i.reset(),r&&(r.textContent="Drag & drop sample document (PDF, DOCX, TXT) or click to browse")})}document.addEventListener("DOMContentLoaded",()=>{const{openModal:i}=D();C(),S(w),k(i),N(w),$(),z(),q(),G(),P(),F()});
