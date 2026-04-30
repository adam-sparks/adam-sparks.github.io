const project = {
  id: 'P/01',
  status: 'In Progress',
  statusColor: '#ea5b1f',
  title: 'Search and Rescue UAV',
  subtitle: 'A flying radio relay for search-and-rescue teams operating in mountainous terrain.',
  overview: `Capstone project sponsored by Marion County Search & Rescue. The system carries a VHF/UHF repeater payload to a ridge or saddle, lands, and operates from the ground — extending radio range for ground teams in terrain that breaks line-of-sight communication. The payload integrates two SA868-series modules with an STM32F411 controller routing audio between bands.`,
  role: 'Firmware lead, RF isolation design, system integration',
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
      <div class="detail-specs">
        ${p.specs.map(s => `
          <div class="spec">
            <span class="spec-key">${s.key}</span>
            <span class="spec-val">${s.val}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="detail-section">
      <h4>Stack</h4>
      <div class="detail-stack">
        ${p.stack.map(t => `<span class="stack-chip">${t}</span>`).join('')}
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', renderProject);
