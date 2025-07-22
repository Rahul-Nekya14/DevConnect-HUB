import { useState } from "react";
import axios from "axios";

export default function Project() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/projects", { title, desc });
      alert("Project added!");
      setTitle("");
      setDesc("");
    } catch (error) {
      alert("Error adding project");
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Add New Project</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project Title"
          required
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          required
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Project
        </button>
      </form>
    </div>
  );
}
