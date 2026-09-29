export const SETTINGS_STORAGE_KEY = 'veryfi-lens-demo-settings';

/**
 * Home screen button (data-type) -> setting that controls its visibility.
 * These keys are demo-only and are never passed to VeryfiLens.init().
 */
export const FLAVOR_VISIBILITY_KEYS = {
  document: 'showReceiptsFlavor',
  long_document: 'showLongReceiptFlavor',
  credit_card: 'showCreditCardFlavor',
  checks: 'showChecksFlavor',
  upload: 'showGalleryFlavor',
  caps: 'showCapsFlavor',
  code_strips: 'showCodesFlavor',
  anydocs: 'showAnydocsFlavor',
};

const FIELD_DETECTION_KEYS = {
  detectFieldVendor: 'vendor',
  detectFieldDate: 'date',
  detectFieldTotal: 'total',
};

/** 0 in the UI means "not set", so each flavor applies its own default. */
const ZERO_MEANS_UNSET_KEYS = ['maxPagesPerDocument', 'maxDocuments'];

export const DEFAULT_SETTINGS = {
  // Flavor visibility
  showReceiptsFlavor: true,
  showLongReceiptFlavor: true,
  showCreditCardFlavor: true,
  showChecksFlavor: true,
  showGalleryFlavor: true,
  showCapsFlavor: true,
  showCodesFlavor: true,
  showAnydocsFlavor: true,

  // Capture settings
  multiSubmission: false,
  isDocumentModal: true,
  enforceDocumentDetection: false,
  detectBlur: true,
  isBlurModal: true,
  enforceBlurDetection: false,
  blurThreshold: 0.7,
  autoDocumentCapture: false,
  isLcdModal: true,
  lcdDetectionForDocuments: false,
  lcdDetectionForChecks: false,
  lcdThreshold: 0.5,
  detectFieldVendor: false,
  detectFieldDate: false,
  detectFieldTotal: false,
  disableSubmitUntilFieldDetectionDone: false,
  originalImageMaxSizeInMB: 0,

  // Auto tags
  autoTagSource: false,
  autoTagDeviceId: false,
  autoTagLensVersion: false,
  autoTagPlatform: false,

  // UI settings
  theme: 'system',
  exitButton: true,
  enableSubmit: true,
  torchButton: true,
  torchEnabled: true,
  torchOnStart: true,
  cropMargin: 0.0,
  submitButtonText: 'Submit Anyway',
  retakeButtonText: 'Retake a picture',
  cropButtonText: 'Crop',
  resetButtonText: 'Reset',
  documentModalMessage: 'Oops, There appears to be no document on your image',
  blurModalMessage: 'Oops, The image is too blurry to process',
  cameraPermissionDeniedMessage:
    'Camera access was blocked. Please allow camera access in your browser settings and try again.',
  dropZoneText: 'Click or drag and drop to upload an image',
  switchCameraButton: true,
  mirrorButton: true,
  mirrorOnDesktop: true,
  isDesktopModeModal: true,

  // Review gallery
  maxPagesPerDocument: 0,
  maxDocuments: 0,
  reviewGalleryTitle: 'Review',
  reviewAddPageText: 'Add Page',
  reviewAddDocumentText: 'Add Document',
  reviewSubmitText: 'Submit',
  reviewDoneText: 'Done',
  reviewRetakeText: 'Retake',
  reviewDeleteText: 'Delete',
  reviewShowQualityBadges: true,
  reviewIssueBlurText: 'Blurry',
  reviewIssueLcdText: 'Photo of a screen',

  // Checks
  captureBackOfCheck: false,
  frontBackDetectionForChecks: false,
  enforceBothSides: false,
  enforceAndSkipBothSides: false,
  delayBetweenCaptures: 0,
  forceLandscapeCheckPreview: true,
  checksEnableManualMode: true,
  checksManualModeTimeout: 3000,
  persistManualModeOnRetake: true,
  cropLayoutAspectRatio: 0.0,
  checksMaxAspectRatio: 2.61,
  checksMinAspectRatio: 2.61,
  checksCropMargin: 0.1,
  cropLayoutBorderColor: '#54C08B',
  cropLayoutStroke: 2,
  cropLayoutOverlayAlpha: 0.6,
  cropLayoutCornerRadius: 0,
  cropLayoutGuideTopPosition: '40%',
  cropLayoutGuideLeftPosition: '50%',
  cropLayoutGuideWidthScale: 0.9,
  cropLayoutGuideMaxHeightScale: 0.7,
  cropLayoutTipMessage: 'We could not detect a check, hope this will make it easier',
  cropLayoutTipPosition: 'right',
  cropLayoutTipOffset: '35%',
  cropLayoutTipFontFamily: 'Arial, sans-serif',
  cropLayoutTipFontSize: '16px',
  cropLayoutTipFontWeight: 'bold',
  cropLayoutTipColor: '#FFFFFF',
  cropLayoutTipTextShadow: '0 1px 2px rgba(0,0,0,0.8)',
  checkEnforcedModalMessage: 'Please flip the check and capture the back side',
  checkOptionalModalMessage: 'Do you want to capture the back side of the check?',
  checkContinueButtonText: 'Continue',
  checkYesButtonText: 'Yes',
  checkNoButtonText: 'No',

  // Long receipt
  enableLongReceiptPreview: true,

  // Anydocs
  enableBlueprintsModal: true,
  selectedBlueprint: '',
  anydocShowFlipMessage: false,
  anydocFlipMessageText: 'Please flip the document and capture the other side',
  anydocFlipContinueText: 'Continue',
  anydocShowGuide: false,
  anydocGuideText:
    'Position the document within the frame.\n\nPress the capture button to scan a page. Use "Add Page" to capture multiple pages, then press "Submit" when done.',
  anydocGuideTitle: 'Steps to Capture',
  guideShowOnce: false,

  // Developer
  debug_mode: false,
  packageMode: false,
};

