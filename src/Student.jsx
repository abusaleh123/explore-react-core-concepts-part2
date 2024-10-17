import { useState } from "react";

export default function Student(){
    const [student, setStudent] = useState(10);
    const handleAdd = () => {
        const newStudent = student + 1;
        setStudent(newStudent)
    }
const handleRemove = () => {
    const newStudent = student - 1;
    setStudent(newStudent)
}
const studentStyle = {
    border: '2px solid violet',
    padding: '20px',
    margin: '20px',
    borderRadius: '20px'
}
    return(
        <div style={studentStyle}>
            <h3>Students: {student}</h3>
            <button onClick={handleAdd}>Add Student</button>
            <button onClick={handleRemove}>Remove Student</button>
        </div>
    )
}