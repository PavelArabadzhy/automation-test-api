import Ajv from 'ajv';
import { expect } from "@playwright/test";

const validateResponseSchema = (responseBody: object, schema: object): void => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);

    const isValidSchema = validate(responseBody);

    if (!isValidSchema) {
        const errorMessage = ajv.errorsText(validate.errors);
        throw new Error(`Response does not match the schema. Errors: ${errorMessage}`);
    }
    expect(isValidSchema).toBe(true);
};

export default validateResponseSchema;