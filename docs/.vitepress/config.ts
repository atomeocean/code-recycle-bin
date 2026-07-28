import { defineConfig, UserConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';
import { withMermaid } from 'vitepress-plugin-mermaid';
import { withI18n } from 'vitepress-i18n';
import { bilibiliIconSvg } from '../assets/svg/icon-svg';
import { alias } from './alias.ts';
import {
  vitePressI18nOptions,
  defaultLocale,
  supportLocales
} from './config/i18n.config.ts';
import { mermaidConfig } from './config/mermaid.config.ts';

// 主配置文件
// https://vitepress.dev/reference/site-config

/**
 * sidebar 公共配置
 * https://github.com/jooy2/vitepress-sidebar
 */
const commonSidebarConfig = {
  debugPrint: false,
  collapsed: false,
  collapseDepth: 1, // 初始情况下 只把根目录的文件夹展开
  capitalizeFirst: true, // 首字母大写
  useTitleFromFileHeading: true, // 用文件内首个标题作为菜单名
  useTitleFromFrontmatter: true, // 优先用 frontmatter title
  useFolderTitleFromIndexFile: true,
  sortMenusByFrontmatterOrder: true,
  includeFolderIndexFile: true,
  excludeByGlobPattern: ['_includes']
};

// 为每种语言生成一套 sidebar：默认语言映射到根路径，其余语言映射到 /<lang>/
const vitePressSidebarOptions = supportLocales.map((lang) => ({
  ...commonSidebarConfig,
  documentRootPath: `/docs/${lang}`,
  resolvePath: defaultLocale === lang ? '/' : `/${lang}/`,
  ...(defaultLocale === lang ? {} : { basePath: `/${lang}/` })
}));

const vitePressConfig: UserConfig = {
  title: 'Atomeocean open source template',
  description: 'atomeocean 开源项目仓库模板',
  head: [
    // 示例：Google AdSense（新项目请替换 client id 或删除）
    // ['script', {
    //   async: 'async',
    //   src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX',
    //   crossorigin: 'anonymous',
    // }],
  ],
  // 默认语言的页面路径去掉 /zhHans 前缀（访问 /xxx 而非 /zhHans/xxx）
  rewrites: {
    'zhHans/:rest*': ':rest*'
  },
  vite: {
    resolve: {
      alias // 引入路径别名
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 使用现代 Sass API（sass-embedded），消除 legacy-js-api 弃用警告
          api: 'modern-compiler'
        }
      }
    }
  },
  themeConfig: {
    logo: '/favicon.ico',
    siteTitle: false,
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config#lastupdated
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // https://github.com/jooy2/vitepress-sidebar
    sidebar: generateSidebar(vitePressSidebarOptions),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/atomeocean' },
      { icon: 'youtube', link: 'https://www.youtube.com/@atomeocean' },
      { icon: 'x', link: 'https://x.com/atomeocean' },
      {
        icon: { svg: bilibiliIconSvg },
        link: 'https://space.bilibili.com/12071489'
      }
    ]
  },
  // https://github.com/emersonbottero/vitepress-plugin-mermaid
  mermaid: mermaidConfig,
  ignoreDeadLinks: true
};

export default defineConfig(
  withI18n(withMermaid(vitePressConfig), vitePressI18nOptions)
);
