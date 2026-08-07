---
title: 选择仓库
description: 向Job Compass投稿
createdDate: 2024-11-27
lastUpdated: 2026-06-13
outline: deep
---

# 根据内容选择仓库

## 仓库选择示意图

```mermaid
flowchart TD
    A[分析文章内容类型] --> B[atomeocean内部信息?]
    B --> |是| C[跳转到内部仓库选择]
    B --> |否| D[是否和技术有关]
    D --> |是| E[跳转到技术仓库选择]
    D --> |否| F[是否和找工求职有关]
    F --> |是| G[选择job compass]
    F --> |否| H[选择logbook]

    click G href "#job-compass"
    click H href "#logbook"
```

## 网站地址

### job compass {#job-compass}

- [atomeocean找工求职](http://jobcompass.atomeocean.com/)
- github地址：[job-compass](https://github.com/atomeocean/job-compass)

### logbook {#logbook}

- [atomeocean航海日志](http://logbook.atomeocean.com/)
- github地址：[logbook](https://github.com/atomeocean/logbook)

## 下一步

选定仓库为 Logbook 后，参见[内容放置指南](/guide/contribute-note/content-placement.md)选择具体目录。
