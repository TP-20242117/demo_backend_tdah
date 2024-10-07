import { ApiProperty } from '@nestjs/swagger';

export class StroopTaskDto {
  @ApiProperty({ example: 200, description: 'Average response time in ms' })
  responseTime: number;

  @ApiProperty({ example: 10, description: 'Number of correct answers' })
  correctAnswers: number;

  @ApiProperty({ example: 2, description: 'Number of errors (wrong color chosen)' })
  errors: number;

  @ApiProperty({ example: 1, description: 'ID of the patient' })
  patientId: number;
}
