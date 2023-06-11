create table user (
    `id` bigint AUTO_INCREMENT comment '编号' PRIMARY KEY,
    `account` varchar(50) NOT NULL comment '账号',
    `password` varchar(100) NOT NULL comment '密码',
    `create_time` datetime default CURRENT_TIMESTAMP NOT NULL comment '创建时间',
    `delete_flag` tinyint default 0 NOT NULL comment '是否删除  -1：已删除  0：正常',
    `status` tinyint default 1 NOT NULL comment '状态  0：禁用   1：正常',
    `update_by` varchar(50) null comment '更新人',
    `update_time` datetime null comment '更新时间',
    `nick_name` varchar(150) null comment '昵称',
    `avatar` varchar(150) null comment '头像',
    `email` varchar(100) null comment '邮箱',
    constraint account unique (account)
) comment '用户';