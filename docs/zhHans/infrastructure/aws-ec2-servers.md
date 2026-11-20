---
title: 已废弃的 AWS EC2 服务器
description: 团队曾使用 AWS EC2 作为服务器，2026-11-20 确认已不再使用 AWS，本机 SSH 配置同步移除
---

# 已废弃的 AWS EC2 服务器

团队曾使用 AWS EC2（us-east-1）作为团队服务器。**截至 2026-11-20，团队已不再使用 AWS**，相关服务器均已不可访问，本机 `~/.ssh/config` 中的对应条目已移除，原配置归档如下。

## 原 SSH 配置

```ssh-config
Host team-server
  HostName ec2-54-226-197-234.compute-1.amazonaws.com
  User ubuntu
  IdentityFile ~/SshIdentityFiles/team-server-kp.pem

Host team-small-server
  HostName ec2-54-172-55-156.compute-1.amazonaws.com
  User ubuntu
  IdentityFile ~/SshIdentityFiles/team-small-server-kp.pem
```

| 别名                | 公网 IP        | 登录用户 |
| ------------------- | -------------- | -------- |
| `team-server`       | 54.226.197.234 | ubuntu   |
| `team-small-server` | 54.172.55.156  | ubuntu   |

## 下线情况

- 2026-11-20 排查 admin 前端（`admin.atomeocean.com`）生产故障时发现：两台机器的 22 / 80 端口均不可达，`admin.atomeocean.com` 的 Cloudflare DNS 记录也已被删除（权威 NS 返回 NXDOMAIN）。
- admin 前端的 GitHub Actions 部署流程是通过 SSH 把 `dist/` 上传到 `ubuntu@<FRONT_END_SERVER_HOST>:/home/ubuntu/admin-vue-folder`，推测部署目标是上面的某台 EC2，但没有核实。
- 实例的终止时间、终止原因以及 Cloudflare 记录的删除记录都已无从查证。

## 密钥

两台机器的 SSH 私钥都已作废，原文件归档在本仓库的 `server/` 目录：

| 别名                | 密钥文件                          |
| ------------------- | --------------------------------- |
| `team-server`       | `server/team-server-kp.pem`       |
| `team-small-server` | `server/team-small-server-kp.pem` |
