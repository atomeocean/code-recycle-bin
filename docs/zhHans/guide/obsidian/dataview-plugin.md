---
title: DataView 插件
createdDate: 2025-03-11
lastUpdated: 2025-11-11
outline: deep
---

# 在Obsidian中使用 DataView 插件

## **什么是 DataView？**

[DataView](https://github.com/blacksmithgu/obsidian-dataview) 是 Obsidian 的一款强大插件，它可以让你**像数据库一样查询和管理 Markdown 文件**，通过简单的查询语法（类似 SQL）从笔记中提取数据，并以 **表格、列表、任务清单等形式展示**。

如果你希望在 Obsidian 中更高效地管理 **待办事项、阅读清单、项目进度、客户管理（CRM）、财务数据** 等，DataView 将是你的最佳选择。

## **为什么要使用 DataView？**

DataView **最大的优势** 在于 **自动化信息整理**，你无需手动维护目录或索引，而是可以**动态查询** Obsidian 笔记中的内容。

### **DataView 能做什么？**

- **📂 自动列出指定目录的文件**（如所有日记、所有客户档案）
- **📊 生成 Markdown 数据表**（如项目进度、财务记录）
- **✅ 展示所有待办事项**（整合所有文件中的 `- [ ]` 任务）
- **🔎 按标签、文件属性（YAML）、文件夹等方式查询数据**
- **📅 统计特定时间范围内的笔记数据**（如过去 30 天的日志）

## **安装 DataView**

1. **打开 Obsidian**，进入 **“设置”**（⚙️）。
2. 选择 **“社区插件”** → 点击 **“浏览”**。
3. 在搜索框中输入 **DataView**，点击 **“安装”**。
4. 安装完成后，点击 **“启用”**。

💡 **建议**：同时安装 **DataViewJS**，支持更高级的数据查询和 JavaScript 计算。

## **DataView 基本语法**

DataView 使用 `dataview` 代码块来执行查询。例如：

````markdown
```dataview
TABLE file.name, file.mtime
FROM "Projects"
WHERE file.mtime > date(today) - dur(7 days)
```
````
