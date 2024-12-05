import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      '@clerk/clerk-react', 
      'axios', 
      'react-pdf'
    ]
  },
  server: {
    port: 3000,
    open: true
  }
})
