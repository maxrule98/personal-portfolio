const express = require('express');
const { Router } = require('express');
const projects = require('../controllers/projects')

const routes = app => {
    const api = Router();
    api.get('/projects', projects.getProjects)
    api.get('/project/:slug', projects.getProduct)
    app.use('/api/v1', api)
}

module.exports = routes;