import { PartialType } from '@nestjs/swagger';
import { CreateTestApiDto } from './create-test-api.dto';

export class UpdateTestApiDto extends PartialType(CreateTestApiDto) {}
