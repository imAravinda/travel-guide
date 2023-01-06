import express from 'express';
import UserRoutes from './Routes/UserRoutes.js';

const app = express();

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));


app.use('/api/v1/customer',UserRoutes);

export default app;
