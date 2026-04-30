// ============================================
//  ADAM SPARKS — PORTFOLIO
//  Project switcher logic
// ============================================

const projects = {
  'sar-drone': {
    id: 'P/01',
    status: 'In Progress',
    statusColor: '#ea5b1f',
    title: 'SAR Repeater Drone',
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
  },

  'gps-antenna': {
    id: 'P/02',
    status: 'Complete',
    statusColor: '#2da66a',
    title: 'GPS L1 Patch Antenna',
    subtitle: 'A truncated-corner RHCP microstrip patch antenna designed from first principles.',
    overview: `Designed and simulated a circularly polarized patch antenna at 1575.42 MHz on FR-4 substrate. Used the Balanis cavity model in MATLAB to compute initial dimensions (W ≈ 55.7 mm, L ≈ 41.7 mm), then refined the design in Keysight ADS Momentum with an inset feed at y₀ ≈ 16.12 mm. Truncated corners introduce the orthogonal mode required for right-hand circular polarization, validated via axial ratio plots in ADS Data Display.`,
    role: 'Antenna designer (3-person team)',
    timeline: 'Winter 2026',
    specs: [
      { key: 'Center Freq', val: '1575.42 MHz' },
      { key: 'Substrate', val: 'FR-4' },
      { key: 'Polarization', val: 'RHCP' },
      { key: 'Width', val: '55.7 mm' },
      { key: 'Length', val: '41.7 mm' },
      { key: 'Feed', val: 'Inset, 50 Ω' },
    ],
    stack: ['Keysight ADS', 'ADS Momentum', 'MATLAB', 'KiCad', 'Balanis Cavity Model'],
  },

  'digital-comms': {
    id: 'P/03',
    status: 'Complete',
    statusColor: '#2da66a',
    title: 'Digital Comms Simulation',
    subtitle: 'End-to-end BPSK link simulation in MATLAB — modulation, matched filtering, and bit error analysis.',
    overview: `Built a complete BPSK transmit/receive chain using square-root raised cosine pulse shaping. Implemented matched filtering, symbol synchronization, and Monte Carlo BER simulation across a sweep of SNR values. Analyzed the impact of timing error and roll-off factor on performance, plus passband phase synchronization penalties. Final coursework for ECE 462 (Digital Communications & Channel Coding).`,
    role: 'Individual coursework',
    timeline: 'Spring 2026',
    specs: [
      { key: 'Modulation', val: 'BPSK' },
      { key: 'Pulse Shape', val: 'SRRC' },
      { key: 'Roll-off', val: 'Variable' },
      { key: 'Channel', val: 'AWGN' },
      { key: 'Method', val: 'Monte Carlo' },
      { key: 'Coding', val: 'Conv. + Hamming' },
    ],
    stack: ['MATLAB', 'BER Analysis', 'Matched Filtering', 'Channel Coding'],
  },

  'optical-fiber': {
    id: 'P/04',
    status: 'Complete',
    statusColor: '#2da66a',
    title: 'Optical Fiber Modeling',
    subtitle: 'Comparative analysis of NRZ-OOK, PAM-4, and 16-QAM over single-mode fiber.',
    overview: `Modeled three modulation formats over G.652.D and G.655 fiber at the 1310 nm and 1550 nm transmission windows. Analyzed chromatic dispersion penalties, Rayleigh scattering loss, and DWDM channel allocation. Evaluated tradeoffs between spectral efficiency, receiver complexity, and reach for each format. Final project for ECE 483/583 (Optical Fiber Communications).`,
    role: 'Individual coursework',
    timeline: 'Winter 2026',
    specs: [
      { key: 'Wavelengths', val: '1310 / 1550 nm' },
      { key: 'Fiber', val: 'G.652.D, G.655' },
      { key: 'Formats', val: 'OOK, PAM-4, 16-QAM' },
      { key: 'Multiplexing', val: 'DWDM' },
      { key: 'Effects', val: 'CD, Rayleigh' },
    ],
    stack: ['MATLAB', 'Optical Sim', 'DWDM Analysis'],
  },

  'rf-isolation': {
    id: 'P/05',
    status: 'In Progress',
    statusColor: '#ea5b1f',
    title: 'RF Isolation Filter',
    subtitle: 'Cascaded LC bandpass + quarter-wave stub notch for VHF/UHF co-located transceivers.',
    overview: `RF subsystem design for the SAR repeater drone, enabling omnidirectional VHF reception and UHF transmission from the same airframe without null-based isolation. A double-tuned LC bandpass filter on the VHF receive line provides ~40–50 dB rejection at UHF, cascaded with a quarter-wave open stub notch for an additional ~20–30 dB. Total >60 dB isolation, validated against the SA858's TX spectral mask.`,
    role: 'RF design lead',
    timeline: 'Spring 2026',
    specs: [
      { key: 'Pass Band', val: '144 MHz VHF' },
      { key: 'Reject Band', val: '450–460 MHz' },
      { key: 'LC Stage', val: '40–50 dB' },
      { key: 'Stub Stage', val: '20–30 dB' },
      { key: 'Total', val: '>60 dB' },
      { key: 'Topology', val: 'Cascaded' },
    ],
    stack: ['Keysight ADS', 'KiCad', 'S-Parameter Analysis', 'Filter Synthesis'],
  },
};

// ============================================
//  Render project detail
// ============================================
function renderProject(key) {
  const p = projects[key];
  if (!p) return;

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

  // Restart fade-in animation
  detail.style.animation = 'none';
  detail.offsetHeight; // force reflow
  detail.style.animation = '';
}

// ============================================
//  Wire up project list
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.project-item');

  // Render initial project
  renderProject('sar-drone');

  items.forEach(item => {
    item.addEventListener('click', () => {
      // Update active state
      items.forEach(i => {
        i.classList.remove('active');
        i.setAttribute('aria-selected', 'false');
      });
      item.classList.add('active');
      item.setAttribute('aria-selected', 'true');

      // Render selected project
      renderProject(item.dataset.project);
    });
  });

  // Keyboard nav for tabs
  document.querySelector('.project-list').addEventListener('keydown', (e) => {
    const itemArr = Array.from(items);
    const current = itemArr.findIndex(i => i.classList.contains('active'));
    let next = current;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      next = (current + 1) % itemArr.length;
      e.preventDefault();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      next = (current - 1 + itemArr.length) % itemArr.length;
      e.preventDefault();
    }
    if (next !== current) {
      itemArr[next].click();
      itemArr[next].focus();
    }
  });
});
