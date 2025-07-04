const { app } = require('@azure/functions');
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY || 'unknown');

app.http('sendEmail', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const { data, error } = await resend.emails.send({
            from: "kyle@kylejohnsondev.com",
            to: ["kylejohnson@mailfence.com"],
            subject: `Message from ${request.params.name} through your personal website!`,
            html: `From ${request.params.email}: ${request.params.message}`
        });

        context.log(data, error);

        return { body: JSON.stringify(data) };
    }
});
