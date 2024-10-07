import React from 'react';
import ImageGrid from "../components/ProjectsGrid";
import { Outlet, useParams } from 'react-router-dom';
import writingsData from '../data/Writings.json'


const Projects: React.FC = () => {
    // Example data for the grid
    const writings = writingsData;
    const { title } = useParams<{ title: string }>();

    return (
        <div className="projects">
            Writings
        </div>
    );
};

export default Projects;