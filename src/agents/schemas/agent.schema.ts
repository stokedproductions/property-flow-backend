import * as mongoose from 'mongoose';

// TODO ADD REFERENCE TO ORGANISATION

export const AgentSchema = new mongoose.Schema({
    _id: String,
    firstName: String,
    lastName: String,
    email: String,
    contactNumber: String,
    profileImageUrl: String,
    organisation: String,
})