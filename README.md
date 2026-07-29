# Atomeocean 用不着的代码

## 特性

- 🌐 **国际化**：内置 [vitepress-i18n](https://github.com/jooy2/vitepress-i18n)，简体中文（`zhHans`）为默认语言、英文（`en`）开箱即用。
- 🧭 **自动侧边栏**：[vitepress-sidebar](https://github.com/jooy2/vitepress-sidebar) 按目录结构、文件标题、frontmatter 顺序自动生成，逐语言隔离。
- 🧩 **路径别名**：`@ao-components`、`@ao-utils` 等语义化别名。
- 📐 **Mermaid 图表**：内置 [vitepress-plugin-mermaid](https://github.com/emersonbottero/vitepress-plugin-mermaid)，已配置 CJK 字体。
- ✨ **格式规范**：Prettier 统一风格，Husky 在提交前自动检查。
- 🔍 **本地搜索** + 社交链接 + GitHub 社区健康文件（LICENSE、行为守则）。

## 快速开始

**提示：** 项目使用 **Node.js 24**。进入根目录执行 `nvm use` 会自动切换（通过 `.nvmrc`）。

```shell
nvm use            # 切换到 Node 24
npm run docs:dev   # 启动本地开发服务器
```

其他命令：

| 命令                   | 说明                                    |
| ---------------------- | --------------------------------------- |
| `npm run docs:dev`     | 本地开发（热更新）                      |
| `npm run docs:build`   | 构建到 `docs/.vitepress/dist`           |
| `npm run docs:preview` | 预览构建产物                            |
| `npm run format`       | 用 Prettier 格式化 `docs/` 与根目录文件 |
| `npm run format:check` | 只检查不修改（供 CI / pre-commit 使用） |

## 目录结构

```
.
├─ docs/
│  ├─ .vitepress/
│  │  ├─ config.ts               # 主配置（i18n / sidebar / 主题）
│  │  ├─ alias.ts                # 路径别名（与 tsconfig paths 对应）
│  │  ├─ config/
│  │  │  ├─ i18n.config.ts       # 国际化：语言、导航、editLink
│  │  │  └─ mermaid.config.ts    # Mermaid 图表配置
│  │  ├─ theme/
│  │  │  └─ index.ts             # 自定义主题入口（注册全局组件）
│  │  └─ tsconfig.json
│  ├─ zhHans/                    # 默认语言，访问路径省略 /zhHans 前缀
│  │  └─ index.md
│  ├─ en/                        # 英文，访问 /en/...
│  │  └─ index.md
│  ├─ assets/                    # 图标等静态资源（@ao-assets）
│  └─ public/                    # 原样拷贝到站点根的静态文件
├─ .github/                      # 社区健康文件 + CI（deploy 需自行启用）
├─ tsconfig.json
├─ .prettierrc / .prettierignore
├─ .nvmrc                        # Node 版本
└─ package.json
```

## 国际化说明

- 内容按语言分目录存放：`docs/zhHans/`、`docs/en/`。
- 默认语言的路径前缀通过 `config.ts` 的 `rewrites` 去掉（`/xxx` 而非 `/zhHans/xxx`）。
- 增删语言、修改导航栏与「编辑本页」链接，都在 [`docs/.vitepress/config/i18n.config.ts`](docs/.vitepress/config/i18n.config.ts)。


## 格式化

已在 Prettier 中配置好规则，提交前 Husky 会运行 `format:check`。手动格式化：

```shell
npm run format            # 格式化全部
npx prettier --write docs/zhHans/index.md   # 格式化单个文件
```

## License

见 [LICENSE](LICENSE)。
