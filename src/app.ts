
import express from 'express';
import router from './App/routes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1', router);
app.get('/',(req, res) => {res.send("hello ji");})
export default app;
