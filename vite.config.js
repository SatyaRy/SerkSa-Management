import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'dotenv/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    "process.env.REACT_APP_FIREBASE_KEY" :JSON.stringify(process.env.REACT_APP_FIREBASE_KEY)
  }
})
