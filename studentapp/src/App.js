import Student from "./components/Student";
import { useState } from "react";
import { studentsData } from "./data/studentsData";
import './App.css';

function App() {

  const [students, setStudent] = useState(studentsData);

  return (
    <div className="App">
      <header className="App-header">
        {/* display student component for each student obj */}
        {students.map((item,idx) =>(
          <Student students={item} key={idx}/>
        ))}
      </header>
    </div>
  );
}

export default App;
