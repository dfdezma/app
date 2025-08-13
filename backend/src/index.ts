import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/auth';
import profileRoutes from './routes/profile';
import workoutRoutes from './routes/workouts';
import progressRoutes from './routes/progress';
import exercisesRoutes from './routes/exercises';

const app = express();
app.use(cors());
app.use(express.json());

export const prisma = new PrismaClient();

app.get('/health', (_req,res)=>res.json({ok:true}))

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/workouts', workoutRoutes);
app.use('/progress', progressRoutes);
app.use('/exercises', exercisesRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`API listening on ${PORT}`));
