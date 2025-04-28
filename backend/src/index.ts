import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use('/', router);

app.get("/", (req, res) => {
  res.send("HELLOOOOO WORLD");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
