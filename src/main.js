import './style.css';
import VeryfiLens from 'veryfi-lens-wasm';

const CLIENT_ID = import.meta.env.VITE_VERYFI_CLIENT_ID;

class ScannerApp {
 constructor() {
   this.statusDisplay = document.getElementById('status-display');
   this.resultDisplay = document.getElementById('result-display');
   this.initializeEventListeners();
 }

 async initializeScanner(flavor) {
   try {
      await VeryfiLens.init(CLIENT_ID, {
        lensFlavor: flavor,
        torchButton: true,
        isBlurModal: true,
        isDocumentModal: true,
        exitButton: true,
        enableLongReceiptPreview: flavor === 'long_document'
      });
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
