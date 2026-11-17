import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cpSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

// Keep original portfolio assets and standalone project pages available after build.
function preserveLegacyPages(){return {name:'preserve-legacy-pages',closeBundle(){for(const folder of ['assets','projects']){const src=resolve(folder);if(existsSync(src))cpSync(src,resolve('dist',folder),{recursive:true,force:true});}}}};
export default defineConfig({plugins:[react(),preserveLegacyPages()]});
