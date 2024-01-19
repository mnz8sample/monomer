## HeidiSQL 导入 sql 文件

先在 HeidiSQL 设置编码 utf-8 在插入数据，永久设置 mysql utf-8 还是需要重新设置。

HeidiSQL version 11.3

## mysql 字符集永久设置为 utf-8

修改文件 `etc/my.cnf` 设置以下内容

```
[mysqld]
character-set-server=utf8
[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
```

重启

## 连接 docker 中的 mysql

`docker ps`

`docker exec -it <container_name or container_id> bash`

`mysql -u root -p`

## 如何退出 Docker Exec 命令

键入“ exit ”命令或按“ Ctrl + D ”

[如何使用 Docker Exec 命令？](https://open.alipay.com/portal/forum/post/141701043)

## mysql 字符集

- 查看 mysql 数据库服务器和数据库字符集

  `show variables like '%character%';`

  `show variables like 'collation%';`

- 查看 mysql 所支持的字符集

  `show charset;`
