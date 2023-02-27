import { Schema as MongooseSchema } from 'mongoose';

export class CreateAgentDto {
    private readonly _id: string;
    private readonly firstName: string;
    private readonly lastName: string;
    private readonly email: string;
    private readonly contactNumber: string;
    private readonly profileImageUrl: string;
    private readonly organisation: MongooseSchema.Types.ObjectId;
}
