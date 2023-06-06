create table user (
    id bigint auto_increment comment '编号' primary key,
    name varchar(50) not null comment '用户名',
    password varchar(100) not null comment '密码',
    create_time timestamp default CURRENT_TIMESTAMP not null comment '创建时间',
    delete_flag tinyint default 0 not null comment '是否删除  -1：已删除  0：正常',
    status tinyint default 1 not null comment '状态  0：禁用   1：正常',
    update_by varchar(50) null comment '更新人',
    update_time datetime null comment '更新时间',
    nick_name varchar(150) null comment '昵称',
    avatar varchar(150) null comment '头像',
    email varchar(100) null comment '邮箱',
    constraint name unique (name)
) comment '用户';