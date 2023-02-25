import { Module } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { AgentsController } from './agents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentSchema } from './schemas/agent.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Agent', schema: AgentSchema}])],
  controllers: [AgentsController],
  providers: [AgentsService]
})
export class AgentsModule {}
