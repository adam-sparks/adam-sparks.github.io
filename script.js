const project = {
  id: 'P/01',
  status: 'Completed',
  statusColor: '#22c55e',
  title: 'Search and Rescue UAV',
  subtitle: 'A radio repeater system transported on a drone for rapid communications infrastructure.',
  overview: `UAV-mounted cross-band radio repeater designed to improve communications for search and rescue, wildfire, and disaster response teams when terrain blocks normal radio line-of-sight. The system carries VHF/UHF radio hardware on a drone, flies to an elevated location such as a ridge or inaccessible area, lands, and acts as a temporary relay to extend the range of public safety radios.`,
  role: 'RF Lead, Test and Validation Lead, PCB Design, Safety and Compliance Lead',
  projectType: 'Senior Capstone Project',
  timeline: 'Jan 2026 — June 2026',
  websiteUrl: 'https://capstone-website-zeta.vercel.app/',
  image: 'capstone-drone.jpeg',
  specs: [
    { key: 'RX Band', val: 'VHF 144 MHz' },
    { key: 'TX Band', val: 'UHF 450–460 MHz' },
    { key: 'TX Power', val: '4 W' },
    { key: 'Endurance', val: '30 min' },
    { key: 'Range', val: '1 mile' },
    { key: 'Isolation', val: '>60 dB' },
  ],
  stack: ['STM32F411', 'SA868S VHF', 'SA858 UHF', 'Pixhawk 6C Mini', 'MAVLink', 'KiCad', 'C / Embedded'],
  subprojects: [
    {
      title: 'Radio Repeater',
      bullets: ['VHF → UHF Crossband Analog Repeater', 'Designed and ordered custom 2-layer PCB.', 'STM32 Microcontroller'],
      images: ['repeater_prototype.jpeg', 'repeater-system-level.webp'],
    },
    {
      title: 'Magnetic Loop Antenna',
      bullets: ['Designed for 2-meter band FM simplex calling frequency: 146.520 MHz'],
      images: ['vhf_antenna.jpg', 'mag_ant_s11.jpeg'],
    },
    {
      title: '4-Layer Carrier PCB',
      bullets: ['Designed to carry VHF module, microcontroller, and audio conditioning all on one board'],
      images: ['four_layer.png'],
    },
  ],
};

function renderProject() {
  const p = project;
  const detail = document.querySelector('.project-detail');
  detail.innerHTML = `
    <div class="detail-header">
      <span class="detail-id">${p.id} · ${p.timeline}</span>
      <span class="detail-status">
        <span class="status-dot" style="background: ${p.statusColor}; box-shadow: 0 0 0 3px ${p.statusColor}30;"></span>
        ${p.status}
      </span>
    </div>

    <div class="detail-title-row">
      <h2 class="detail-title">${p.title}</h2>
      <span class="detail-type">${p.projectType}</span>
    </div>
    <p class="detail-subtitle">${p.subtitle}</p>

    <div class="detail-body">
      <div class="detail-text">
        <div class="detail-section">
          <h4>Overview</h4>
          <p>${p.overview}</p>
        </div>

        <div class="detail-section">
          <h4>Role</h4>
          <p>${p.role}</p>
        </div>

        ${p.websiteUrl ? `<div class="detail-section">
          <a href="${p.websiteUrl}" target="_blank" rel="noopener" class="detail-link">
            View Project Website
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>` : ''}
      </div>

      ${p.image ? `<div class="detail-image-wrap">
        <img src="${p.image}" alt="${p.title}" class="detail-image" />
      </div>` : ''}
    </div>

    ${p.subprojects && p.subprojects.length ? `
    <div class="subprojects">
      <h4 class="subprojects-label">Subprojects</h4>
      <div class="subprojects-grid">
        ${p.subprojects.map(s => `
          <div class="subproject-card">
            <div class="subproject-images">
              ${(s.images || []).map(img => `<img src="${img}" alt="${s.title}" class="subproject-image lightbox-trigger" />`).join('')}
            </div>
            <span class="subproject-title">${s.title}</span>
            ${s.bullets && s.bullets.length ? `<ul class="subproject-bullets">${s.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
          </div>
        `).join('')}
      </div>
    </div>` : ''}
  `;
}

function initLightbox() {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<img class="lightbox-img" />';
  document.body.appendChild(overlay);

  const img = overlay.querySelector('.lightbox-img');

  document.addEventListener('click', e => {
    if (e.target.classList.contains('lightbox-trigger')) {
      img.src = e.target.src;
      img.alt = e.target.alt;
      overlay.classList.add('open');
    }
  });

  overlay.addEventListener('click', () => overlay.classList.remove('open'));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') overlay.classList.remove('open');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProject();
  initLightbox();
});
