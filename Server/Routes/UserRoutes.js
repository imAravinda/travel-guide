import express from 'express';
import { LogInCustomer, RegisterUser } from '../Controllers/UserControl.js';

const UserRoutes = express.Router();

//Register User
UserRoutes.route('/RegisterUser').post(RegisterUser);

//Login User
UserRoutes.route('/login').get(LogInCustomer);

export default UserRoutes;