export const SETTINGS_METADATA = {
  // ==================== FLAVOR VISIBILITY ====================
  showReceiptsFlavor: { label: 'Document', type: 'boolean', description: 'Show Scan Document button on home screen' },
  showLongReceiptFlavor: { label: 'Long Receipt', type: 'boolean', description: 'Show Scan Long Receipt button on home screen' },
  showCreditCardFlavor: { label: 'Credit Card', type: 'boolean', description: 'Show Scan Credit Card button on home screen' },
  showChecksFlavor: { label: 'Checks', type: 'boolean', description: 'Show Scan Check button on home screen' },
  showGalleryFlavor: { label: 'Upload', type: 'boolean', description: 'Show Upload Image button on home screen' },
  showCapsFlavor: { label: 'Bottle Caps', type: 'boolean', description: 'Show Scan Bottle Cap button on home screen' },
  showCodesFlavor: { label: 'Code Strips', type: 'boolean', description: 'Show Scan Code Strip button on home screen' },
  showAnydocsFlavor: { label: 'Anydocs', type: 'boolean', description: 'Show Scan Anydoc button on home screen' },

  // ==================== UI SETTINGS ====================
  theme: {
    label: 'Theme',
    type: 'select',
    description: 'UI color theme. System follows the OS preference and updates live',
    options: [
      { value: 'system', label: 'System' },
      { value: 'light', label: 'Light' },
      { value: 'dark', label: 'Dark' },
    ],
  },
  exitButton: { label: 'Exit Button', type: 'boolean', description: 'Show exit/close button' },
  enableSubmit: { label: 'Enable Submit', type: 'boolean', description: 'Show submit button after capture' },
  torchButton: { label: 'Torch Button', type: 'boolean', description: 'Show torch/flashlight toggle button' },
  torchEnabled: { label: 'Torch Enabled', type: 'boolean', description: 'Enable torch/flashlight functionality' },
  torchOnStart: { label: 'Torch On Start', type: 'boolean', description: 'Automatically turn on torch when capture starts' },
  cropMargin: { label: 'Crop Margin', type: 'number', description: 'Margin for all document types (0.0-1.0)', min: 0, max: 1, step: 0.05 },
  submitButtonText: { label: 'Submit Button Text', type: 'string', description: 'Text for submit button' },
  retakeButtonText: { label: 'Retake Button Text', type: 'string', description: 'Text for retake button' },
  cropButtonText: { label: 'Crop Button Text', type: 'string', description: 'Text for crop button' },
  resetButtonText: { label: 'Reset Button Text', type: 'string', description: 'Text for reset button' },
  documentModalMessage: { label: 'No Document Message', type: 'string', description: 'Message when no document is detected' },
  blurModalMessage: { label: 'Blur Message', type: 'string', description: 'Message when image is too blurry' },
  cameraPermissionDeniedMessage: { label: 'Camera Denied Message', type: 'string', description: 'Shown when the user blocks camera access' },
  dropZoneText: { label: 'Drop Zone Text', type: 'string', description: 'Text shown in file upload drop zone' },
  switchCameraButton: { label: 'Switch Camera Button', type: 'boolean', description: 'Show switch camera (front/back) button' },
  mirrorButton: { label: 'Mirror Button', type: 'boolean', description: 'Show mirror/flip button' },
  mirrorOnDesktop: { label: 'Mirror on Desktop', type: 'boolean', description: 'Automatically mirror the video on desktop (front-facing webcam)' },
  isDesktopModeModal: { label: 'Desktop Mode Modal', type: 'boolean', description: 'Show the modal asking mobile users to leave "Desktop site" mode' },

  // ==================== CAPTURE SETTINGS ====================
  multiSubmission: { label: 'Multi-submission', type: 'boolean', description: 'Allow capturing and submitting multiple documents in one session' },
  isDocumentModal: { label: 'No Document Modal', type: 'boolean', description: 'Show modal when no document is detected' },
  enforceDocumentDetection: { label: 'Enforce Document Detection', type: 'boolean', description: 'Prevent submission if no document detected' },
  detectBlur: { label: 'Detect Blur', type: 'boolean', description: 'Enable blur detection on captured images' },
  isBlurModal: { label: 'Blur Modal', type: 'boolean', description: 'Show modal when blur is detected' },
  enforceBlurDetection: { label: 'Enforce Blur Detection', type: 'boolean', description: 'Prevent submission if image is blurry' },
  blurThreshold: { label: 'Blur Threshold', type: 'number', description: 'Variance threshold for blur detection (lower = stricter)', min: 0, max: 1, step: 0.05 },
  autoDocumentCapture: { label: 'Auto Document Capture', type: 'boolean', description: 'Automatically capture when a document is detected' },
  isLcdModal: { label: 'LCD Modal', type: 'boolean', description: 'Show modal when LCD screen is detected' },
  lcdDetectionForDocuments: { label: 'LCD Detection for Documents', type: 'boolean', description: 'Enable LCD screen detection for documents' },
  lcdDetectionForChecks: { label: 'LCD Detection for Checks', type: 'boolean', description: 'Enable LCD screen detection for checks' },
  lcdThreshold: { label: 'LCD Threshold', type: 'number', description: 'Threshold for LCD screen detection', min: 0, max: 1, step: 0.05 },
  detectFieldVendor: { label: 'Detect Vendor Field', type: 'boolean', description: 'Detect vendor field' },
  detectFieldDate: { label: 'Detect Date Field', type: 'boolean', description: 'Detect date field' },
  detectFieldTotal: { label: 'Detect Total Field', type: 'boolean', description: 'Detect total field' },
  disableSubmitUntilFieldDetectionDone: { label: 'Hold Submit Until Field Detection', type: 'boolean', description: 'Disable submit until crop-preview field detection finishes (requires at least one field toggle)' },
  originalImageMaxSizeInMB: { label: 'Max Image Size (MB)', type: 'number', description: 'Cap the size of produced images (0.2-2.5 MB). Quality, then dimensions, are reduced until the image fits. 0 means no limit. Does not apply to recorded video', min: 0, max: 2.5, step: 0.5 },

  // ==================== AUTO TAGS ====================
  autoTagSource: { label: 'Tag Source', type: 'boolean', description: 'Tag the submitted document with its source (LFB)' },
  autoTagDeviceId: { label: 'Tag Device ID', type: 'boolean', description: 'Tag the submitted document with the device ID (UUID)' },
  autoTagLensVersion: { label: 'Tag Lens Version', type: 'boolean', description: 'Tag the submitted document with the Lens version' },
  autoTagPlatform: { label: 'Tag Platform', type: 'boolean', description: 'Tag the submitted document with the platform (Web, plus the browser when it can be detected)' },

  // ==================== REVIEW GALLERY ====================
  maxPagesPerDocument: { label: 'Max Pages Per Document', type: 'number', description: 'Maximum pages per document in the review gallery (0 = flavor default). 1 hides "Add Page"', min: 0, max: 50, step: 1 },
  maxDocuments: { label: 'Max Documents', type: 'number', description: 'Maximum documents per session (0 = flavor default). 1 hides "Add Document"', min: 0, max: 50, step: 1 },
  reviewGalleryTitle: { label: 'Gallery Title', type: 'string', description: 'Title shown at the top of the review gallery' },
  reviewAddPageText: { label: 'Add Page Text', type: 'string', description: 'Text for the review gallery "add page" action' },
  reviewAddDocumentText: { label: 'Add Document Text', type: 'string', description: 'Text for the review gallery "add document" action' },
  reviewSubmitText: { label: 'Submit Text', type: 'string', description: 'Text for the review gallery submit action' },
  reviewDoneText: { label: 'Done Text', type: 'string', description: 'Text for the review gallery done action' },
  reviewRetakeText: { label: 'Retake Text', type: 'string', description: 'Text for the review gallery retake action' },
  reviewDeleteText: { label: 'Delete Text', type: 'string', description: 'Text for the review gallery delete action' },
  reviewShowQualityBadges: { label: 'Show Quality Badges', type: 'boolean', description: 'Badge pages that failed a quality check instead of blocking them' },
  reviewIssueBlurText: { label: 'Blurry Badge Text', type: 'string', description: 'Badge text shown on a page flagged as blurry' },
  reviewIssueLcdText: { label: 'Screen Badge Text', type: 'string', description: 'Badge text shown on a page flagged as a screen/LCD capture' },

  // ==================== CHECKS ====================
  captureBackOfCheck: { label: 'Capture Back of Check', type: 'boolean', description: 'Enable capturing back side of check' },
  frontBackDetectionForChecks: { label: 'Front/Back Detection for Checks', type: 'boolean', description: 'Enable front/back detection for checks' },
  enforceBothSides: { label: 'Enforce Both Sides', type: 'boolean', description: 'Require both sides of check to be captured' },
  enforceAndSkipBothSides: { label: 'Auto Back Capture', type: 'boolean', description: 'Automatically proceed to back capture without prompting' },
  delayBetweenCaptures: { label: 'Delay Between Captures (ms)', type: 'number', description: 'Delay before capturing back side', min: 0, max: 5000, step: 100 },
  forceLandscapeCheckPreview: { label: 'Force Landscape Preview', type: 'boolean', description: 'Force horizontal display of check previews' },
  checksEnableManualMode: { label: 'Enable Manual Mode', type: 'boolean', description: 'Enable manual capture mode for checks' },
  checksManualModeTimeout: { label: 'Manual Mode Timeout (ms)', type: 'number', description: 'Time before switching to manual capture mode', min: 0, max: 10000, step: 500 },
  persistManualModeOnRetake: { label: 'Persist Manual Mode', type: 'boolean', description: 'Keep manual mode when retaking front side' },
  cropLayoutAspectRatio: { label: 'Crop Aspect Ratio', type: 'number', description: '0.0 means use default', min: 0, max: 5, step: 0.1 },
  checksMaxAspectRatio: { label: 'Max Aspect Ratio', type: 'number', description: 'Maximum aspect ratio for check detection', min: 1, max: 5, step: 0.01 },
  checksMinAspectRatio: { label: 'Min Aspect Ratio', type: 'number', description: 'Minimum aspect ratio for check detection', min: 1, max: 5, step: 0.01 },
  checksCropMargin: { label: 'Crop Margin', type: 'number', description: 'Margin around greenbox (0.0-1.0)', min: 0, max: 1, step: 0.05 },
  cropLayoutBorderColor: { label: 'Guide Border Color', type: 'color', description: 'Color for crop layout border' },
  cropLayoutStroke: { label: 'Guide Border Width (px)', type: 'number', description: '0 means no border', min: 0, max: 10, step: 1 },
  cropLayoutOverlayAlpha: { label: 'Guide Overlay Transparency', type: 'number', description: '0-1 transparency value', min: 0, max: 1, step: 0.1 },
  cropLayoutCornerRadius: { label: 'Guide Corner Radius (px)', type: 'number', min: 0, max: 50, step: 1 },
  cropLayoutGuideTopPosition: { label: 'Guide Top Position', type: 'string', description: "CSS position (e.g., '40%')" },
  cropLayoutGuideLeftPosition: { label: 'Guide Left Position', type: 'string', description: "CSS position (e.g., '50%')" },
  cropLayoutGuideWidthScale: { label: 'Guide Width Scale', type: 'number', description: 'Width as fraction of container', min: 0.1, max: 1, step: 0.05 },
  cropLayoutGuideMaxHeightScale: { label: 'Guide Max Height Scale', type: 'number', description: 'Max height as fraction of container', min: 0.1, max: 1, step: 0.05 },
  cropLayoutTipMessage: { label: 'Guide Tip Message', type: 'string', description: 'Instructional text shown in crop layout' },
  cropLayoutTipPosition: { label: 'Guide Tip Position', type: 'string', description: "Position of tip text (e.g., 'right', 'left', 'top')" },
  cropLayoutTipOffset: { label: 'Guide Tip Offset', type: 'string', description: "Offset from guide edge (e.g., '35%')" },
  cropLayoutTipFontFamily: { label: 'Guide Tip Font Family', type: 'string', description: 'Font family for tip text' },
  cropLayoutTipFontSize: { label: 'Guide Tip Font Size', type: 'string', description: "Font size (e.g., '16px')" },
  cropLayoutTipFontWeight: { label: 'Guide Tip Font Weight', type: 'string', description: "Font weight (e.g., 'bold')" },
  cropLayoutTipColor: { label: 'Guide Tip Text Color', type: 'color', description: 'Color for tip text' },
  cropLayoutTipTextShadow: { label: 'Guide Tip Text Shadow', type: 'string', description: 'CSS text-shadow value' },
  checkEnforcedModalMessage: { label: 'Back Required Message', type: 'string', description: 'Message when back capture is required' },
  checkOptionalModalMessage: { label: 'Back Optional Message', type: 'string', description: 'Message when back capture is optional' },
  checkContinueButtonText: { label: 'Continue Button Text', type: 'string', description: 'Text for continue button in check modal' },
  checkYesButtonText: { label: 'Yes Button Text', type: 'string', description: 'Text for yes button in check modal' },
  checkNoButtonText: { label: 'No Button Text', type: 'string', description: 'Text for no button in check modal' },

  // ==================== LONG RECEIPT ====================
  enableLongReceiptPreview: { label: 'Enable Preview Panel', type: 'boolean', description: 'Show preview panel for long document stitching' },

  // ==================== ANYDOCS ====================
  enableBlueprintsModal: { label: 'Enable Blueprints Modal', type: 'boolean', description: 'Show blueprints selection modal' },
  selectedBlueprint: { label: 'Selected Blueprint', type: 'string', description: 'Pre-selected blueprint name (skips modal when set)' },
  anydocShowFlipMessage: { label: 'Flip to Second Page', type: 'boolean', description: 'After the first page of a two-page capture, show a flip prompt and go straight to capturing the other side. Only runs when Max Pages Per Document is 2 (set automatically if this is on and no cap is set)' },
  anydocFlipMessageText: { label: 'Flip Message', type: 'string', description: 'Message shown after the first page asking the user to flip the document' },
  anydocFlipContinueText: { label: 'Flip Continue Text', type: 'string', description: 'Continue button on the flip prompt' },
  anydocShowGuide: { label: 'Show Text Guide', type: 'boolean', description: 'Show a dismissible on-screen text guide explaining how to capture; auto-hides after each page and reappears for the next' },
  anydocGuideText: { label: 'Guide Text', type: 'string', description: 'Guide text shown for anydocs capture. Separate steps with a blank line — each becomes a numbered step' },
  anydocGuideTitle: { label: 'Guide Title', type: 'string', description: 'Heading of the anydocs capture guide panel' },
  guideShowOnce: { label: 'Show Guide Once', type: 'boolean', description: 'Show the capture guide only for the first capture of a session instead of re-showing it for every capture' },

  // ==================== DEVELOPER ====================
  debug_mode: { label: 'Debug Mode', type: 'boolean', description: 'Enable debug mode with console logging' },
  packageMode: { label: 'Package Mode', type: 'boolean', description: 'Enable package mode' },
};

