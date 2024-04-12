class expectedSchemaForPetService {
    static pet = {
        type: 'object',
        properties: {
            id: { type: 'number' },
            name: { type: 'string', examples: ['doggie'] },
            category: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    name: { type: 'string', examples: ['Dogs'] }
                }
            },
            photoUrls: { type: 'array', items: { type: 'string' } },
            tags: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        name: { type: 'string' }
                    }
                }
            },
            status: {
                type: 'string',
                description: 'pet status in the store',
                enum: ['available', 'pending', 'sold']
            }
        },
        required: ['name', 'photoUrls']
    };

    static getPets = {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                id: { type: 'number' },
                name: { type: 'string', examples: ['doggie'] },
                category: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        name: { type: 'string', examples: ['Dogs'] }
                    }
                },
                photoUrls: { type: 'array', items: { type: 'string' } },
                tags: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            name: { type: 'string' }
                        }
                    }
                },
                status: {
                    type: 'string',
                    description: 'pet status in the store',
                    enum: ['available', 'pending', 'sold']
                }
            },
            required: ['name', 'photoUrls']
        }
    };
}

export default expectedSchemaForPetService;