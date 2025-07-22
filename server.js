const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/devconnect', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const projectSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

const Project = mongoose.model('Project', projectSchema);

app.post('/projects', async (req, res) => {
  try {
    const { title, desc } = req.body;
    if (!title || !desc) {
      return res.status(400).json({ message: "Title and Description required" });
    }

    const newProject = new Project({ title, desc });
    await newProject.save();

    res.status(201).json({ message: "Project added successfully", newProject });
  } catch (error) {
    console.error("Error adding project:", error.message);
    res.status(500).json({ message: "Error adding project" });
  }
});


app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
