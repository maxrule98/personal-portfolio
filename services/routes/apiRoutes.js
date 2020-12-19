import { getProjects, getProduct } from '../controllers/projects.js';

import { Router } from "https://deno.land/x/opine@0.27.0/mod.ts";

const routes = app => {
    const api = Router()
    // api.get('/projects', getProjects)
    // api.get('/products/:id', getProduct)
    // app.use('/api/v1', api)
}

export default routes