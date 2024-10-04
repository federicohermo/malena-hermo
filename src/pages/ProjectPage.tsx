// pages/ProjectPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/Projects.json'; // Import the JSON file
import '../styles/ProjectPage.css'

const ProjectPage: React.FC = () => {
    const { title } = useParams<{ title: string }>(); // Get the project title from URL params

    // Find the project that matches the title
    const project = projects.find((project) => project.title.toLowerCase().replace(/\s+/g, '-') === title);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-page">
            <img src={project.miniatureUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    );
};

export default ProjectPage;
