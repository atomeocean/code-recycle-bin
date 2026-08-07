---
title: Templater 插件
outline: deep
createdDate: 2025-03-11
lastUpdated: 2025-12-14
---

# 在Obsidian中使用Templater插件

## **什么是 Templater？**

[Templater](https://github.com/SilentVoid13/Templater) 是 **Obsidian** 的一款 **高级模板管理插件**，可以极大提升 Markdown 文档的自动化和效率。

如果你希望：

- **快速创建标准化笔记**（如每日日志、项目计划、客户管理等）
- **自动填充动态内容**（如日期、时间、文件名、YAML 元数据）
- **使用 JavaScript 实现更复杂的逻辑**（如自动生成编号、从 API 获取数据）

那么 **Templater** 将是你的最佳选择！🚀

## **为什么要使用 Templater？**

Templater 比 Obsidian **内置模板功能** 更加强大，支持：

- **动态变量**（如当前日期、时间、文件名等）
- **基于 YAML Frontmatter 的数据填充**
- **跨笔记引用、自动创建新笔记**
- **使用 JavaScript 进行逻辑运算**（如自动编号、计算时间间隔）
- **调用外部 API**（如自动获取天气、股票信息、日历事件等）

## **安装 Templater**

1. **打开 Obsidian**，点击左下角的 **⚙️ "Settings"（设置）**。
2. 选择 **"Community Plugins"（社区插件）**，然后点击 **"Browse"（浏览）**。
3. 在搜索框输入 **"Templater"**，找到插件后点击 **"Install"（安装）**。
4. 安装完成后，点击 **"Enable"（启用）**。
5. 在 **Settings → Templater** 配置 **模板文件夹路径**（如 `Templates/`）。

💡 **建议**：创建 `Templates/` 目录来存放所有模板，以便管理。

## **Templater 基础用法**

### **1. 使用 Templater 变量**

在模板文件中，可以使用 **动态变量**，例如：

```markdown
---
创建时间: <% tp.date.now("YYYY-MM-DD HH:mm") %>
文件名: <% tp.file.title %>
---
```

## 引用

- [Obsidian 达人成长之路 #5：使用 Templater 减少重复工作，提高效率](https://juejin.cn/post/7381347654767804425)
