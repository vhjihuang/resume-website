/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 定义主题颜色
        light: '#ffffff',
        dark: '#3B82F6',
        future: '#10B981',
        // darkBackground: '#1a202c', // 自定义暗色背景
        // lightBackground: '#ffffff', // 自定义亮色背景
        darkText: '#e2e8f0', // 暗色模式文本颜色
        lightText: '#333333', // 亮色模式文本颜色
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(136deg, rgb(68, 132, 206), rgb(26, 215, 192), rgb(255, 155, 17), rgb(155, 89, 182), rgb(255, 127, 127), rgb(236, 240, 241))',
      },
      backgroundSize: {
        '1200': '1200% 1200%',
      },
    },
  },
  plugins: [],
}

