import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultiesService } from './faculties.service.js';
import { FacultiesController } from './faculties.controller.js';
import { Faculty } from './entities/faculty.entity.js';

@Module({
  controllers: [FacultiesController],
  imports: [TypeOrmModule.forFeature([Faculty])],
  providers: [FacultiesService],
})
export class FacultiesModule { }
