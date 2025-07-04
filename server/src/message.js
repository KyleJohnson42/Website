const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
      console.log(request);
        return { body: JSON.stringify({ "text": `Hello, from the API!` }) };
    }
});