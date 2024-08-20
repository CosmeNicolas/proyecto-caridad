import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
      VitePWA({ 
        registerType: 'autoUpdate',
        manifest:{
          name: "TucuManos",
          short_name: "Tucumanos",
          description: "App web de donaciones - #ReciclaDesdeCasa",
          start_url: "/",
          display: "standalone",
          background_color: "#001524",
          theme_color: "#001524",
          orientation: "portrait",
          icons: [
            {
              src: "/icons/192.png",
              sizes: "192x192",
              type: "image/png",
              purpose:'any'
            },
            {
              src: "/icons/257.png",
              sizes: "256x256",
              type: "image/png"
            },
            {
              src: "/icons/384.png",
              sizes: "384x384",
              type: "image/png"
            },
            {
              src: "/icons/512.png",
              sizes: "512x512",
              type: "image/png",
              purpose:'maskable'
            }
          ]
        }
       }
      )
  ],
})
