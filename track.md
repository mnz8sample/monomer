nest n -s -p pnpm monomer
ncu -i
add monomer.drawio.svg .editorconfig

add docker-configure\docker-compose.yaml
docker-compose up -d

pnpm i @nestjs/typeorm typeorm mysql2

nest g module user managers
create user.entity.ts
nest g service user managers
nest g controller user managers
