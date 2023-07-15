import express from 'express';
import emailController from './emailController.js';
import cors from 'cors'

const app = express();
const PORT = 3000;

//enable cors
app.use(cors());

// Serve static files from the "dist" directory
app.use(express.static('dist'));
app.use(express.json());

app.post('/send-email', (req,res) => {
  const formData = req.body;
  emailController(formData);
  res.sendStatus(200);
})


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
