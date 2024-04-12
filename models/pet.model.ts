import {components} from "../.temp/types";
import { faker } from '@faker-js/faker';

type petModel = components['schemas']['Pet'];

const petModel: (id?: number) => petModel = (id?: number) => ({
    id: id !== undefined ? id : faker.number.int({ min: 1, max: 1000 }),
    name: faker.person.firstName(),
    category: {
        id: faker.number.int({ min: 1, max: 10 }),
        name: faker.animal.dog()
    },
    photoUrls: [
        faker.image.url()
    ],
    tags: [
        {
            id: faker.number.int({ min: 1, max: 10 }),
            name: faker.animal.dog()
        }
    ],
    status: faker.helpers.arrayElement(["available", "pending", "sold"])
});
export default petModel;