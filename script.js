const project = {
  id: 'P/01',
  status: 'In Progress',
  statusColor: '#ea5b1f',
  title: 'Search and Rescue UAV',
  subtitle: 'A flying radio relay for search-and-rescue teams operating in mountainous terrain.',
  overview: `UAV-mounted cross-band radio repeater designed to improve communications for search and rescue, wildfire, and disaster response teams when terrain blocks normal radio line-of-sight. The system carries VHF/UHF radio hardware on a drone, flies to an elevated location such as a ridge or inaccessible area, lands, and acts as a temporary relay to extend the range of public safety radios.`,
  role: 'RF Lead, Test and Validation Lead, PCB Design, Safety and Compliance Lead',
  timeline: 'Sep 2025 — Jun 2026',
  specs: [
    { key: 'RX Band', val: 'VHF 144 MHz' },
    { key: 'TX Band', val: 'UHF 450–460 MHz' },
    { key: 'TX Power', val: '4 W' },
    { key: 'Endurance', val: '30 min' },
    { key: 'Range', val: '1 mile' },
    { key: 'Isolation', val: '>60 dB' },
  ],
  stack: ['STM32F411', 'SA868S VHF', 'SA858 UHF', 'Pixhawk 6C Mini', 'MAVLink', 'KiCad', 'C / Embedded'],
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

    <h2 class="detail-title">${p.title}</h2>
    <p class="detail-subtitle">${p.subtitle}</p>

    <div class="detail-section">
      <h4>Overview</h4>
      <p>${p.overview}</p>
    </div>

    <div class="detail-section">
      <h4>Role</h4>
      <p>${p.role}</p>
    </div>

    <div class="detail-section">
      <h4>Specifications</h4>
      <p class="under-construction">Under Construction</p>
    </div>

    <div class="detail-section">
      <h4>Stack</h4>
      <p class="under-construction">Under Construction</p>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', renderProject);
