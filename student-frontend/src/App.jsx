import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [students, setStudents] = useState([]);
  const [addForm, setAddForm] = useState({
    name: "",
    age: "",
    course: "",
  });

const [ editForm, setEditForm ] = useState({
  name: "",
  age: "",
  course: "",
});

  const API = "http://localhost:5000/api/students";

  // GET ALL
  const fetchStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // INPUT CHANGE
  const handleAddChange = (e) => {
    setAddForm({ ...addForm, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  // CREATE / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API, addForm);
    setAddForm({ name: "", age: "", course: "" });
    fetchStudents();
  };
const handleUpdateSubmit = async (e) => {
       e.preventDefault();
      await axios.put(`${API}/${editingStudentId}`, editForm);
      setEditingStudentId(null);
      setEditForm({ name: "", age: "", course: "" });
      fetchStudents();
};
  // TOGGLE VIEW
  const toggleStudent = (id) => {
    setSelectedStudentId(selectedStudentId === id ? null : id);
  };

  // DELETE
  const deleteStudent = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchStudents();
  };

  // EDIT
  const editStudent = (student) => {
    setEditForm({
      name: student.name,
      age: student.age,
      course: student.course,
    });
    setAddForm({ name: "", age: "", course: "" });
    setEditingStudentId(student._id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Student Management
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-6 justify-center flex  " 
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={addForm.name}
          onChange={handleAddChange}
          className="border p-2 mr-2"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={addForm.age}
          onChange={handleAddChange}
          className="border p-2 mr-2"
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={addForm.course}
          onChange={handleAddChange}
          className="border p-2 mr-2"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add a student
        </button>
      </form>

      {/* LIST */}
      <div className="grid gap-4">
        {students.map((s) => (
          <div key={s._id} className="bg-white p-4 rounded shadow">

            <div className="flex justify-between">
              <div>
                <p className="font-bold">{s.name}</p>
                <p>Age: {s.age}</p>
                <p>Course: {s.course}</p>
              </div>

              <div>
                <button
                  onClick={() => editStudent(s)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => toggleStudent(s._id)}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                  View
                </button>

                <button
                  onClick={() => deleteStudent(s._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>

            {/* DETAILS */}
            {selectedStudentId === s._id && (
              <div className="mt-3 border-t pt-3 text-gray-700">
                <p className=" font-bold ">Student Details</p>
                <p><strong>Name:</strong> {s.name}</p>
                <p><strong>Age:</strong> {s.age}</p>
                <p><strong>Course:</strong> {s.course}</p>
                <p><strong>ID:</strong> {s._id}</p>
              </div>
            )}
            { editingStudentId === s._id && (
         <form
        onSubmit={handleUpdateSubmit}
        className="bg-white p-4 rounded shadow mb-6 justify-center flex  " 
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={editForm.name}
          onChange={handleEditChange}
          className="border p-2 mr-2"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={editForm.age}
          onChange={handleEditChange}
          className="border p-2 mr-2"
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={editForm.course}
          onChange={handleEditChange}
          className="border p-2 mr-2"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Update
        </button>

        <button 
        type="button"
        onClick={() => setEditingStudentId(null)}
        className="ml-2 bg-gray-400 text-white px-3 py-2 rounded"
        >
        Cancel
        </button>
      </form>

            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
