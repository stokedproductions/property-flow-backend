import * as mongoose from 'mongoose';

export const ListingSchema = new mongoose.Schema({
    _id : String,
    agent : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agent',
    },
    title : String,
    description : String,
    status : String,
    organisation : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organisation',
    },
    listingType : String,
    listingSector : String,
    unit : {
        bedrooms : String,
        bathrooms : String,
        parking : String,
        price : String,
    },
    images : [],
})