import PetService from "../controllers/pet.controller";
import { APIRequestContext } from "@playwright/test";
import petModel from "../models/pet.model";

const createPetWithId = async (id: number, request: APIRequestContext) => {
    const requestBody = petModel(id);
    const petService = new PetService(request);
    await petService.addPet(requestBody);
};

export default createPetWithId;


