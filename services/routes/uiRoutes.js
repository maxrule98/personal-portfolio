const express = require('express');

const routes = app => {
    app.use(express.static("src"))
    app.use(('/home'), express.static("src/index.html"))
    app.use(('/about'), express.static("src/about.html"))
    app.use(('/projects'), express.static("src/projects.html"))
}

module.exports = routes;