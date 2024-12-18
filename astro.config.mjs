import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://ManojGvrt.github.io',
  base: '/rims',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
