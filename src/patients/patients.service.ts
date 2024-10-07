import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PatientsService {
  private prisma = new PrismaClient();

  async createPatient(hasAdhd: boolean) {
    return this.prisma.patient.create({
      data: {
        hasAdhd,
      },
    });
  }

  async getPatient(id: number) {
    try {
      const patient = await this.prisma.patient.findUnique({
        where: { id },
        include: {
          stroopTasks: true,
          cptTasks: true,
          sstTasks: true,
        },
      });
  
      if (!patient) {
        throw new NotFoundException(`Patient with ID ${id} not found`);
      }
  
      return patient;
    } catch (error) {
      console.error(`Error retrieving patient with ID ${id}:`, error);
      throw new Error(`Failed to retrieve patient: ${error.message}`);
    }
  }
  
  async getAllPatients() {
    return this.prisma.patient.findMany({
      include: {
        stroopTasks: true,
        cptTasks: true,
        sstTasks: true,
      },
    });
  }

  async deletePatient(id: number) {
    try {
      const patient = await this.prisma.patient.findUnique({ where: { id } });
      
      if (!patient) {
        throw new NotFoundException(`Patient with ID ${id} not found`);
      }
  
      return this.prisma.patient.delete({ where: { id } });
    } catch (error) {
      console.error(`Error deleting patient with ID ${id}:`, error);
      throw new Error(`Failed to delete patient: ${error.message}`);
    }
  }
  
}
