---
title: 内容放置指南
description: 新增文章应放在 docs/zhHans 下哪个目录的说明
createdDate: 2026-06-13
lastUpdated: 2026-07-16
outline: deep
---

# 内容放置指南

本指南帮助贡献者决定**一篇新文章应该放进 Logbook 的哪个目录**。

## 决策顺序

1. **先选仓库**：用[根据内容选择仓库](/guide/repo-select.md)确认这篇内容确实属于 Logbook（而不是 Job Compass、内部仓库或技术仓库）。
2. **再选目录**：确认属于 Logbook 后，用下方的「目录速查表」选择对应目录；遇到拿不准的情况，参考「易混淆场景」。
3. **最后看写法**：目录确定后，按[VitePress 写作规范](/guide/contribute-note/vitepress-knowledge/index.md)处理 frontmatter、i18n 等细节。

> [!TIP] 命名约定所有 Markdown 内容目录与文件统一使用 **kebab-case**（如 `work-visas/`、`getting-started.md`）。

## 目录速查表

下表覆盖 `docs/zhHans/` 下全部一级内容目录：

| 目录 | 适合放什么 | 主要子目录 |
| --- | --- | --- |
| `about-us/` | 公司介绍、企业价值观、联系方式、法律资质、办公室信息 | company-profile、contact-us、legal-credentials、office-information |
| `careers/` | 对外招聘、职位发布 | job-post |
| `guide/` | 操作指南 / how-to：工单系统、转账方式、服务介绍、轻量工作手册、Staff Page 制作、Obsidian、贡献者经验 | issue-system、transaction、service、light-weight-work、staff-page、obsidian、contribute-note、author-list |
| `life-in-atomeocean/` | 在美生活相关：闲聊 / blog、生活技巧、团购、二手交易、转租、法律纠纷 | chit-chat、daily-life-tricks、group-buy、pre-owned-trade、sublease、legal-conflict |
| `news/` | 公司新闻、移民资讯（时效性动态） | immigration |
| `payroll-and-tax/` | 工资发放、税务、会计、计算公式、定价、汇率、USCIS payroll | accounting、employee-tax、employer-tax、formula、payroll-support、pricing、rmb-to-usd、uscis-payroll |
| `policy-document/` | 政策与条款：客户沟通条款、LCA 公示、服务交付标准、员工政策、标准文档 | customer-communication-terms、lca-file-public-post、service-deliverables、staff、standard-document |
| `solutions/` | 按身份（OPT / STEM OPT / CPT / H1b）打包的轻量工作解决方案 | audit、maintain |
| `static-page/` | 静态落地页 / 特殊页面 | — |
| `team-information/` | 团队成员页面 | staff、alumni、light-weight-team-information、team-util |
| `work-visas/` | 工作签证知识库（流程、规则、参考资料） | cpt、opt、stem-opt、h1b、o1、green-card、international-travel、resource |

> [!WARNING] `_includes/` 不是文章目录 `_includes/` 存放被其他页面引用的可复用 Markdown 片段，不要把独立文章放进去。

## 易混淆场景

| 内容 | 放这里 | 不要放这里 |
| --- | --- | --- |
| 签证知识 / 流程 / 规则 | `work-visas` | ~~`news/immigration`~~ |
| 时效性的签证 / 移民**动态** | `news/immigration` | ~~`work-visas`~~ |
| 公司**给员工**发工资 / payroll 机制 / 税务 | `payroll-and-tax` | ~~`guide/transaction`~~ |
| **向 Atomeocean** 付款 / 收款转账 | `guide/transaction` | ~~`payroll-and-tax`~~ |
| Atomeocean **服务介绍** | `service` | ~~`solutions`~~ |
| 按**身份打包**的解决方案 | `solutions` | ~~`service`~~ |
| 员工**个人页面** | `team-information/staff` | ~~`guide/staff-page`~~ |
| **如何制作**员工页面 | `guide/staff-page` | ~~`team-information/staff`~~ |
| **规则 / 条款**性内容 | `policy-document` | ~~`guide`~~ |
| **操作步骤**（how-to） | `guide` | ~~`policy-document`~~ |
| 对外**招聘** | `careers` | ~~`news`~~ |
| 公司**新闻** | `news` | ~~`careers`~~ |

## 相关链接

- [根据内容选择仓库](/guide/repo-select.md) —— 先决定文章属于哪个仓库
- [VitePress 写作规范](/guide/contribute-note/vitepress-knowledge/index.md) —— frontmatter、i18n 文件结构等写法
