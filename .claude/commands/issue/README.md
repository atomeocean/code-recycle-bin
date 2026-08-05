# /issue:new-to-backlog 使用说明

用于把一段简单描述定稿为结构化的 GitHub Feature Request issue。

命令文件：[new-to-backlog.md](./new-to-backlog.md)

## 怎么用

显式调用 `/issue:new-to-backlog`，把简单描述作为参数传入。例如：

```
/issue:new-to-backlog 受益人页面加一个 H1b 申请进度展示
```

若提示中包含 GitHub issue 链接，Claude 会先停下来请你直接粘贴该 issue 的 Markdown 原文，而不会去抓取链接。

不带参数直接运行 `/issue:new-to-backlog` 时，会先反问要处理的描述。

> 注意：这是一个显式命令，不再像技能（Skill）那样根据对话内容自动触发，需要手动输入 `/issue:new-to-backlog`。

## 产出要点

- 全部正文使用简体中文；专有名词、字段名、代码可保留英文。
- 输出文件：`.claude/github-issues/feature-<kebab-slug>-<YYYYMMDD>.md`，无 frontmatter。
- 报告中会列出所有推断（角色、动机等），方便你在粘贴到 GitHub 前核对。
