// pages/ProjectPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/Data.json'; // Import the JSON file
import NotFound from '../components/NotFound';
import '../styles/ProjectPage.css'

const ProjectPage: React.FC = () => {
    const { title } = useParams<{ title: string }>(); // Get the project title from URL params

    // Find the project that matches the title
    const project = projects.find((project) => project.title.toLowerCase().replace(/\s+/g, '-') === title);

    if (!project) {
        return <NotFound route='proyectos'/>;
    }

    return (
        <div className="project-page">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.content && project.content.length > 0 ? project.content.map((content: string) => {
                return <img src={content} alt={project.title}/>
            }) :
            <img src={project.miniature} alt={project.title} />}
        </div>
    );
};

export default ProjectPage;
