const express = require('express');
const router = express.Router();
const { Client } = require('../../db/models');

//all
router.get('/all', async (req,res) => {
    const all_clients = await Client.findAll();
    return res.json(all_clients);
})

//find by pk
router.get('/:clientId', async (req,res) => {
    const client = await Client.findByPk(req.params.clientId);
    if(!client){
        return res.status(404).json({ message: "Client not found" });
    }
    return res.json(client);
})

//create
router.post('/create', async (req,res) => {
    const { name, email, phone } = req.body;
    try {
        const newClient = await Client.create({ name, email, phone });
        return res.status(201).json(newClient);
    } catch (error) {
        return res.status(400).json({ message: "Error creating client", error });
    }
})

//update
router.put('/:clientId', async (req,res) => {
    const { name, email, phone } = req.body;
    const client = await Client.findByPk(req.params.clientId);
    if(!client){
        return res.status(404).json({ message: "Client not found" });
    }
    try {
        client.name = name || client.name;
        client.email = email || client.email;
        client.phone = phone || client.phone;
        await client.save();
        return res.json(client);
    } catch (error) {
        return res.status(400).json({ message: "Error updating client", error });
    }
})

//delete
router.delete('/:clientId', async (req,res) => {
    const client = await Client.findByPk(req.params.clientId);
    if(!client){
        return res.status(404).json({ message: "Client not found" });
    }
    try {
        await client.destroy();
        return res.json({ message: "Client deleted successfully" });
    } catch (error) {
        return res.status(400).json({ message: "Error deleting client", error });
    }
})


module.exports = router;
