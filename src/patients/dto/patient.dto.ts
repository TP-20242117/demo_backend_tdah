// src/patients/dto/create-patient.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientDto {
  @ApiProperty({ example: true, description: 'Indicates if the patient has ADHD' })
  hasAdhd: boolean;
}
