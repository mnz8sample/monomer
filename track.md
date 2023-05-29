nest n -s -p pnpm monomer
ncu -i
add monomer.drawio.svg .editorconfig

add docker-configure\docker-compose.yaml
docker-compose up -d

pnpm i @nestjs/graphql @nestjs/apollo @apollo/server graphql
pnpm i @nestjs/typeorm typeorm pg

nest g module pokemon managers
nest g controller pokemon managers
nest g service pokemon managers
