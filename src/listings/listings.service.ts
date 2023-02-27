import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agent } from 'src/agents/interfaces/agent.interface';
import { Organisation } from 'src/organisation/interfaces/organisation.interface';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { Listing } from './interfaces/listing.interface';

@Injectable()
export class ListingsService {
  constructor(
    @InjectModel('Listing') private readonly listingModel:Model<Listing>,
    @InjectModel('Agent') private readonly AgentModel:Model<Agent>,
    @InjectModel('Organisation') private readonly OrganisationModel:Model<Organisation>
  ) {}

  async create(createListingDto: CreateListingDto) : Promise<Listing> {
    const newListing = new this.listingModel(createListingDto);
    return await newListing.save();
  }

  async findAll(): Promise<Listing[]> {
    return await this.listingModel.find().populate({path: 'organisation', select: '_id logoUrl'});
  }

  async findAllForGivenOrgID(orgId: string) : Promise<Listing[]> {
    const org = await this.OrganisationModel.findById(orgId);
    // if there is no org to match the qs we will return null so we get an empty result
    return org ? await this.listingModel.find( { "organisation": org }) : [];
  }

  async findAllForGivenAgentID(agentId: string) : Promise<Listing[]> {
    const agent = await this.AgentModel.findById(agentId);
    // if there is no agent to match the qs we will return null so we get an empty result
    return agent ? await this.listingModel.find( { "agent": agent }) : [];
  }

  async findOne(id: string): Promise<Listing> {
    return await this.listingModel.findOne({ _id: id });
  }

  async update(id: string, updateListingDto: UpdateListingDto) : Promise<Listing> {
    return this.listingModel.findByIdAndUpdate(id, updateListingDto, { new: true });
  }

  async remove(id: string) : Promise<Listing> {
    return await this.listingModel.findByIdAndRemove(id);
  }
}
