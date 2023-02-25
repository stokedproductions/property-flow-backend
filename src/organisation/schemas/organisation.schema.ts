import * as mongoose from 'mongoose';

export const OrganisationSchema = new mongoose.Schema({
    _id: String,
    name: String,
    logoUrl: String,
    address: String,
    description: String,
})