/**
 * AFAN Disease Prevention Web Portal - Main Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFAQSystem();
  initQuizSystem();
  initClinicDirectory();
  initCopyButtons();
});

// Mobile Navigation Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    // Close when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// FAQ System: Accordion + Live Search + Category Filter
function initFAQSystem() {
  const faqContainer = document.getElementById('faq-container');
  const searchInput = document.getElementById('faq-search-input');
  const filterButtons = document.querySelectorAll('.faq-filter-btn');

  if (!faqContainer) return;

  let activeCategory = 'all';
  let searchTerm = '';

  function renderFAQs() {
    faqContainer.innerHTML = '';

    const filtered = FAQS.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = !searchTerm || 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      faqContainer.innerHTML = `
        <div class="p-8 text-center bg-white rounded-2xl border border-slate-200">
          <p class="text-slate-500 text-lg">No questions found matching "${searchTerm}".</p>
          <p class="text-sm text-slate-400 mt-2">Have a specific question? Contact AFAN Las Vegas at <a href="tel:7023822326" class="text-rose-600 font-semibold underline">(702) 382-2326</a>.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((item, index) => {
      const faqItem = document.createElement('div');
      faqItem.className = 'border border-slate-200 bg-white rounded-xl overflow-hidden transition-all duration-200 shadow-sm';
      
      const categoryBadge = item.category === 'afan' ? 'AFAN Las Vegas' :
                            item.category === 'prevention' ? 'Disease Prevention' : 'Local NV Resources';

      faqItem.innerHTML = `
        <button type="button" class="faq-header w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:bg-slate-50 transition" aria-expanded="false" data-index="${index}">
          <div class="pr-4">
            <span class="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-slate-100 text-slate-600 mb-1.5">${categoryBadge}</span>
            <h3 class="font-semibold text-slate-900 text-base md:text-lg">${item.question}</h3>
          </div>
          <div class="shrink-0 ml-2 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 chevron-icon">
            <svg class="w-4 h-4 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </button>
        <div class="faq-body hidden px-6 pb-6 text-slate-600 border-t border-slate-100 pt-4 leading-relaxed">
          <p>${item.answer}</p>
          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Verified with CDC / AFAN Guidelines</span>
            <a href="https://afanlv.org/" target="_blank" rel="noopener noreferrer" class="text-rose-600 font-medium hover:underline inline-flex items-center">
              Learn more at AFAN Las Vegas &rarr;
            </a>
          </div>
        </div>
      `;

      const header = faqItem.querySelector('.faq-header');
      const body = faqItem.querySelector('.faq-body');

      header.addEventListener('click', () => {
        const isExpanded = header.getAttribute('aria-expanded') === 'true';
        header.setAttribute('aria-expanded', !isExpanded);
        body.classList.toggle('hidden');
      });

      faqContainer.appendChild(faqItem);
    });
  }

  // Initial render
  renderFAQs();

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim();
      renderFAQs();
    });
  }

  // Category filter handlers
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-rose-600', 'text-white', 'shadow-sm');
        b.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-100');
      });
      btn.classList.add('bg-rose-600', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-100');
      activeCategory = btn.getAttribute('data-category');
      renderFAQs();
    });
  });
}

// Interactive Quiz System
function initQuizSystem() {
  const quizCard = document.getElementById('quiz-card');
  if (!quizCard) return;

  let currentQuestionIndex = 0;
  let score = 0;

  function renderQuestion() {
    if (currentQuestionIndex >= QUIZ_QUESTIONS.length) {
      renderQuizResults();
      return;
    }

    const q = QUIZ_QUESTIONS[currentQuestionIndex];
    quizCard.innerHTML = `
      <div class="p-6 md:p-8">
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
            Question ${currentQuestionIndex + 1} of ${QUIZ_QUESTIONS.length}
          </span>
          <span class="text-sm font-medium text-slate-500">Score: ${score}/${currentQuestionIndex}</span>
        </div>

        <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-snug">
          ${q.question}
        </h3>

        <div class="space-y-3" id="quiz-options">
          ${q.options.map((opt, i) => `
            <button type="button" class="quiz-option w-full p-4 rounded-xl border-2 border-slate-200 text-left font-medium text-slate-700 flex items-center justify-between" data-index="${i}">
              <span>${opt.text}</span>
              <span class="opt-status hidden text-xl font-bold"></span>
            </button>
          `).join('')}
        </div>

        <div id="quiz-feedback" class="mt-6 hidden p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm leading-relaxed">
          <p id="feedback-text" class="text-slate-700"></p>
          <div class="mt-4 flex justify-between items-center">
            <a href="https://afanlv.org/" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-rose-600 hover:underline">
              Support AFAN's Prevention Work &rarr;
            </a>
            <button type="button" id="next-q-btn" class="px-5 py-2 rounded-lg bg-rose-600 text-white font-semibold text-sm hover:bg-rose-700 transition">
              ${currentQuestionIndex === QUIZ_QUESTIONS.length - 1 ? 'View Final Results' : 'Next Question &rarr;'}
            </button>
          </div>
        </div>
      </div>
    `;

    const optionButtons = quizCard.querySelectorAll('.quiz-option');
    const feedbackBox = document.getElementById('quiz-feedback');
    const feedbackText = document.getElementById('feedback-text');
    const nextBtn = document.getElementById('next-q-btn');

    optionButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Disable all buttons
        optionButtons.forEach(b => b.classList.add('disabled', 'pointer-events-none'));

        const selectedIndex = parseInt(btn.getAttribute('data-index'), 10);
        const selectedOption = q.options[selectedIndex];

        if (selectedOption.correct) {
          btn.classList.add('correct');
          btn.querySelector('.opt-status').innerHTML = '✓';
          btn.querySelector('.opt-status').classList.remove('hidden');
          score++;
          feedbackBox.classList.remove('bg-slate-50', 'border-slate-200');
          feedbackBox.classList.add('bg-emerald-50', 'border-emerald-200');
          feedbackText.innerHTML = `<strong>Spot on!</strong> ${q.explanation}`;
        } else {
          btn.classList.add('incorrect');
          btn.querySelector('.opt-status').innerHTML = '✕';
          btn.querySelector('.opt-status').classList.remove('hidden');
          
          // Highlight correct one
          q.options.forEach((opt, idx) => {
            if (opt.correct) {
              optionButtons[idx].classList.add('correct');
            }
          });

          feedbackBox.classList.remove('bg-slate-50', 'border-slate-200');
          feedbackBox.classList.add('bg-rose-50', 'border-rose-200');
          feedbackText.innerHTML = `<strong>Not quite.</strong> ${q.explanation}`;
        }

        feedbackBox.classList.remove('hidden');
      });
    });

    nextBtn.addEventListener('click', () => {
      currentQuestionIndex++;
      renderQuestion();
    });
  }

  function renderQuizResults() {
    const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100);
    quizCard.innerHTML = `
      <div class="p-8 text-center">
        <div class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${percentage >= 80 ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'} text-3xl font-extrabold">
          ${score}/${QUIZ_QUESTIONS.length}
        </div>
        <h3 class="text-2xl font-bold text-slate-900 mb-2">
          ${percentage >= 80 ? 'Fantastic Public Health Awareness!' : 'Great effort! Knowledge saves lives.'}
        </h3>
        <p class="text-slate-600 max-w-lg mx-auto mb-6 text-sm">
          You scored ${percentage}%. You now know how scientific facts like U=U, rapid PEP treatment, and AFAN's 40-year mission in Las Vegas work together to end disease transmission.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4">
          <button type="button" id="restart-quiz-btn" class="px-5 py-2.5 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 transition text-sm">
            Retake Quiz
          </button>
          <a href="https://afanlv.org/" target="_blank" rel="noopener noreferrer" class="px-6 py-2.5 rounded-xl bg-rose-600 text-white font-semibold hover:bg-rose-700 transition shadow-md shadow-rose-600/20 text-sm">
            Donate to AFAN Las Vegas
          </a>
        </div>
      </div>
    `;

    document.getElementById('restart-quiz-btn').addEventListener('click', () => {
      currentQuestionIndex = 0;
      score = 0;
      renderQuestion();
    });
  }

  renderQuestion();
}

// Local Clinics Directory Rendering
function initClinicDirectory() {
  const container = document.getElementById('clinics-grid');
  if (!container) return;

  container.innerHTML = LOCAL_CLINICS.map(clinic => `
    <div class="p-6 rounded-2xl border ${clinic.highlight ? 'border-rose-300 bg-rose-50/50 ring-2 ring-rose-500/20 shadow-md' : 'border-slate-200 bg-white shadow-sm'} afan-card flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full ${clinic.highlight ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-700'}">
            ${clinic.type}
          </span>
          ${clinic.highlight ? '<span class="text-xs font-bold text-rose-700 uppercase tracking-wide">Featured</span>' : ''}
        </div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">${clinic.name}</h3>
        <p class="text-xs text-slate-500 mb-4 flex items-center">
          <svg class="w-4 h-4 mr-1 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          ${clinic.address}
        </p>
        <p class="text-xs text-slate-600 mb-2"><strong>Hours:</strong> ${clinic.hours}</p>
        <p class="text-xs text-slate-600 mb-4"><strong>Services:</strong> ${clinic.services}</p>
      </div>

      <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
        <a href="tel:${clinic.phone.replace(/[^0-9]/g, '')}" class="text-xs font-bold text-slate-800 hover:text-rose-600 flex items-center">
          <svg class="w-3.5 h-3.5 mr-1 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          ${clinic.phone}
        </a>
        <a href="${clinic.link}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold ${clinic.highlight ? 'text-rose-600 hover:underline' : 'text-slate-600 hover:text-slate-900'}">
          Visit Site &rarr;
        </a>
      </div>
    </div>
  `).join('');
}

// Copy URL / Share Toast
function initCopyButtons() {
  const shareButtons = document.querySelectorAll('.share-btn');
  shareButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Link Copied!';
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    });
  });
}
