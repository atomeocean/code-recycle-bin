import { VitePressI18nOptions } from 'vitepress-i18n/types';

/**
 * 国际化（i18n）配置
 * https://github.com/jooy2/vitepress-i18n
 *
 * 默认语言为简体中文（zhHans），并提供英文（en）。
 * 新建项目时：
 *   1. 修改 supportLocales 增删语言；
 *   2. 修改各语言的 nav / editLink；
 *   3. 把 editLink.pattern 中的 <YOUR_REPO> 替换成实际仓库名。
 */

// 默认语言为简体中文
export const defaultLocale: string = 'zhHans';
export const supportLocales: string[] = [defaultLocale, 'en'];

// TODO(新项目): 替换成实际仓库地址
const REPO = 'https://github.com/atomeocean/<YOUR_REPO>';

export const vitePressI18nOptions: VitePressI18nOptions = {
  locales: supportLocales, // 支持的语言
  rootLocale: defaultLocale, // 默认语言
  label: {
    default: '中文',
    en: 'English'
  },
  searchProvider: 'local',
  themeConfig: {
    // 根据不同语言配置不同的导航栏
    en: {
      nav: [
        {
          text: 'Products',
          items: [
            { text: 'Atomeocean', link: 'https://atomeocean.com' },
            { text: 'Cruise', link: 'https://cruise.atomeocean.com' }
          ]
        }
      ],
      editLink: {
        // :path 已包含语言子目录（如 en/xxx.md），文件链接用 blob 而非 tree
        pattern: `${REPO}/blob/main/docs/:path`,
        text: 'Edit this page on GitHub'
      },
      lastUpdated: {
        text: 'Updated at',
        formatOptions: { dateStyle: 'full', timeStyle: 'short' }
      }
    },
    zhHans: {
      nav: [
        {
          text: '产品',
          items: [
            { text: '主站', link: 'https://atomeocean.com' },
            { text: 'Cruise', link: 'https://cruise.atomeocean.com' }
          ]
        }
      ],
      editLink: {
        // :path 已包含语言子目录（如 zhHans/xxx.md），文件链接用 blob 而非 tree
        pattern: `${REPO}/blob/main/docs/:path`,
        text: '在 GitHub 上编辑此页'
      },
      lastUpdated: {
        text: '更新于',
        formatOptions: { dateStyle: 'short', timeStyle: 'short' }
      }
    }
  }
};
