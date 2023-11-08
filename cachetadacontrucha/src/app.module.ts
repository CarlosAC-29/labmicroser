import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TruchasController } from './truchas/truchas.controller';
import { TruchasModule } from './truchas/truchas.module';

@Module({
  imports: [TruchasModule],
  controllers: [AppController, TruchasController],
  providers: [AppService],
})
export class AppModule {}
