const {db} = require('../config/db');

const getDescriptionById = async (id) => {
    try{
        const query = "SELECT U.name, d.description, d.prescription FROM users U JOIN description d ON U.id = d.userd_id WHERE U.id = $1;";
        const {rows} = await db.query(query, [id]);
        return rows
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const createDescription = async (userId, description, prescription) => {
    try{
        const query = "INSERT INTO description (userd_id, description, prescription) VALUES ($1, $2, $3) RETURNING *;";
        const {rows} = await db.query(query, [userId, description, prescription]);
        return rows;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {getDescriptionById, createDescription};