import { ApiProperty } from '@nestjs/swagger';

export class SstDto {
  @ApiProperty({ example: 220, description: 'Average reaction time in ms' })
  reactionTime: number;

  @ApiProperty({ example: 8, description: 'Number of correct responses' })
  correctResponses: number;

  @ApiProperty({ example: 4, description: 'Number of failures' })
  failures: number;

  @ApiProperty({ example: 2, description: 'Number of omitted arrows' })
  omittedArrows: number;

  @ApiProperty({ example: 1, description: 'ID of the patient' })
  patientId: number;
}
