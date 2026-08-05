# /chatlog-to-case 使用说明

把一段对话（邮件往来或聊天记录）整理成 `docs/zhHans/` 下的一篇案例页面，
用 `<WechatLog>` 组件还原对话过程。

命令文件：[chatlog-to-case.md](../chatlog-to-case.md)

## 这个命令会做什么

1. 解码 / 解析输入：`.eml` 邮件（含 base64 编码、嵌套引用的回复链）用 Python 标准库解出正文，粘贴的文本直接解析。
2. 把会话整理成**从旧到新**的顺序，去掉引用里重复的内容，并把每条发言归到 `client`（我）或 `support`（atomeocean）。
3. **默认脱敏**：去掉客户真实姓名与个人邮箱；对会渲染到公开站点的密码 / 解锁码做隐去处理；保留公司邮箱与 title、日期、报价等案例核心信息。
4. 生成数据文件 `docs/assets/json/wechat-log-json/<slug>.json`。
5. **推荐存放路径**（按内容领域映射到最精确的子目录），不明确处先和你确认。
6. 写出 markdown 案例页：`## 背景` → `## 整理`（要点总结）→ `## 客服处理记录` + `<WechatLog jsonUrl="<slug>" />`。

组件已全局注册、JSON 目录用通配符加载，新文件会被自动识别，页面也会自动进入侧边栏，无需改任何配置。

## 怎么用

显式调用 `/chatlog-to-case`，把 `.eml` 路径、粘贴的聊天记录，或范围/路径说明作为参数传入。例如：

```
/chatlog-to-case 读一下这个邮件 /Users/.../xxx.eml，把其中背景调查的部分整理成一篇案例
```

或直接粘贴聊天记录作为参数。可选：

- 指定只整理对话的某一部分（如「只要背调那段」）。
- 指定存放路径或是否保留真实姓名（默认脱敏）。

不带参数直接运行 `/chatlog-to-case` 时，会先反问要处理的 `.eml` 路径或聊天记录。

> 注意：这是一个显式命令，不再像技能（Skill）那样根据对话内容自动触发，需要手动输入 `/chatlog-to-case`。

## 产出要点

- `sender` 只能是 `client` 或 `support`；时间统一为 `YYYY-MM-DD HH:MM`。
- markdown 里的 `jsonUrl` 必须与 JSON 文件名（去掉 `.json`）一致。
- 不发布任何有效密码；公开页面里的密码值一律隐去。

参考范例见 [chatlog-to-case.md](../chatlog-to-case.md) 末尾（背景调查 `.eml` → `opt-hireright-background-check-case`）。
