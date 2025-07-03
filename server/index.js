const dotenv=require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const { Resend } = require("resend");

const PORT = process.env.PORT || 8080;
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.post('/api/sendEmail', async (req, res) => {
  const { data, error } = await resend.emails.send({
    from: "kyle@kylejohnsondev.com",
    to: ["kylejohnson@mailfence.com"],
    subject: `Message from ${req.body.name} through your personal website!`,
    html: `From ${req.body.email}: ${req.body.message}`
  });

  if (error) {
    console.log(error);
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
