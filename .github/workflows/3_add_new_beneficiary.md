---
name: Add New Beneficiary
about: add a new h1b beneficiary file to the logbook
title: ''
labels: logbook, h1b, beneficiary
assignees: ''
---
## User story

<!--
    Brief description of the task
    e.g. As a developer/product manager/customer, I want ...
    描述需求的内容
-->


## Acceptance Criteria
<!--
    Things that need to be completed
    AKA Definition of Done
    在 - [ ] 后添加期待在这个任务中完成的内容
    创建issue后这个issue会被自动添加标签'admin'，并自动添加到bravo project中
-->
- [ ] 

## Prerequisites (if any)
<!--
- [ ] not ready
- [x] ready
-->

### 添加新受益人json文件

位置在`docs/assets/json/beneficiary-json`下，文件名为`{beneficiary-name}.json`，内容如下：

```json
{
  "firstName": "",
  "lastName": "",
  "middleName": "",
  "gender": "",
  "dateOfBirth": "",
  "isMaster": "",
  "countryOfBirth": "China",
  "countryOfCitizenship": "China",
  "passportNo": "",
  "passportIssuanceCountry": "China",
  "passportExpirationDate": "",
  "referredBy": "",
  "referCode": "",
  "email": "",
  "plan": ""
}
```

### 添加beneficiary专属密码
路径为
```text
docs/.vitepress/theme/constants/passwords.ts
```

### 添加新受益人markdown文件

添加路径如下
```text
docs/zhHans/work-visas/h1b/h1b-documents/beneficiary-file
```

文件名为`{beneficiary-name}-file.md`，内容如下：

```markdown
---
passwordKey: 
lastUpdated: 
description:
prev: false
next: false
sidebar: false
plan:
email:
---
# Atomeocean H1b 信息 FY2026

> [!CAUTION] 文件仅供H1b阶段使用 
> 仅H1b Beneficiary本人可通过密码查看并确认信息准确
> 如需要信息更新请联系[微信或discord](/about-us/contact)

如果信息为空，请参考[提交受益人信息](/work-visas/h1b/h1b-documents/public-file/submit-beneficiary-info)的流程将信息发给Atomeocean。

<PasswordReveal>

## H1b 律师信息同步

Atomeocean律师团队已为您存储并确认了以下基础信息。若有任何差异或需要更新之处，请及时联系我们。

<BeneficiaryInformation beneficiaryJsonPath="" />

> [!NOTE] 信息保密
> 该信息仅供本人查看，涉及护照、个人身份等敏感数据，请注意保密。

## 其他个人信息备注

<BeneficiaryIssues />

</PasswordReveal>

## 备注 / 说明

- **隐私保护**：本页面包含个人隐私信息，仅限本人及授权Atomeocean移民律师查看，禁止外传。
- **法律免责声明**：Atomeocean 并非律师事务所，本页面所有信息仅用于协助安排H1B相关服务。
- **联系我们**：如有紧急情况，请通过[企业微信](/about-us/contact)与我们联系。

```

在markdown frontmatter部分添加
1. 密码passwordKey，用于beneficiary自己解锁信息
2. email，用于推送文件变化通知
3. beneficiaryJsonPath参数，参考上一步json文件路径

## Testing steps + data (if available)

## Follow-up work (if applicable)
