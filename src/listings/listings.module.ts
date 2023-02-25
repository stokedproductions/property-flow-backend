import { Module } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { ListingsController } from './listings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ListingSchema } from './schemas/listing.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Listing', schema: ListingSchema}])],
  controllers: [ListingsController],
  providers: [ListingsService]
})
export class ListingsModule {}
