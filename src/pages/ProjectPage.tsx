// pages/ProjectPage.tsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/Projects.json'; // Import the JSON file
import NotFound from '../components/NotFound';
import '../styles/ProjectPage.css'

const ProjectPage: React.FC = () => {
    const { title } = useParams<{ title: string }>(); // Get the project title from URL params

    // Find the project that matches the title
    const project = projects.find((project) => project.title.toLowerCase().replace(/\s+/g, '-') === title);

    if (!project) {
        return <NotFound />;
    }

    useEffect(()=>{console.log(title)})

    return (
        <div className="project-page">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.imageUrls && project.imageUrls.length > 0 ? project.imageUrls.map((imageUrl: string) => {
                return <img src={imageUrl} alt={project.title}/>
            }) :
            <img src={project.miniatureUrl} alt={project.title} />}
        </div>
    );
};

export default ProjectPage;
