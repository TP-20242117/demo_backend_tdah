import { Controller, Post, Get, Delete, Body, Param} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/patient.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Patients')
@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  @ApiBody({ type: CreatePatientDto })
  async createPatient(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.createPatient(createPatientDto.hasAdhd);
  }

  @Get()
  async getAllPatients() {
    return this.patientsService.getAllPatients();
  }

  @Get(':id')
  async getPatient(@Param('id') id: number) {
    return this.patientsService.getPatient(+id);
  }

  @Delete(':id')
  async deletePatient(@Param('id') id: number) {
    return this.patientsService.deletePatient(+id);
  }
}