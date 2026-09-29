import './style.css';
import VeryfiLens from 'veryfi-lens-wasm';
import {
  DEFAULT_SETTINGS,
  FLAVOR_VISIBILITY_KEYS,
  buildLensConfig,
  loadSettings,
  saveSettings,
} from './settings.js';
import { GEAR_ICON, createSettingsPanel } from './settingsPanel.js';

const CLIENT_ID = import.meta.env.VITE_VERYFI_CLIENT_ID;

class ScannerApp {
 constructor() {
   this.statusDisplay = document.getElementById('status-display');
   this.resultDisplay = document.getElementById('result-display');
   this.settings = loadSettings();
   this.initializeSettings();
   this.initializeEventListeners();
   this.applyFlavorVisibility();
 }

 initializeSettings() {
   this.settingsPanel = createSettingsPanel({
     getSettings: () => this.settings,
     onChange: (key, value) => this.updateSettings({ ...this.settings, [key]: value }),
     onReset: () => this.updateSettings({ ...DEFAULT_SETTINGS }),
   });
   const settingsButton = document.getElementById('settings-btn');
   settingsButton.innerHTML = GEAR_ICON;
   settingsButton.addEventListener('click', () => this.settingsPanel.open());
 }

 updateSettings(settings) {
   this.settings = settings;
   saveSettings(settings);
   this.applyFlavorVisibility();
 }

 applyFlavorVisibility() {
   document.querySelectorAll('.scan-btn').forEach(button => {
     const visibilityKey = FLAVOR_VISIBILITY_KEYS[button.dataset.type];
     button.hidden = visibilityKey ? this.settings[visibilityKey] === false : false;
   });
 }

 async initializeScanner(flavor) {
   try {
      await VeryfiLens.init(CLIENT_ID, buildLensConfig(this.settings, flavor));
      this.setupEventHandlers();
     this.updateStatus('Scanner initialized');
     await VeryfiLens.showCamera();
   } catch (error) {
     this.handleError('Initialization failed', error);
   }
 }

 setupEventHandlers() {
   VeryfiLens.onSuccess((result) => {
     this.updateStatus('Scan completed');
     this.displayResult(result);
   });
   VeryfiLens.onFailure((error) => {
     this.handleError('Scan failed', error);
   });
   VeryfiLens.onUpdate((status) => {
     this.updateStatus(`Status: ${status.status}`);
   });
 }

 updateStatus(message) {
   this.statusDisplay.textContent = message;
 }

 displayResult(result) {
   this.resultDisplay.innerHTML = `
     <h3>Scan Result:</h3>
     <pre>${JSON.stringify(result, null, 2)}</pre>
   `;
 }

 handleError(context, error) {
   console.error(`${context}:`, error);
   this.statusDisplay.innerHTML = `
     <div class="error">
       ${context}: ${error.message}
     </div>
   `;
 }

 initializeEventListeners() {
   document.querySelectorAll('.scan-btn').forEach(button => {
     button.addEventListener('click', () => {
       const scanType = button.dataset.type;
       this.initializeScanner(scanType);
     });
   });
 }
}

document.addEventListener('DOMContentLoaded', () => {
 new ScannerApp();
});
