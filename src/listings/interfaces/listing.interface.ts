import { Schema as MongooseSchema } from 'mongoose';

export interface Unit {
    bedrooms : string,
    bathrooms : string,
    parking : string,
    price : string,
}

// TODO SEE IF WE can make an enum for the listing type and listing Sector


export interface Listing {
    _id : string;
    agent : MongooseSchema.Types.ObjectId,
    title : string,
    description : string,
    status : string,
    organisation : MongooseSchema.Types.ObjectId,
    listingType : string,
    listingSector : string,
    unit : Unit,
    images : string[]
}
