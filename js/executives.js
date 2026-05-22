/**
 * executives.js
 * Reads PANELS from executives-data.js and builds:
 *   - one tab button per panel
 *   - one card grid per panel
 * Nothing here needs to change when new panels are added.
 */

(function () {

  /* ── Helpers ─────────────────────────────────────────────────────────── */

  /** Return the image src for a member, falling back to position-named file */
  function imgSrc(panel, member) {
    const filename = member.image || (member.position + '.jpg');
    return panel.folder + '/' + filename;
  }

  /** Escape a string for safe use inside an HTML attribute */
  function esc(str) {
    return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }

  /** Build social icon HTML; skip any platform whose URL is empty/missing */
  function buildSocialIcons(social) {
    const platforms = [
      { key: 'facebook',  icon: 'fa-facebook-f' },
      { key: 'instagram', icon: 'fa-instagram'  },
      { key: 'whatsapp',  icon: 'fa-whatsapp'   },
      { key: 'telegram',  icon: 'fa-telegram'   },
      { key: 'linkedin',  icon: 'fa-linkedin-in' },
      { key: 'email',  icon: 'fa fa-envelope' }
    ];
    const links = platforms
      .filter(p => social && social[p.key] && social[p.key].trim() !== '')
      .map(p => `<a href="${social[p.key]}" target="_blank" rel="noopener">
                   <i class="fab ${p.icon}"></i>
                 </a>`)
      .join('\n');
    return `<div class="social-icons">${links}</div>`;
  }

  /** Build a single executive card */
  function buildCard(panel, member) {
    const src        = imgSrc(panel, member);
    const displayName = member.name || member.position;
    const dept       = member.department
      ? `<div class="department">${member.department}</div>`
      : '';

    const modalArgs = [
      esc(displayName),
      esc(member.position),
      esc(member.department || ''),
      esc(member.bio || ''),
      esc(src),
    ].join("','");

    return `
    <div class="card" onclick="openModal('${modalArgs}')">
      <div class="image-wrapper">
        <img src="${src}" alt="${esc(displayName)}" loading="lazy">
        <div class="overlay-text">Open</div>
        ${buildSocialIcons(member.social)}
      </div>
      <h3>${displayName}</h3>
      <div class="position">${member.position}</div>
      ${dept}
    </div>`;
  }

  /** Build one full panel grid */
  function buildPanel(panel, panelId, isFirst) {
    const activeClass = isFirst ? ' active' : '';
    const cards = panel.members.map(m => buildCard(panel, m)).join('\n');
    return `<div id="${panelId}" class="executive-container${activeClass}">${cards}</div>`;
  }

  /** Build one tab button */
  function buildButton(panel, panelId, isFirst) {
    const activeClass = isFirst ? ' active' : '';
    return `<button class="year-btn${activeClass}" onclick="showYear('${panelId}', this)">${panel.label}</button>`;
  }

  /* ── Tab switching (same logic as before) ────────────────────────────── */

  window.showYear = function (id, btn) {
    document.querySelectorAll('.executive-container').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.year-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
  };

  /* ── Modal ───────────────────────────────────────────────────────────── */

  window.openModal = function (name, position, department, description, imgSrc) {
    document.getElementById('modal-img').src         = imgSrc;
    document.getElementById('modal-name').textContent        = name;
    document.getElementById('modal-position').textContent    = position;
    document.getElementById('modal-department').textContent  = department;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal').style.display           = 'flex';
  };

  window.closeModal = function () {
    document.getElementById('modal').style.display = 'none';
  };

  window.addEventListener('click', function (e) {
    if (e.target === document.getElementById('modal')) closeModal();
  });

  /* ── Render ──────────────────────────────────────────────────────────── */

  function render() {
    const btnContainer   = document.getElementById('year-buttons');
    const panelContainer = document.getElementById('panels-container');

    if (!btnContainer || !panelContainer) {
      console.error('executives.js: missing #year-buttons or #panels-container in HTML.');
      return;
    }

    if (!window.PANELS || !PANELS.length) {
      console.error('executives.js: PANELS is empty or not loaded. Make sure executives-data.js loads first.');
      return;
    }

    const buttons = [];
    const panels  = [];

    PANELS.forEach(function (panel, i) {
      const panelId = 'panel-' + i;
      const isFirst = i === 0;
      buttons.push(buildButton(panel, panelId, isFirst));
      panels.push(buildPanel(panel, panelId, isFirst));
    });

    btnContainer.innerHTML   = buttons.join('\n');
    panelContainer.innerHTML = panels.join('\n');
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }

})();
