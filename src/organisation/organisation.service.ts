import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { Organisation } from './interfaces/organisation.interface';

@Injectable()
export class OrganisationService {
  constructor(@InjectModel('Organisation') private readonly OrganisationModel:Model<Organisation> ) {}
  private readonly orgsList:Organisation[] = [
    {
        "_id" : "5fd71dd63f9c98001131fd46",
        "name" : "RE/MAX-Property Associates (Table View)",
        "logoUrl" : "https://s3-eu-west-1.amazonaws.com/stream-images.remax.co.za/office/79/logo/propertyassociates.remax.co.za.png",
        "address" : "42 Blaauwberg Road, Table View, 7441",
        "description" : ""
    },
    {
        "_id" : "60ee916289cfca0011592430",
        "name" : "ClareMart",
        "logoUrl" : "https://s3-staging.flowliving.com/public/62f3cca1638b8a00111a3fdc",
        "address" : "",
        "description" : ""
    },
    {
        "_id" : "61261f4cbf386a0011c59d56",
        "name" : "RealNet RainMaker",
        "logoUrl" : "https://s3-staging.flowliving.com/public/61fd1b53e82f0a0011df8a15",
        "address" : "Boardwalk Office Park, Eros Street, Faerie Glen\r\nBlock 12, Ground Floor",
        "description" : "The RainMaker business comprises of a group of highly experienced Sales Executives (Team Leaders) with their Team Members (Sales and Rental Affiliates). \r\n\r\nMany of our Sales Executives are Principal estate agents (NQF5) who have successfully run their own estate agencies for many years. \r\n\r\nThe concept of the RainMaker business model is to create a strong business Platform for these individuals where they can operate as Independent Contractors, having the  best infrastructure, administrative and deal processing support, as well as working in collaboration with their fellow Independent Contractors (and their Teams) in order to create the maximum exposure for their Sellers and Buyers looking for professional and one-stop-shopping real estate services within selected territories.\r\n\r\nThe RainMaker model offers top performing estate agents who are invited onto the business Platform as Sales Executives the following:\r\n\r\n- A strong and well-respected household real estate name which has been doing business since 2001; \r\n\r\n- The freedom to operate as Independent Contractors and grow their own teams under the banner of a reputable local and national brand name with all the support and resources they need to achieve optimal success;\r\n\r\n- No area restrictions within the defined franchise territory;\r\n\r\n- Quality technology, systems and administrative support services;\r\n\r\n- Professional and personalised profile webpage within the RealNet website;\r\n\r\n- Integrated Target Marketing which includes Social Media marketing assistance;\r\n\r\n- Access to Bank Assisted Sale mandates through RealNet's accreditation at the four major Banks;\r\n\r\n- The ability to assist Sellers who might be experiencing financial distress and have fallen behind on their mortgage bond repayments through our realRESCUE program;\r\n\r\n- National Buyer and Seller referral opportunities;\r\n\r\n- Ongoing training, quality mentoring and access to an experienced and seasoned Management team;\r\n\r\n- Class leading rewards and recognition programs;\r\n\r\nShould you wish to explore joining the RainMaker business Platform as a Sales Executive, please contact Yolanda Schubert on 072 797 2019 (yolanda@realnet.co.za) or if you would like to potentially join one of our specialised Teams, please feel free to engage with one of our experienced Sales Executives (Team Leaders). \r\n\r\nIn closing we aim to offer all our stakeholders, whether it be Sellers, Buyers, Landlords, Tenants, Sales Executives, Sales Affiliates the highest level of professionalism and customer service."
    }
]
  async create(createOrganisationDto: CreateOrganisationDto) {
    const newOrg = new this.OrganisationModel(createOrganisationDto);
    return await newOrg.save();
  }

  async findAll() : Promise<Organisation[]> {
    return await this.OrganisationModel.find()
  }

  async findOne(id: string): Promise<Organisation> {
    return await this.OrganisationModel.findOne({_id: id})
  }

  async update(id: string, updateOrganisationDto: CreateOrganisationDto) : Promise<Organisation> {
    return await this.OrganisationModel.findByIdAndUpdate(id, updateOrganisationDto, {new: true})
  }

  async remove(id: string) : Promise<Organisation> {
    return await this.OrganisationModel.findByIdAndRemove(id);
  }
}
