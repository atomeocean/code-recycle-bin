import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

/**
 * 自定义主题入口
 * https://vitepress.dev/guide/custom-theme
 *
 * 目前只是继承默认主题。新项目在此注册全局组件 / 布局插槽，例如：
 *
 *   import MyComponent from '@ao-components/MyComponent.vue';
 *   ...
 *   enhanceApp({ app }) {
 *     app.component('MyComponent', MyComponent);
 *   }
 */
export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 在此注册全局组件或插件
  }
} satisfies Theme;
