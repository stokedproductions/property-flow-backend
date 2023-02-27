import { Schema as MongooseSchema } from 'mongoose';

export class CreateListingDto {
    private readonly _id : string;
    private readonly agent : MongooseSchema.Types.ObjectId;
    private readonly title : string;
    private readonly description : string;
    private readonly status : string;
    private readonly organisation : MongooseSchema.Types.ObjectId;
    private readonly listingType : string;
    private readonly listingSector : string;
    private readonly unit : {
        bedrooms : string;
        bathrooms : string;
        parking : string;
        price : string;
    }
    private readonly images : string[]
}
