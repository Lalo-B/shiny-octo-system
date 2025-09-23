const express = require('express');
const router = express.Router();
router.get('/all',async (req,res) => {
    const all_clients = await Clients.get_all();
})
