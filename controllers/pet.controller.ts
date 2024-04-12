import { APIRequestContext } from "@playwright/test";
import { operations } from "../.temp/types";

//types
type requestBodyForAddPet = operations['addPet']['requestBody']['content']['application/json'];
type responseBodyForAddPet = operations['addPet']['responses']['200']['content']['application/json'];
type responseBodyForGetPetByStatus = operations['findPetsByStatus']['responses']['200']['content']['application/json'];
type requestBodyForUpdatePet = operations['updatePet']['requestBody']['content']['application/json'];
type responseBodyForUpdatePet = operations['updatePet']['responses']['200']['content']['application/json'];

class PetService {
    private request: APIRequestContext;
    constructor(request: APIRequestContext) {
        this.request = request;
    }

    addPet = async (requestBody: requestBodyForAddPet) => {
        const response = await this.request.post('https://petstore3.swagger.io/api/v3/pet', {
            data: requestBody
        });
        const responseBody: responseBodyForAddPet = await response.json();
        const status = response.status();

        return { responseBody, status };
    }

    getPetByStatus = async (petStatus: 'available' | 'pending' | 'sold') => {
        const response = await this.request.get(`https://petstore3.swagger.io/api/v3/pet/findByStatus?status=${petStatus}`);
        const responseBody: responseBodyForGetPetByStatus = await response.json();
        const status = response.status();

        return { responseBody, status };
    }

    updatePet = async (requestBody: requestBodyForUpdatePet) => {
        const response = await this.request.put('https://petstore3.swagger.io/api/v3/pet', {
            data: requestBody
        });
        const responseBody: responseBodyForUpdatePet = await response.json();
        const status = response.status();

        return { responseBody, status };
    }

    deletePetById = async (id: number) => {
        const response = await this.request.delete(`https://petstore3.swagger.io/api/v3/pet/${id}`);
        const responseBody = await response.text();
        const status = response.status();

        return { responseBody, status };
    }
}

export default PetService;