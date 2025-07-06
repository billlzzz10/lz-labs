import express from 'express';
import cors from 'cors';
import { authenticateJWT } from './middlewares/auth';
import { rateLimiter } from './middlewares/rateLimiter';
import jobRoutes from './routes/job';

const app = express();
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use('/api/job', authenticateJWT, jobRoutes);

export default app;
