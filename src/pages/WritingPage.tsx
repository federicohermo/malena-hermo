// pages/ProjectPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import writings from '../data/Data.json'; // Import the JSON file
import NotFound from '../components/NotFound';
import '../styles/WritingPage.css'

const WritingPage: React.FC = () => {
    const { title } = useParams<{ title: string }>(); // Get the project title from URL params

    // Find the project that matches the title
    const writing = writings.find((writing) => writing.title.toLowerCase().replace(/\s+/g, '-') === title);

    if (!writing) {
        return <NotFound route='escritos'/>;
    }

    return (
        <div className="writing-page">
            <h3>{writing.title}</h3>
            <p>{writing.content && writing.content.length > 0 && writing.content.map((paragraph: string) => {
                return <>{paragraph} <br/></>
            })}</p>
        </div>
    );
};

export default WritingPage;
