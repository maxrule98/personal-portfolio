import { opine, json, urlencoded } from "https://deno.land/x/opine@0.27.0/mod.ts";
const app = opine();
const port = 3000;


// Routes
import apiRoutes from './routes/apiRoutes.js'
import uiRoutes from './routes/uiRoutes.js'

app.use(json()) // for parsing application/json
app.use(urlencoded()) // for parsing application/x-www-form-urlencoded

apiRoutes(app)
uiRoutes(app)

console.log(`Server running at http://localhost:${port}`);
app.listen({ port });