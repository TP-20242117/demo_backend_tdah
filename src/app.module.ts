import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { EvaluationsModule } from './evaluations/evaluations.module';

@Module({
  imports: [PatientsModule, EvaluationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
