import React, { useState } from 'react';

const StudentFilter = () => {
    // Sample list of students
    const studentsData = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: ' Smith' },
        { id: 4, name: ' Johnson' },
        { id: 5, name: 'John Doe' },
        { id: 6, name: ' Doe' },
        { id: 7, name: 'Alice ' },
        { id: 8, name: 'Bob Johnson' },
        { id: 9, name: 'John Doe' },
        { id: 10, name: 'Jane ' },
        { id: 11, name: ' Smith' },
        { id: 12, name: 'Bob Johnson' },
        // Add more students as needed
    ];

    // State for the search term
    const [searchTerm, setSearchTerm] = useState('');


    // State for the filtered list of students
    const [filteredStudents, setFilteredStudents] = useState(studentsData);


    // Function to handle search input change
    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        // Filter students based on the search term
        const filteredList = studentsData.filter(student =>
            student.name.toLowerCase().includes(term.toLowerCase())
        );
        // studentsData.filter(student => student.name.toLowerCase().includes(term.toLowerCase()))

        // Update the filtered list state
        setFilteredStudents(filteredList);
    };


    return (
        <div>
            <h2>Student Name Search</h2>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearchChange}
            />

            <ul>
                {
                    filteredStudents.map(student => (
                        <li key={student.id}>{student.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};


export default StudentFilter;
