/**
 * UFFinance — Liga de Mercado Financeiro da UFF
 * Script Principal (Vanilla JS leve, sem dependências externas)
 *
 * Funcionalidades:
 * 1. Menu responsivo para dispositivos móveis (hambúrguer)
 * 2. Filtro interativo por ano na seção de Competições (2018 a 2026)
 * 3. Destaque automático da seção ativa no menu superior durante a rolagem
 * 4. Atualização automática do ano no rodapé
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ========================================================================
     1. MENU MOBILE (HAMBÚRGUER)
     ======================================================================== */
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Fecha o menu ao clicar em qualquer link de navegação
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Fecha o menu ao pressionar a tecla ESC
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ========================================================================
     2. FILTRO POR ANO NAS COMPETIÇÕES (2018 - 2026)
     Como adicionar um novo ano futuramente:
     Basta adicionar um <button class="year-tab" data-year="2027">2027</button>
     e um card <article class="competition-card" data-year="2027"> no index.html!
     ======================================================================== */
  const yearTabs = document.querySelectorAll('.year-tab');
  const compCards = document.querySelectorAll('.competition-card');

  function filterCompetitionsByYear(selectedYear) {
    yearTabs.forEach((tab) => {
      const isMatch = tab.getAttribute('data-year') === selectedYear;
      tab.classList.toggle('is-active', isMatch);
      tab.setAttribute('aria-selected', String(isMatch));
    });

    compCards.forEach((card) => {
      const cardYear = card.getAttribute('data-year');
      if (selectedYear === 'all' || cardYear === selectedYear) {
        card.removeAttribute('hidden');
      } else {
        card.setAttribute('hidden', '');
      }
    });
  }

  if (yearTabs.length > 0 && compCards.length > 0) {
    yearTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const selectedYear = tab.getAttribute('data-year');
        filterCompetitionsByYear(selectedYear);
      });
    });

    // Inicializa com a aba marcada como .is-active no HTML (ex: 2019, conforme rascunho)
    const initialActiveTab = document.querySelector('.year-tab.is-active');
    if (initialActiveTab) {
      filterCompetitionsByYear(initialActiveTab.getAttribute('data-year'));
    }
  }

  /* ========================================================================
     3. DESTAQUE DO LINK ATIVO NO MENU AO ROLAR A PÁGINA
     ======================================================================== */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              const href = link.getAttribute('href');
              link.classList.toggle('is-active', href === `#${currentId}`);
            });
          }
        });
      },
      {
        rootMargin: '-25% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  /* ========================================================================
     4. ANO ATUAL NO RODAPÉ
     ======================================================================== */
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
