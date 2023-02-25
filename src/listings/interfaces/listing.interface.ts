export interface Unit {
    bedrooms : string,
    bathrooms : string,
    parking : string,
    price : string,
}

// TODO SEE IF WE can make an enum for the listing type and listing Sector


export interface Listing {
    _id : string;
    agent : string,
    title : string,
    description : string,
    status : string,
    organisation : string,
    listingType : string,
    listingSector : string,
    unit : Unit,
    images : string[]
}
/* 

{
        "_id" : "63333d2bb98f270261529d10",
        "agent" : "602386722cdb39001e18da08",
        "title" : "2 Bedroom Apartment in Ravenswood, Boksburg",
        "description" : "Upstairs Apartment in Boksburg.\nOpen plan lounge / kitchen under tiles.\n1 Bathroom bath, basin & toilet.\nUndercover parking.\n24/7 Security.\nNeeds TLC. Open to Offers.",
        "status" : "listed",
        "organisation" : "61261f4cbf386a0011c59d56",
        "listingType" : "sale",
        "listingSector" : "residential",
        "unit" : {
            "bedrooms" : 2.0,
            "bathrooms" : 1.0,
            "parking" : 0.0,
            "price" : 550000.0
        },
        "images" : [
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-c16e1613ca5a484?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/c16e1613ca5a484.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-49b3e870a154680?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/49b3e870a154680.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-83eaf551d9f7084?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/83eaf551d9f7084.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-e9ada7ba34e8b70?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/e9ada7ba34e8b70.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-e8d3bf6305e1fa1?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/e8d3bf6305e1fa1.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-ad0c0ed1072bc77?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/ad0c0ed1072bc77.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-63d1941425468ad?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/63d1941425468ad.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-4ce739f60947508?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/4ce739f60947508.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-056a1b40941c73c?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/056a1b40941c73c.jpg"
        ]
    },
*/
