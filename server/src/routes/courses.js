const express = require('express');
const router = express.Router();
const supabase = require('../utils/supabase');
const auth = require('../middleware/auth');

// GET all courses
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('courses').select('*');
    if (error) {
      console.error("Error fetching courses:", error);
      return res.status(500).json({ error: 'Failed to fetch courses' });
    }
    res.json(data);
  } catch (error) {
    console.error("Catch error fetching courses:", error);
    res.status(500).json({ error: 'Server error' });
  }
});


// POST a new course (requires authentication)
router.post('/', auth, async (req, res) => {
  const { title, description, price, instructor_id } = req.body;
  try {
    // Input validation (add more robust checks as needed)
    if (!title || !description || !price || !instructor_id) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { data, error } = await supabase
      .from('courses')
      .insert([{ title, description, price, instructor_id }])
      .select(); // Add .select() to get the inserted data

    if (error) {
      console.error("Error creating course:", error);
      return res.status(500).json({ error: 'Failed to create course' });
    }
    res.status(201).json(data[0]); // Return the created course
  } catch (error) {
    console.error("Catch error creating course:", error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;