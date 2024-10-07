// src/evaluations/evaluations.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { StroopTaskDto } from './dto/stroop_task.dto';
import { CptDto } from './dto/cpt.dto';
import { SstDto } from './dto/sst.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Evaluations')
@Controller('evaluations')
export class EvaluationsController {
  constructor(private readonly evaluationsService: EvaluationsService) {}

  @Post('stroop-task')
  @ApiBody({ type: StroopTaskDto })
  async createStroopTask(@Body() data: StroopTaskDto) {
    return this.evaluationsService.createStroopTask(data);
  }

  @Post('cpt')
  @ApiBody({ type: CptDto })
  async createCPT(@Body() data: CptDto) {
    return this.evaluationsService.createCPT(data);
  }

  @Post('sst')
  @ApiBody({ type: SstDto })
  async createSST(@Body() data: SstDto) {
    return this.evaluationsService.createSST(data);
  }
}
