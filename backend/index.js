import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
}
);

const PORT  = 5000;

app.listen(PORT, () => {    
  console.log(`Server is running on port ${PORT}`);
}
);
// Export the app for testing purposes
