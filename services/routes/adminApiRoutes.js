const express = require('express');
const { Router } = require('express');
const dbAdmin = require('../controllers/dbAdmin')

const routes = app => {
    const api = Router();
    api.post('/login', dbAdmin.login)
    app.use('/api/v1/admin', api)
}

module.exports = routes;