export const SETTINGS_SECTIONS = [
  {
    title: 'Flavor Visibility',
    keys: Object.values(FLAVOR_VISIBILITY_KEYS),
  },
  {
    title: 'Capture Settings',
    keys: [
      'multiSubmission',
      'isDocumentModal',
      'enforceDocumentDetection',
      'detectBlur',
      'isBlurModal',
      'enforceBlurDetection',
      'blurThreshold',
      'autoDocumentCapture',
      'isLcdModal',
      'lcdDetectionForDocuments',
      'lcdDetectionForChecks',
      'lcdThreshold',
      'detectFieldVendor',
      'detectFieldDate',
      'detectFieldTotal',
      'disableSubmitUntilFieldDetectionDone',
      'originalImageMaxSizeInMB',
    ],
  },
  {
    title: 'Auto Tags',
    keys: ['autoTagSource', 'autoTagDeviceId', 'autoTagLensVersion', 'autoTagPlatform'],
  },
  {
    title: 'UI Settings',
    keys: [
      'theme',
      'exitButton',
      'enableSubmit',
      'torchButton',
      'torchEnabled',
      'torchOnStart',
      'cropMargin',
      'submitButtonText',
      'retakeButtonText',
      'cropButtonText',
      'resetButtonText',
      'documentModalMessage',
      'blurModalMessage',
      'cameraPermissionDeniedMessage',
      'dropZoneText',
      'switchCameraButton',
      'mirrorButton',
      'mirrorOnDesktop',
      'isDesktopModeModal',
    ],
  },
  {
    title: 'Review Gallery',
    keys: [
      'maxPagesPerDocument',
      'maxDocuments',
      'reviewGalleryTitle',
      'reviewAddPageText',
      'reviewAddDocumentText',
      'reviewSubmitText',
      'reviewDoneText',
      'reviewRetakeText',
      'reviewDeleteText',
      'reviewShowQualityBadges',
      'reviewIssueBlurText',
      'reviewIssueLcdText',
    ],
  },
  {
    title: 'Checks',
    keys: [
      'captureBackOfCheck',
      'frontBackDetectionForChecks',
      'enforceBothSides',
      'enforceAndSkipBothSides',
      'delayBetweenCaptures',
      'forceLandscapeCheckPreview',
      'checksEnableManualMode',
      'checksManualModeTimeout',
      'persistManualModeOnRetake',
      'cropLayoutAspectRatio',
      'checksMaxAspectRatio',
      'checksMinAspectRatio',
      'checksCropMargin',
      'cropLayoutBorderColor',
      'cropLayoutStroke',
      'cropLayoutOverlayAlpha',
      'cropLayoutCornerRadius',
      'cropLayoutGuideTopPosition',
      'cropLayoutGuideLeftPosition',
      'cropLayoutGuideWidthScale',
      'cropLayoutGuideMaxHeightScale',
      'cropLayoutTipMessage',
      'cropLayoutTipPosition',
      'cropLayoutTipOffset',
      'cropLayoutTipFontFamily',
      'cropLayoutTipFontSize',
      'cropLayoutTipFontWeight',
      'cropLayoutTipColor',
      'cropLayoutTipTextShadow',
      'checkEnforcedModalMessage',
      'checkOptionalModalMessage',
      'checkContinueButtonText',
      'checkYesButtonText',
      'checkNoButtonText',
    ],
  },
  {
    title: 'Long Receipt',
    keys: ['enableLongReceiptPreview'],
  },
  {
    title: 'Anydocs',
    keys: [
      'enableBlueprintsModal',
      'selectedBlueprint',
      'anydocShowFlipMessage',
      'anydocFlipMessageText',
      'anydocFlipContinueText',
      'anydocShowGuide',
      'anydocGuideText',
      'anydocGuideTitle',
      'guideShowOnce',
    ],
  },
  {
    title: 'Developer',
    keys: ['debug_mode', 'packageMode'],
  },
];

export const loadSettings = () => {
  try {
    const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (stored) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
    }
  } catch (error) {
    console.error('Failed to load settings from localStorage:', error);
  }
  return { ...DEFAULT_SETTINGS };
};

export const saveSettings = (settings) => {
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Failed to save settings to localStorage:', error);
  }
};

/** Convert demo settings into the config object passed to VeryfiLens.init(). */
export const buildLensConfig = (settings, lensFlavor) => {
  const config = { lensFlavor };
  const documentFieldsToDetect = [];
  const visibilityKeys = Object.values(FLAVOR_VISIBILITY_KEYS);

  Object.entries(settings).forEach(([key, value]) => {
    if (visibilityKeys.includes(key)) return;
    if (key in FIELD_DETECTION_KEYS) {
      if (value) documentFieldsToDetect.push(FIELD_DETECTION_KEYS[key]);
      return;
    }
    if (ZERO_MEANS_UNSET_KEYS.includes(key) && !value) return;
    if (key === 'selectedBlueprint' && !value) return;
    config[key] = value;
  });

  config.documentFieldsToDetect = documentFieldsToDetect;
  return config;
};
