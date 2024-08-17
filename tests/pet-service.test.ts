import {expect, test} from "@playwright/test";
import PetService from "../controllers/pet.controller";
import petModel from "../models/pet.model";
import validateResponseSchema from "../utils/validator-response-schema";
import expectedSchemaForPetService from "../expected-schemas/pet-service.schemas";
import createPetWithId from "../utils/pet-service.helper";

test.describe('Test suite for Pet Service with CRUD operations', () => {
  let petService: PetService;

  test.beforeEach(async ({request}) => {
    petService = new PetService(request);
  })

  test('Create new pet', async () => {
    //arrange
    const requestBody = petModel();

    //act
    const response = await petService.addPet(requestBody);

    //assert
    expect.soft(response.status).toBe(201);
    expect.soft(response.responseBody).toBeDefined();
    validateResponseSchema(response.responseBody, expectedSchemaForPetService.pet);
  })

  test('Get pet by status', async () => {
    //act
    const response = await petService.getPetByStatus("available");

    //assert
    expect.soft(response.status).toBe(200);
    expect.soft(response.responseBody).toBeDefined();
    validateResponseSchema(response.responseBody, expectedSchemaForPetService.getPets);
  })

  test('Update pet name', async ({request}) => {
    //arrange
    await createPetWithId(10, request);
    const updatedName: string = 'Updated Pet Name';
    const requestBody = petModel(10);
    requestBody.name = updatedName;

    //act
    const response = await petService.updatePet(requestBody);

    //assert
    expect.soft(response.status).toBe(200);
    expect.soft(response.responseBody).toBeDefined();
    expect.soft(response.responseBody.name).toBe(updatedName);
    validateResponseSchema(response.responseBody, expectedSchemaForPetService.pet);
  })

  test('Delete pet by id', async ({request}) => {
    //arrange
    await createPetWithId(7, request);

    //act
    const response = await petService.deletePetById(7);

    //assert
    expect.soft(response.status).toBe(200);
    expect.soft(response.responseBody).toBeDefined();
    expect(response.responseBody).toBe('Pet deleted');
  })
})