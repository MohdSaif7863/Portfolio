import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
})
// import { defineConfig } from "vite";

// export default defineConfig({
//   root: ".",
//   server: {
//     port: 3000, // Adjust port if needed
//   },
// });
