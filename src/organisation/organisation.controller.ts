import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { UpdateOrganisationDto } from './dto/update-organisation.dto';
import { Organisation } from './interfaces/organisation.interface';

@Controller('organisation')
export class OrganisationController {
  constructor(private readonly organisationService: OrganisationService) {}

  @Post()
  create(@Body() createOrganisationDto: CreateOrganisationDto) {
    return this.organisationService.create(createOrganisationDto);
  }

  @Get()
  findAll() : Promise<Organisation[]> {
    return this.organisationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) : Promise<Organisation> {
    return this.organisationService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrganisationDto: CreateOrganisationDto) 
    : Promise<Organisation> {
    return this.organisationService.update(id, updateOrganisationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Organisation> {
    return this.organisationService.remove(id);
  }
}
