### alpha

nest n -s -p pnpm monomer
ncu -i
add monomer.drawio.svg .editorconfig

### docker

add docker-configure\docker-compose.yaml
docker-compose up -d

### typeorm mysql2

pnpm i @nestjs/typeorm typeorm mysql2

### manager user

nest g module user managers
create user.entity.ts user.dto.ts
nest g service user managers
nest g controller user managers

### 统一接口返回

nest g itc success global
nest g f failure global

### 认证与授权

pnpm i @nestjs/jwt

nest g module authentication
nest g module authorization

### 认证

nest g service authentication
nest g controller authentication
nest g guard authentication

### 全局身份验证

nest g decorator public-api authentication --flat

## nest cli

`--flat` 不要为元素生成文件夹。
