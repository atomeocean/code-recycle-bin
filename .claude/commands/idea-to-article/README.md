# /idea-to-article 使用说明

把一些零散的想法 / 笔记 / 草稿主题，变成 `docs/zhHans/` 下一篇**新文章的骨架（skeleton）**。

命令文件：[idea-to-article.md](../idea-to-article.md)

## 这个命令会做什么

1. **提炼想法**——从你给的内容里抽出核心主题和各个子要点，每一簇要点对应一个 `##` 小节。
2. **查找存放位置（复用 find-or-add-logbook-docs 技能）**——按目录名 / 文件名、H1 标题与 frontmatter、正文内容三种方式
   搜索 `docs/zhHans/`，把所有相关已有文档以可点击链接列出（方便你直接在已有页面上补充），
   若没有匹配则按项目目录规范推荐最佳新路径。
3. **确定目标路径**——若已有强相关文档，会先问你是**扩写现有文档**还是**新建同级文章**；
   路径不明确时也会先和你确认。
4. **新建分支**——写任何文件前先从当前分支切出 `idea/<主题-kebab-case>` 分支，绝不直接写 `main`。
5. **生成骨架文件**——写好 frontmatter（`title`、`description`、`outline: deep`）、H1、一句话引言，
   把你的想法按小节标题组织进去（**保留你的原话**），需要补充处留 `<!-- TODO: ... -->` 标记。

## 怎么用

显式调用 `/idea-to-article`，把想法 / 笔记作为参数传入。例如：

```
/idea-to-article 我想写一篇关于 H1B 境外激活回美注意事项的文章，要点：出境前材料、使领馆面签、入境和 I-94 校对
```

可选：同时指定希望的存放路径或切入角度；不指定时 Claude 会先列出相关文档再和你确认。

不带参数直接运行 `/idea-to-article` 时，会先反问要处理的想法。

> 注意：这是一个显式命令，不再像技能（Skill）那样根据对话内容自动触发，需要手动输入 `/idea-to-article`。

## 产出要点

- **只搭骨架，不写成稿**——忠实保留你的想法原话，**不杜撰**法条、数字、日期，缺内容的地方留 `TODO`。
- 默认只产出**一篇**文章；想法明显跨多个主题且你要求时才拆分。
- **不写 `createdDate` / `lastUpdated`**——由 `update-frontmatter.yml` CI 在 PR 时自动补全。
- 不包含 `<LicenseNotice />`、免责声明区块或 emoji。
- 改动留在分支上，**未经你同意不会 commit / push / 开 PR**。

## 后续可接的工具

- `gen-description` 技能——填写 / 完善 `description` frontmatter。
- `/translate-to-en` 命令——内容填好后镜像到 `docs/en/`。

完整步骤与骨架范例见 [idea-to-article.md](../idea-to-article.md)。
