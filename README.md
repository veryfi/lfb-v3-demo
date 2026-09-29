# Veryfi Lens for Browser v3 — Demo App

A minimal Vite + Vanilla JS demo for testing the [Veryfi Lens for Browser](https://docs.veryfi.com/lens/browser-v3/getting-started/quick-start/general/) SDK.

## Prerequisites

- Node.js
- A Veryfi account with Lens for Browser enabled
- Your **Client ID** from [Veryfi Hub → Settings → Keys](https://app.veryfi.com/api/settings/keys/)

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root and add your Client ID:

   ```
   VITE_VERYFI_CLIENT_ID=your_client_id_here
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open **http://localhost:5173/** in your browser and click any scan button to test.

## Settings

Click the gear button in the top-right corner to open **Lens Configuration**. Settings are grouped by area (capture, UI, review gallery, checks, anydocs, etc.), saved to `localStorage`, and applied the next time you start a scan. **Flavor Visibility** shows or hides the scan buttons on the home screen, and **Reset to Defaults** restores the original configuration.

All settings map directly to `VeryfiLens.init()` options — see `src/settings.js` for the defaults and how they are converted into the init config.

## Build for Production

```bash
npm run build
npm run preview
```

## Testing on Mobile Devices

The camera API requires HTTPS. To test on a mobile device you can either use **ngrok** or a **local SSL proxy**.

### Option A: ngrok

1. Start the dev server and run ngrok:
   ```bash
   npm run dev
   ngrok http 5173
   ```

2. Add ngrok's hostname to `vite.config.js`:
   ```js
   export default defineConfig({
     server: {
       allowedHosts: ['your-subdomain.ngrok-free.app'],
     },
   });
   ```

3. Open the ngrok URL on your mobile device.

### Option B: Local SSL Proxy

1. Generate a local SSL certificate (replace the IP with your machine's local IP):
   ```bash
   mkcert localhost 192.168.X.XX
   ```

2. Copy the generated `.pem` files to the project root.

3. Run the SSL proxy to forward HTTPS traffic to the Vite dev server:
   ```bash
   npx local-ssl-proxy --key certname-key.pem --cert certname.pem --source 3001 --target 5173
   ```
> **Note:** `--target` is the port of the project's dev server (Vite defaults to `5173`), `--source` is the HTTPS port you'll open on your mobile device.

4. On your mobile device, navigate to `https://192.168.X.XX:3001`.

> **Note:** You must explicitly type `https://` in the address bar — the browser will not add it automatically.