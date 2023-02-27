import { Module } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { AgentsController } from './agents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentSchema } from './schemas/agent.schema';
import { OrganisationSchema } from 'src/organisation/schemas/organisation.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Agent', schema: AgentSchema}, 
    { name: 'Organisation', schema: OrganisationSchema}
  ])],
  controllers: [AgentsController],
  providers: [AgentsService]
})
export class AgentsModule {}
