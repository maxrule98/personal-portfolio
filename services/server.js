const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

// Routes
const apiRoutes = require('./routes/apiRoutes.js')
const uiRoutes = require('./routes/uiRoutes.js')

if (process.env.NODE_ENV !== 'production') {
    require('./build');
}

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

apiRoutes(app)
uiRoutes(app)

console.log(`Server running at http://localhost:${port}`);
app.listen({ port });