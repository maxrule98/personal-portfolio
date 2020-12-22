const { Pool } = require('pg');

const pool = new Pool({
    user: "maxrule",
    database: "projects",
    hostname: "localhost",
    port: 5432
});

  

// @desc    Get all Products
// @route   GET /api/v1/products
const getProjects = async ( req, res ) => {
    const result = await pool.query(`
    SELECT 
        id,
        name,
        description,
        slug,
        img_url
    FROM
        projects 
    `);
            
    res.json({
        success: true,
        rows: await result.rows
    })
}

// @desc    Get one Products
// @route   GET /api/v1/products/:id
const getProduct = async (req, res) => {
    const { slug } = req.params;
    const result = await pool.query(`
    SELECT 
        id,
        name,
        description,
        slug,
        img_url
    FROM
        projects 
    WHERE
        slug = $1
    `, [`${slug}`]);

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
            rows: await result.rows[0]
        })
    }
}

// const getProduct = async ( req, res ) => {
//     const result = await client.query("SELECT * FROM products WHERE product_id = $1", req.params.id);
//     if (result.rows.length === 0) {
//         res.status = 404
//         res.json({
//             success: false,
//             msg: 'Error! No such product exists'
//         })
//     } else {
//         res.status = 200
//         res.json({
//             success: true,
//             data: await result.rows[0]
//         })
//     }
// }


module.exports = { getProjects, getProduct };