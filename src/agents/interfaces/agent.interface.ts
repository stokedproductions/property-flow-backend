import { Schema as MongooseSchema } from 'mongoose';
export interface Agent {
    _id?: string; // if we may not always have a _id when creating
    firstName: string;
    lastName: string;
    email?: string;
    contactNumber?: string;
    profileImageUrl?: string;
    organisation?: MongooseSchema.Types.ObjectId;
}
