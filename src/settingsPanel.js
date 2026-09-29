import { SETTINGS_METADATA, SETTINGS_SECTIONS } from './settings.js';

export const GEAR_ICON = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>`;

const CLOSE_ICON = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 18L18 6M6 6l12 12"/>
  </svg>`;

const CHEVRON_ICON = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 9l-7 7-7-7"/>
  </svg>`;

/**
 * Settings modal. Values are read through getSettings() and every edit is
 * reported through onChange(key, value); onReset() restores defaults.
 */
export const createSettingsPanel = ({ getSettings, onChange, onReset }) => {
  const expandedSections = new Set();

  const overlay = document.createElement('div');
  overlay.className = 'settings-overlay';
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="settings-panel" role="dialog" aria-modal="true" aria-labelledby="settings-title">
      <div class="settings-header">
        <div class="settings-header-title">
          <span class="settings-header-icon">${GEAR_ICON}</span>
          <h2 id="settings-title">Lens Configuration</h2>
        </div>
        <button type="button" class="settings-icon-btn" data-action="close" aria-label="Close settings">
          ${CLOSE_ICON}
        </button>
      </div>
      <div class="settings-content"></div>
      <div class="settings-footer">
        <button type="button" class="settings-btn settings-btn-secondary" data-action="reset">Reset to Defaults</button>
        <button type="button" class="settings-btn settings-btn-primary" data-action="close">Done</button>
      </div>
    </div>`;

  const content = overlay.querySelector('.settings-content');

  const createInput = (key, meta, value) => {
    switch (meta.type) {
      case 'boolean': {
        const label = document.createElement('label');
        label.className = 'settings-switch';
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = !!value;
        input.addEventListener('change', () => onChange(key, input.checked));
        const slider = document.createElement('span');
        slider.className = 'settings-switch-slider';
        label.append(input, slider);
        return label;
      }
      case 'number': {
        const wrapper = document.createElement('div');
        wrapper.className = 'settings-range';
        const input = document.createElement('input');
        input.type = 'range';
        input.min = meta.min ?? 0;
        input.max = meta.max ?? 100;
        input.step = meta.step ?? 1;
        input.value = value ?? 0;
        const output = document.createElement('span');
        output.className = 'settings-value';
        output.textContent = value ?? 0;
        input.addEventListener('input', () => {
          const parsed = parseFloat(input.value);
          output.textContent = parsed;
          onChange(key, parsed);
        });
        wrapper.append(input, output);
        return wrapper;
      }
      case 'color': {
        const wrapper = document.createElement('div');
        wrapper.className = 'settings-color';
        const input = document.createElement('input');
        input.type = 'color';
        input.value = value || '#54C08B';
        const output = document.createElement('span');
        output.className = 'settings-value';
        output.textContent = input.value;
        input.addEventListener('input', () => {
          output.textContent = input.value;
          onChange(key, input.value);
        });
        wrapper.append(input, output);
        return wrapper;
      }
      case 'string': {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'settings-text';
        input.value = value || '';
        input.placeholder = 'Enter text...';
        input.addEventListener('input', () => onChange(key, input.value));
        return input;
      }
      case 'select': {
        const select = document.createElement('select');
        select.className = 'settings-select';
        (meta.options || []).forEach((option) => {
          const optionEl = document.createElement('option');
          optionEl.value = option.value;
          optionEl.textContent = option.label;
          select.appendChild(optionEl);
        });
        select.value = value || meta.options?.[0]?.value || '';
        select.addEventListener('change', () => onChange(key, select.value));
        return select;
      }
      default:
        return null;
    }
  };

  const createRow = (key, value) => {
    const meta = SETTINGS_METADATA[key];
    if (!meta) return null;

    const row = document.createElement('div');
    row.className = 'settings-row';

    const text = document.createElement('div');
    text.className = 'settings-row-text';
    const label = document.createElement('span');
    label.className = 'settings-row-label';
    label.textContent = meta.label;
    text.appendChild(label);
    if (meta.description) {
      const description = document.createElement('p');
      description.className = 'settings-row-description';
      description.textContent = meta.description;
      description.title = meta.description;
      text.appendChild(description);
    }

    const control = document.createElement('div');
    control.className = 'settings-row-control';
    const input = createInput(key, meta, value);
    if (input) control.appendChild(input);

    row.append(text, control);
    return row;
  };

  const render = () => {
    const settings = getSettings();
    content.replaceChildren();

    SETTINGS_SECTIONS.forEach((section) => {
      const isExpanded = expandedSections.has(section.title);
      const sectionEl = document.createElement('div');
      sectionEl.className = 'settings-section';

      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = `settings-section-toggle${isExpanded ? ' expanded' : ''}`;
      toggle.setAttribute('aria-expanded', String(isExpanded));
      toggle.innerHTML = `<span>${section.title}</span>${CHEVRON_ICON}`;
      toggle.addEventListener('click', () => {
        if (expandedSections.has(section.title)) {
          expandedSections.delete(section.title);
        } else {
          expandedSections.add(section.title);
        }
        render();
      });
      sectionEl.appendChild(toggle);

      if (isExpanded) {
        const rows = document.createElement('div');
        rows.className = 'settings-rows';
        section.keys.forEach((key) => {
          const row = createRow(key, settings[key]);
          if (row) rows.appendChild(row);
        });
        sectionEl.appendChild(rows);
      }

      content.appendChild(sectionEl);
    });
  };

  const onKeyDown = (event) => {
    if (event.key === 'Escape') close();
  };

  const open = () => {
    render();
    overlay.hidden = false;
    document.addEventListener('keydown', onKeyDown);
  };

  const close = () => {
    overlay.hidden = true;
    document.removeEventListener('keydown', onKeyDown);
  };

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      close();
      return;
    }
    const action = event.target.closest('[data-action]')?.dataset.action;
    if (action === 'close') {
      close();
    } else if (action === 'reset') {
      onReset();
      render();
    }
  });

  document.body.appendChild(overlay);

  return { open, close };
};
