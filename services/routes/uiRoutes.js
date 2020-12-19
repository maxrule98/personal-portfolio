import { serveStatic } from "https://deno.land/x/opine@0.27.0/mod.ts";

const routes = app => {
    app.use(serveStatic("src"))
    app.get('/', (req, res) => { res.redirect('/home') })
    app.use(('/home'), serveStatic("src/index.html"))
    app.use(('/about'), serveStatic("src/about.html"))
    app.use(('/projects'), serveStatic("src/projects.html"))
}

export default routes;