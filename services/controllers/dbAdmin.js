const { Pool } = require('pg');

const pool = new Pool({
    user: "maxrule",
    database: "projects",
    hostname: "localhost",
    port: 5432
});



const login = async ( req, res ) => {
    const result = await pool.query(`
    SELECT 
        id,
        name,
        description,
        slug
    FROM
        projects 
    `);

    console.log(result.rows);
            
    res.json({
        success: true,
        rows: await result.rows
    })
}

module.exports = { login };