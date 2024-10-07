import React from 'react';
import Grid from "../components/Grid";
import { Outlet, useParams } from 'react-router-dom';
import data from "../data/Data.json"


const Projects: React.FC = () => {
    // Example data for the grid
    const projects = data.filter(item => item.route.includes("proyectos"));
    const { title } = useParams<{ title: string }>();

    return (
        <div className="projects">
            {title !== undefined ?
            <Outlet />
            :
            <Grid data={projects}/> }
        </div>
    );
};

export default Projects;