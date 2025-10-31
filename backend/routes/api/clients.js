const express = require('express');
const router = express.Router();
const { Clients } = require('../../db/models');

router.get('/all',async (req,res) => {
    const all_clients = await Clients.get_all();
    return res.json(
        all_clients
    );
})

module.exports = router;
