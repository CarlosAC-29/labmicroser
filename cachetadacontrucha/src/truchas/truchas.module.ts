import { Module } from '@nestjs/common';
import { TruchasController } from './truchas.controller';

@Module({
    controllers: [TruchasController],
})
export class TruchasModule {}
