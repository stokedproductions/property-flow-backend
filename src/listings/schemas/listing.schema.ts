import * as mongoose from 'mongoose';

export const ListingSchema = new mongoose.Schema({
    // TODO REMOVE _id from scheme if we want it to autogenerate
    // but we need to use it when import data from data dump so we 
    // can keep ids already in the data
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