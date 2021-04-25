import { Router } from 'express';

const categoriesRoutes = Router();

import { Category } from '../model/Category';

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    return response.status(201).json({category});
});

export { categoriesRoutes };