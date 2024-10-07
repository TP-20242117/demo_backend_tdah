import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class EvaluationsService {
  private prisma = new PrismaClient();

  async createStroopTask(data: { patientId: number; responseTime: number; correctAnswers: number; errors: number }) {
    return this.prisma.stroopTask.create({ data });
  }

  async createCPT(data: { patientId: number; reactionTime: number; omissionErrors: number; commissionErrors: number }) {
    return this.prisma.continuousPerformanceTask.create({ data });
  }

  async createSST(data: { patientId: number; reactionTime: number; correctResponses: number; failures: number; omittedArrows: number }) {
    return this.prisma.stopSignalTask.create({ data });
  }
}
