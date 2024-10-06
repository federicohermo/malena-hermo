import React from 'react';
import ImageGrid from "../components/ProjectsGrid";
import projectData from "../data/Projects.json"
import { Outlet, useParams } from 'react-router-dom';


const Projects: React.FC = () => {
    // Example data for the grid
    const projects = projectData;
    const { title } = useParams<{ title: string }>();
    return (
        <div className="projects">
            {title !== undefined ?
            <Outlet />
            :
            <ImageGrid projects={projects} /> }
        </div>
    );
};

export default Projects;