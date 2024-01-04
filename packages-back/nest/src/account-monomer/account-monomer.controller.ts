import { Controller, Body, Get, Post, Put, Delete, Param, UseGuards } from '@nestjs/common';
import { AccountMonomerService } from './account-monomer.service';
import { AccountMonomerDto } from './account-monomer.dto';
import { AccountMonomerEntity } from './account-monomer.entity';

// @UseGuards(AuthenticationGuard)
@Controller('account')
export class AccountMonomerController {
  constructor(private readonly accountService: AccountMonomerService) {}

  @Get('/')
  list(): Promise<AccountMonomerEntity[]> {
    return this.accountService.list();
  }

  @Post('/')
  create(@Body() createUserDto: AccountMonomerDto): Promise<AccountMonomerEntity> {
    return this.accountService.create(createUserDto);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() info: AccountMonomerEntity) {
    return this.accountService.update(id, info);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.accountService.remove(id);
  }

  @Get('/:id')
  info(@Param('id') id: number): Promise<AccountMonomerEntity> {
    return this.accountService.info(id);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: number) {
    return this.accountService.delete(id);
  }

  @Post('/batch')
  batch(@Body() batchParams: BatchParams) {
    const { operate, ids } = batchParams || {};

    if (operate === 'remove') {
      return this.accountService.removeBatch(ids);
    }

    if (operate === 'delete') {
      return this.accountService.deleteBatch(ids);
    }

    return;
  }
}

/**
 * RESTful
 *
 * REST (Representational state transfer) 表述性状态传输
 *
 * GET    /store    列出所有店铺
 * POST   /store    新建一个店铺
 * PUT    /store/id 更新某个指定店铺的信息（提供该店铺的全部信息）
 * DELETE /store/id 删除某个店铺
 * GET    /store/id 获取某个指定店铺的信息
 *
 * PATCH  /store/id 更新某个指定店铺的信息（提供该店铺的部分信息）
 * GET    /store/id/items    列出某个指定店铺的所有商品
 * DELETE /store/id/items/id 删除某个指定店铺的指定商品
 *
 * 批量删除
 *
 * POST   /store/batch Body: { 'delete': [1, 2, 3, 4, 5, 10, 42, 68, 99] }
 *
 * 不建议使用 DELETE，原因在于：根据 RFC 标准文档，DELETE 请求的 body 在语义上没有任何意义。
 * 事实上一些网关、代理、防火墙在收到 DELETE 请求后，会把请求的 body 直接剥离掉。
 */

interface BatchParams {
  operate: string;
  ids: number[];
}
