const express = require('express');
const router = express.Router();
// Assuming models are exported from ../models/index.js
const { Project } = require('../models');

/**
 * @route GET /api/projects
 * @desc Get all projects
 */
router.get('/', async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route GET /api/projects/:id
 * @desc Get a single project by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route POST /api/projects
 * @desc Create a new project
 */
router.post('/', async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      const errors = err.errors.map(e => e.message);
      return res.status(400).json({ message: 'Validation error', errors });
    }
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route PUT /api/projects/:id
 * @desc Edit an existing project by ID
 */
router.put('/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const updatedProject = await project.update(req.body);
    res.json(updatedProject);
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      const errors = err.errors.map(e => e.message);
      return res.status(400).json({ message: 'Validation error', errors });
    }
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route DELETE /api/projects/:id
 * @desc Delete a project by ID
 */
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    await project.destroy();
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
