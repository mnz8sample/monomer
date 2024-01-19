[TOC]

## nest cli

`--flat` 不要为元素生成文件夹。

## docker

add docker-configure\docker-compose.yaml

docker-compose up -d

## 用户

nest g module userByMonomer

nest g service userByMonomer

nest g controller userByMonomer

pnpm i @nestjs/typeorm typeorm mysql2

create user-by-monomer.entity.ts user-by-monomer.dto.ts

### 接口的统一返回

nest g itc success global-setting --flat

nest g f failure global-setting --flat

## 认证(authentication)

- identify by monomer

  nest g module identifyMonomer

  nest g service identifyMonomer

  nest g controller identifyMonomer

## 全局身份验证

nest g decorator public-api authentication --flat

## 授权(authorization)

nest g module authorize

## 重新调整结构

`pnpm i -D -w husky lint-staged prettier eslint eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser`

redux

redux-saga

redux-thunk

zustand

### 认证 登录

保持登录状态 sessionId token jwt(JSON Web Token)

权限管理

### token redis
