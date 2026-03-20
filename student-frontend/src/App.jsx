import { useState,useEffect } from 'react';
import axios from "axios";

function App() {
  const [ students,setStudents ] = useState([]);
  const [ form,setForm ] = useState({
    name: "",
    age: "",
    course: "",
  })

  const API = "http://localhost:5000/api/students";

  const fetchStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  };

  useEffect(() =>{
    fetchStudents();
  },[]);

  const handleChange = (e) => {
   setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API,form);
    setForm({ name:"", age:"", course:"" });
    fetchStudents();
  };

  const deleteStudent = async(id) => {
    await axios.delete(`${API}/${id}`);
    fetchStudents();
  };

  return (
   <div className="min-h-screen bg-gray-100 p-6">
       <h1 className="text-3xl font-bold mb-6 text-center">
        Student Management
       </h1>

        <form 
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-6 ">
        <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="border p-2 mr-2"
        required
        />
        <input
        type="number"
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
        className="border p-2 mr-2"
        />
 
        <input
        type="text"
        name="course"
        placeholder="Course"
        value={form.course}
        onChange={handleChange}
        className="border p-2 mr-2"
        /> 
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
        </button> 
        </form>
       
       <div className="grid gap-4">
        {students.map((s) => (
         <div 
         key={s.id}
         className="bg-white p-4 rounded shadow flex justify-between"
         >
         <div>
            <p className="font-bold">{s.name}</p>
            <p>Age: {s.age}</p>
            <p>Course: {s.course}</p>
         </div>

         <button 
         onClick={() => deleteStudent(s._id)}
         className="bg-red-500 text-white px-3 py-1 rounded"
         >
        Delete
         </button>
        </div>

        ))}
        </div>


   </div>


  );

}

export default App
