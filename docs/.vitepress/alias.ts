import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url)); // => docs/.vitepress

/**
 * 路径别名（习惯用法：语义化 @ao-* 前缀）
 * 与 tsconfig.json 的 compilerOptions.paths 保持一致。
 * 新建对应目录后即可通过别名导入，例如：
 *   import Foo from '@ao-components/Foo.vue'
 */
export const alias = {
  '@ao-types': resolve(__dirname, 'theme/types'),
  '@ao-theme': resolve(__dirname, 'theme'),
  '@ao-utils': resolve(__dirname, 'theme/utils'),
  '@ao-composables': resolve(__dirname, 'theme/composables'),
  '@ao-components': resolve(__dirname, 'theme/components'),
  '@ao-constants': resolve(__dirname, 'theme/constants'),
  '@ao-config': resolve(__dirname, 'theme/config'),
  '@ao-assets': resolve(__dirname, '../assets')
};
