import * as mongoose from 'mongoose';

export const AgentSchema = new mongoose.Schema({
    _id: String,
    firstName: String,
    lastName: String,
    email: String,
    contactNumber: String,
    profileImageUrl: String,
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organisation',
    },
})