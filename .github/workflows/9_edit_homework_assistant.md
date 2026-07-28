---
name: 编辑代写信息
about: Edit Homework Assistant information
title: ''
labels: 'homework-assistant'
assignees: ''
createdDate: 2025-09-15
---
## User story
<!--
 Brief description of the task
 记录一个代写的信息，方便用户搜索和查找
-->
需要更新的文件是`homework-assistant-wechat.json`

一个作业代写信息的json模板如下

```json5
    {
      "description": "作业代写微信号",
      "initpinyin": "ARZX",
      "labels": [
        "english label",
        "中文标签"
      ],
      "mobiles": [
        "123-345-6789"
      ],
      "nickname": "安然自醒", // 微信昵称
      "remark": "vyv群加的作业代写", // 微信备注
      "source": 14,
      "starred": false,
      "wechatid": "du76580" // 微信号
    }
```

可以从微信通讯录中导出，缺失的字段可以手动补充默认值
## Acceptance Criteria
<!--
    Things that need to be completed
    AKA Definition of Done
-->
- [ ] 完成json模板

## Prerequisites (if any)
<!--
- [ ] not ready
- [x] ready
-->


## Testing steps + data (if available)
- 本地测试显示效果
- 通过github自动编译

## Follow-up work (if applicable)