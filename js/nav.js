(function() {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About us' },
    { href: 'activities.html', label: 'Activities' },
    { href: 'publication.html', label: 'Publication' },
    { href: 'executives.html', label: 'Executives' },
    // {href: 'https://asf25.ndscbd.net/', label: 'Science Fest', class:'fest-nav-btn'},
  ];

  const current = window.location.pathname.split('/').pop() || 'index.html';

  function buildNav(links, cls) {
    return links.map(p => {
      const active = (p.href === current || (current === '' && p.href === 'index.html')) ? ' active' : '';
      const btnClass = p.class ? ` ${p.class}` : '';
      return `<a href="${p.href}" class="${cls}${btnClass}${active}">${p.label}</a>`;
    }).join('');
  }

  const html = `
    <header class="site-header" id="siteHeader">
      <div class="header-inner">
        <a href="index.html" class="header-logo">
          <img src="images/cropped-logo.png" alt="NDSC Logo">
        </a>
        <nav class="site-nav">
          ${buildNav(pages, '')}
        </nav>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
    <nav class="mobile-nav" id="mobileNav">
      ${buildNav(pages, '')}
    </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', html);

  const header = document.getElementById('siteHeader');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();
