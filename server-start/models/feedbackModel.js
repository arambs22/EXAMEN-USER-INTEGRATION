const {db} = require('../config/db');

const getFeedbackById = async (id) => {
    try{
        const query = "SELECT U.name, f.feedback FROM users U JOIN feedback f ON U.id = f.user_id WHERE U.id = $1;";
        const {rows} = await db.query(query, [id]);
        return rows
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const createFeedback = async (userId, feedback) => {
    try { 
        const query = "INSERT INTO feedback (user_id, feedback) VALUES ($1, $2) RETURNING *;";
        const {rows} = await db.query(query, [userId, feedback]);
        return rows;
    }catch (error){
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {getFeedbackById, createFeedback};