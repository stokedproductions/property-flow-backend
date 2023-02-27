import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { Listing } from './interfaces/listing.interface';

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Post()
  create(@Body() createListingDto: CreateListingDto) : Promise<Listing> {
    return this.listingsService.create(createListingDto);
  }

  @Get()
  findAll(@Query() query) : Promise<Listing[]>{
    // If Org Id is given only show there listing else send back all agents
    if (Object.keys(query).length && query.hasOwnProperty('organisationID')) {
      return this.listingsService.findAllForGivenOrgID(query['organisationID']);
    }
    else if (Object.keys(query).length && query.hasOwnProperty('agentID')) {
      return this.listingsService.findAllForGivenAgentID(query['agentID']);
    }
    return this.listingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) : Promise<Listing> {
    return this.listingsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() 
    updateListingDto: UpdateListingDto) :  Promise<Listing> {
    return this.listingsService.update(id, updateListingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) : Promise<Listing> {
    return this.listingsService.remove(id);
  }
}
