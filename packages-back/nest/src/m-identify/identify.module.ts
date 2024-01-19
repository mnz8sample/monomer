import { Module } from '@nestjs/common';
import { IdentifyMonomerService } from './identify.service';
import { IdentifyMonomerController } from './identify.controller';

@Module({
  providers: [IdentifyMonomerService],
  controllers: [IdentifyMonomerController],
})
export class IdentifyMonomerModule {}
