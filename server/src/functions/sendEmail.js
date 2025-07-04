const { app } = require('@azure/functions');
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY || 'unknown');

app.http('sendEmail', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        console.log(`Http function processing request for url "${request.url}"`);
        console.log(request);

        // const { data, error } = await resend.emails.send({
        //     from: "kyle@kylejohnsondev.com",
        //     to: ["kylejohnson@mailfence.com"],
        //     subject: `Message from ${request.body.name || '[No name specified]'} through your personal website!`,
        //     html: `From ${request.body.email || '[No email specified]'}: ${request.body.message || '[No message specified]'}`
        // });

        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
    }
});
