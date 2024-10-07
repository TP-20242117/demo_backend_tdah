import { ApiProperty } from '@nestjs/swagger';

export class CptDto {
  @ApiProperty({ example: 250, description: 'Average reaction time in ms' })
  reactionTime: number;

  @ApiProperty({ example: 1, description: 'Number of omission errors' })
  omissionErrors: number;

  @ApiProperty({ example: 3, description: 'Number of commission errors' })
  commissionErrors: number;

  @ApiProperty({ example: 1, description: 'ID of the patient' })
  patientId: number;
}
