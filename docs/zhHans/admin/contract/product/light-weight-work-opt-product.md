---
title: 轻量工作产品 - OPT
description: 记录在admin中关于轻量工作OPT产品的接口contract
outline: deep
lastUpdated: 2026-05-06
createdDate: 2026-05-05
---
# 轻量工作产品 - OPT

记录在admin中关于轻量工作OPT产品的接口contract

## 前端 --> 后端 request URL

```http request
POST <api-domain-name>/admin/product/light-weight-work/opt
```

## 前端 --> 后端 request payload

```json5
{
  "candidateInfo": {
    "firstName": "Zhang",
    "lastName": "San",
    "email": "zhangsan@atomeocean.com"
  },
  "employmentInfo": {
    "employmentStartDate": "05/20/2025",
    "jobTitle": "Software Engineer",
    "jobType": 0
  },
  "productList": [
    {
      "name": "OPT",
      "priceInUsd": 470,
      "priceInCny": 3290,
      "currency": "CNY",
      "description": "Zhang San选择以OPT身份参与轻量工作项目，联系邮箱：zhangsan@atomeocean.com",
      "freeService": false
    }
  ],
  "paymentMethod": "ALIPAY",
  "formSummary": "姓名: Zhang San，联系方式：zhangsan@atomeocean.com"
}
```

### `employmentInfo` 字段说明

| 字段名                   | 类型       | 必填 | 说明                                           |
|-----------------------|----------|----|----------------------------------------------|
| `employmentStartDate` | `string` | 是  | 入职日期，格式为 `MM/DD/YYYY`，例如 `"05/20/2025"`      |
| `jobTitle`            | `string` | 是  | 职位名称，例如 `"Software Engineer"`                |
| `jobType`             | `number` | 是  | 工作类型，0: full-time，1: part-time，2: internship |

### `productList` 字段说明

该字段记录用户下单时所选择的所有产品信息

| 字段名           | 类型        | 必填 | 说明                              |
|---------------|-----------|----|-----------------------------------|
| `name`        | `string`  | 是  | 产品名称，固定传 `"OPT"`                 |
| `priceInUsd`  | `number`  | 是  | 服务费用（USD），免费服务传 `0`              |
| `priceInCny`  | `number`  | 是  | 服务费用（CNY），免费服务传 `0`              |
| `currency`    | `string`  | 是  | 实际结算货币，例如 `"USD"`、`"CNY"`        |
| `description` | `string`  | 是  | 服务详细描述，包含候选人联系邮箱及工作身份等关键信息        |
| `freeService` | `boolean` | 是  | 是否为免费服务；为 `true` 时表示免费，`false` 时为付费 |

### paymentMethod字段说明

用于表示用户选择的支付方式标识，目前仅支持`ALIPAY`支付方式

### formSummary字段说明

用于传递用户在下单表单中填写内容拼接生成的一段文本信息。该字段以字符串形式记录用户提交时的关键信息，便于后端进行存档和后续查看。

透传路径：前端传入 → 合约传递 → 后端接收 → 存入支付元数据 → 回调读取 → 业务处理

## 后端 --> 前端 response payload

返回支付宝支付链接，用于前端页面跳转

```json5
{
  "status": 100,
  "message": "操作成功",
  "data": "https://alipay/payment-link",
  "timestamp": "auto-generated-timestamp"
}
```
