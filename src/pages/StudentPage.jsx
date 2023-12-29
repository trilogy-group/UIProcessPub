import React from 'react';
import { useParams } from 'react-router-dom';

const StudentPage = () => {
    const params = useParams();
    return (
        <div>
            <h1>Student Page</h1>
        </div>
    );
};

export default StudentPage;
