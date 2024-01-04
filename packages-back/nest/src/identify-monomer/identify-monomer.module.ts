import { Module } from '@nestjs/common';
import { IdentifyMonomerService } from './identify-monomer.service';
import { IdentifyMonomerController } from './identify-monomer.controller';

@Module({
  providers: [IdentifyMonomerService],
  controllers: [IdentifyMonomerController],
})
export class IdentifyMonomerModule {}
