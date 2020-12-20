const { pool } = require('pg');

const pool = new Pool({
    user: "maxrule",
    database: "projects",
    hostname: "localhost",
    port: 5432
});
await pool.connect();

  

// @desc    Get all Products
// @route   GET /api/v1/products
const getProjects = async ( req, res ) => {
    const result = await pool.query(`
    SELECT json_build_object('id', id, 'name', name, 'desc', description, 'slug', slug)
    FROM   projects 
    `);

    console.log(result.rows);
            
    res.json({
        success: true,
        rows: await result.rows
    })
}

// @desc    Get one Products
// @route   GET /api/v1/products/:id
const getProduct = async ( req, res ) => {
    const result = await client.query("SELECT * FROM products WHERE product_id = $1", req.params.id);
    if (result.rows.length === 0) {
        res.status = 404
        res.json({
            success: false,
            msg: 'Error! No such product exists'
        })
    } else {
        res.status = 200
        res.json({
            success: true,
            data: await result.rows[0]
        })
    }
}


export { getProjects, getProduct }