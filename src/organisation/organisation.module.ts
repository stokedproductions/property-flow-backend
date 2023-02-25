import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganisationService } from './organisation.service';
import { OrganisationController } from './organisation.controller';
import { OrganisationSchema } from './schemas/organisation.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Organisation', schema: OrganisationSchema}])],
  controllers: [OrganisationController],
  providers: [OrganisationService]
})
export class OrganisationModule {}
