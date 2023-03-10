import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organisation } from 'src/organisation/interfaces/organisation.interface';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { Agent } from './interfaces/agent.interface';

@Injectable()
export class AgentsService {
  constructor(
    @InjectModel('Agent') private readonly AgentModel:Model<Agent>,
    @InjectModel('Organisation') private readonly OrganisationModel:Model<Organisation>) {}

  async create(createAgentDto: CreateAgentDto) : Promise<Agent> {
    const newAgent = new this.AgentModel(createAgentDto);
    return await newAgent.save();
  }

  async findAll(): Promise<Agent[]> {
    return await this.AgentModel.find();
  }

  async findAllForGivenOrgID(orgId: string) : Promise<Agent[]> {
    const org = await this.OrganisationModel.findById(orgId);
    // if there is no org to match the qs we will return null so we get an empty result
    return org ? await this.AgentModel.find( { "organisation": org }) : [];
  }

  async findOne(id: string): Promise<Agent> {
    return await this.AgentModel.findOne({ _id: id });
  }

  async update(id: string, updateAgentDto: UpdateAgentDto): Promise<Agent> {
    return await this.AgentModel.findByIdAndUpdate(id, updateAgentDto, {new : true});
  }

  async remove(id: string): Promise<Agent> {
    return await this.AgentModel.findByIdAndRemove(id);
  }
}
