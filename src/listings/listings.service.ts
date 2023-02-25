import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { Listing } from './interfaces/listing.interface';

@Injectable()
export class ListingsService {
  constructor(@InjectModel('Listing') private readonly listingModel:Model<Listing>) {}

  async create(createListingDto: CreateListingDto) : Promise<Listing> {
    const newListing = new this.listingModel(createListingDto);
    return await newListing.save();
  }

  async findAll(): Promise<Listing[]> {
    return await this.listingModel.find();
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
