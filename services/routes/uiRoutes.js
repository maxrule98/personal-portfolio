const express = require('express');

const routes = app => {

    app.use('/', express.static('dist'))
    app.use('/home', express.static("dist/index.html"))
    app.use('/about', express.static("dist/about.html"))
    app.use('/projects', express.static("dist/projects.html"))
    app.use('/project/:slug', express.static("dist/project.html"))

}

module.exports = routes;

