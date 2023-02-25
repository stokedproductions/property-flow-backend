export class CreateListingDto {
    private readonly _id : string;
    private readonly agent : string;
    private readonly title : string;
    private readonly description : string;
    private readonly status : string;
    private readonly organisation : string;
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
