import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { EvaluationsModule } from './evaluations/evaluations.module';
import { TestApiModule } from './test-api/test-api.module';

@Module({
  imports: [PatientsModule, EvaluationsModule, TestApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
