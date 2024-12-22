import { defineConfig } from 'vite';  
import react from '@vitejs/plugin-react';  

// https://vite.dev/config/  
export default defineConfig({  
  plugins: [react()],  
  build: {  
    rollupOptions: {  
      output: {  
        manualChunks(id) {  
          // Split vendor libraries into separate chunks  
          if (id.includes('node_modules')) {  
            return id.toString().split('node_modules/')[1].split('/')[0].toString(); // Groups by package name  
          }  
        },  
      }  
    },  
    chunkSizeWarningLimit: 1000, // Adjust the limit as needed (in KB)  
  }  
});