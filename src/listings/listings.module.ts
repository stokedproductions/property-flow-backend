import { Module } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { ListingsController } from './listings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ListingSchema } from './schemas/listing.schema';
import { AgentSchema } from 'src/agents/schemas/agent.schema';
import { OrganisationSchema } from 'src/organisation/schemas/organisation.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Listing', schema: ListingSchema },
    { name: 'Agent', schema: AgentSchema }, 
    { name: 'Organisation', schema: OrganisationSchema }
  ])],
  controllers: [ListingsController],
  providers: [ListingsService]
})
export class ListingsModule {}
