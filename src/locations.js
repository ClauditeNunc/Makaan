const propertyTypes = [
    { type: "House", amount: 1503455, imageURL: 'icon-house.png', index: 1 },
    { type: "Apartment", amount: 203421, imageURL: 'icon-apartment.png', index: 2 },
    { type: "Villa", amount: 250440, imageURL: 'icon-villa.png', index: 3 },
    { type: "Office", amount: 186540, imageURL: 'icon-housing.png', index: 4 },
    { type: "Building", amount: 354600, imageURL: 'icon-building.png', index: 5 },
    { type: "Townhouse", amount: 845664, imageURL: 'icon-neighborhood.png', index: 6 },
    { type: "Shop", amount: 224356, imageURL: 'icon-condominium.png', index: 7 },
    { type: "Garage", amount: 166454, imageURL: 'icon-luxury.png', index: 8 }
];

const propertyLocations = [
    "North Carolina",
    "South Carolina",
    "Oklahoma"
];


const databaseOfPseudoProperties = [
        {
            name: 'Golden Urban',
            type: propertyTypes[0].type,
            amount: propertyTypes[0].amount,
            imageURL: 'property-1.jpg',
            state: propertyLocations[0],
            address: 'Some Street, USA',
            size: 950,
            amountOfBeds: 2,
            amountOfBaths: 1,
            status:"For Rent",
            index:1
          },
          {
            name: 'Silver Suburban',
            type: propertyTypes[1].type,  
            amount: propertyTypes[1].amount,
            imageURL: 'property-2.jpg',
            state: propertyLocations[1],
            address: 'Some Street, USA',
            size: 1100,
            amountOfBeds: 3,
            amountOfBaths: 2,
            status:"For Sale",
            index:2
          },
          {
            name: 'Luxury Condo',
            type: propertyTypes[2].type,
            amount: propertyTypes[2].amount,
            imageURL: 'property-3.jpg',
            state: propertyLocations[0],
            address: 'Some Street, USA',
            size: 1000,
            amountOfBeds: 2,
            amountOfBaths: 1,
            status:"For Sale",
            index:3
          },
          {
            name: 'Modern',
            type: propertyTypes[3].type,
            amount: propertyTypes[3].amount,
            imageURL: 'property-4.jpg',
            state: propertyLocations[0],
            address: 'Some Street, USA',
            size: 950,
            amountOfBeds: 2,
            amountOfBaths: 1,
            status:"For Sale",
            index:4
          },
          {
            name: 'Duplex Dreams',
            type: propertyTypes[4].type,
            amount: propertyTypes[4].amount,
            imageURL: 'property-5.jpg',
            state: propertyLocations[0],
            address: 'Some Street, USA',
            size: 1200,
            amountOfBeds: 3,
            amountOfBaths: 2,
            status:"For Rent",
            index:5
          },
          {
            name: 'Extravagant',
            type: propertyTypes[3].type,
            amount: propertyTypes[1].amount,
            imageURL: 'property-6.jpg',
            state: propertyLocations[1],
            address: 'Some Street, USA',
            size: 932,
            amountOfBeds: 3,
            amountOfBaths: 2,
            status:"For Sale",
            index:6
          },
      ]
export { propertyLocations, propertyTypes, databaseOfPseudoProperties };
