import React from 'react';
import ImageGrid from "../components/ProjectsGrid";
import projectData from "../data/Projects.json"

const Projects: React.FC = () => {
    // Example data for the grid
    const projects = projectData;

    return (
        <div className="projects">
            <ImageGrid projects={projects} /> {/* Add the grid of projects */}
        </div>
    );
};

export default Projects;