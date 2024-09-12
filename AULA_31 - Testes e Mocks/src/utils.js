import { faker } from '@faker-js/faker';

faker.locale = 'pt_BR';

export const generateUser = ()=>{
    let numOfProducts = faker.number.int({min:1, max:10});
    let products = [];

    for(let i=0;i<numOfProducts;i++){
        products.push(generateProduct());
    }

    return {
        name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        sex: faker.person.sex(),
        birthDate: faker.date.birthdate(),
        products,
        image: faker.image.url(),
        id: faker.database.mongodbObjectId(),
        email: faker.internet.email()
    }
}

export const generateProduct = ()=>{
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        id: faker.database.mongodbObjectId(),
        stock: faker.number.int({min:1, max:100}),
        image: faker.image.url()
    }
}