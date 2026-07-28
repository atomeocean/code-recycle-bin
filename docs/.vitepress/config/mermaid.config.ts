import type { MermaidConfig } from 'mermaid';

/**
 * Mermaid 配置
 * https://github.com/emersonbottero/vitepress-plugin-mermaid
 *
 * !theme here works for light mode since dark theme is forced in dark mode
 */
export const mermaidConfig: MermaidConfig = {
  // 支持中文字符：使用支持 CJK 的字体族
  fontFamily:
    '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans CN", sans-serif',
  theme: 'base'
};
