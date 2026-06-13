import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// After vite-plugin-singlefile inlines everything (in a late bundle hook), patch
// the written file to match the configuration that is known to work when the
// file is opened directly from disk (file://): an inline ES-module script at the
// end of <body>, WITHOUT a crossorigin attribute. The crossorigin attribute that
// Vite adds is what causes a blank page under the file:// (null) origin.
function fileProtocolCompat() {
  let outDir = 'dist';
  return {
    name: 'file-protocol-compat',
    configResolved(cfg) { outDir = cfg.build.outDir; },
    closeBundle() {
      const file = resolve(outDir, 'index.html');
      let html = readFileSync(file, 'utf8');
      html = html.replace(/\s+crossorigin(?:="[^"]*")?/g, '');
      html = html.replace(/<style\s+rel="stylesheet"\s*>/g, '<style>');
      // Move the inline module script to the end of <body> (kept as type="module",
      // which is always deferred and runs after #root is parsed).
      const m = html.match(/<script\b[^>]*>[\s\S]*?<\/script>/);
      if (m) {
        const tag = m[0];
        // Use function replacements: the minified bundle contains many `$`
        // characters, which a string replacement would mis-interpret as
        // special patterns ($&, $', …) and corrupt the JS.
        html = html.replace(tag, () => '');
        html = html.replace('</body>', () => '    ' + tag + '\n  </body>');
      }
      writeFileSync(file, html);
    },
  };
}

// Build to a single self-contained index.html with everything inlined, so the
// study tool works fully offline (open via file://, no server, no network).
export default defineConfig({
  plugins: [react(), viteSingleFile(), fileProtocolCompat()],
  build: {
    target: 'es2018',
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000,
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
