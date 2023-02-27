import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { Agent } from './interfaces/agent.interface';

@Controller('agents')
export class AgentsController {
  constructor(private readonly agentsService: AgentsService) {}

  @Post()
  create(@Body() createAgentDto: CreateAgentDto): Promise<Agent> {
    return this.agentsService.create(createAgentDto);
  }

  @Get()
  findAll(@Query() query) : Promise<Agent[]> {
    // If Org. Id is given only show there agents else send back all agents
    if (Object.keys(query).length && query.hasOwnProperty('organisationID')) {
      return this.agentsService.findAllForGivenOrgID(query['organisationID']);
    }
    return this.agentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Agent> {
    return this.agentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgentDto: UpdateAgentDto) 
    : Promise<Agent> {
    return this.agentsService.update(id, updateAgentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) : Promise<Agent> {
    return this.agentsService.remove(id);
  }
}
