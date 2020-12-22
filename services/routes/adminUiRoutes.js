const express = require('express');

const routes = app => {
    const route = express.Router();
    
    route.use(express.static("src"))
    route.use(('/login'), express.static("src/login.html"))

    app.use('/admin', route)
}

module.exports = routes;