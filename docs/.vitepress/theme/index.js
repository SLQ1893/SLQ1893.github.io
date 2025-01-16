// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import './style.css'

export default {
    ...DefaultTheme,
    // override the Layout with a wrapper component that
    // injects the slots
    Layout: MyLayout,
    enhanceApp({ app }) {
        const script = document.createElement('script');
        script.src = 'https://www.hcw3.cn/api/texiao/baozha.js'; // 替换成你的脚本URL
        // script.src = './baozha.js'; // 替换成你的脚本URL
        script.async = true;
        document.body.appendChild(script);
      }
}