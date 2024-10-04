import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Grid.css'; // Import the CSS for the grid

interface Project {
    id: number;
    title: string;
    description: string;
    miniatureUrl: string;
    link: string;
}

interface ProjectsGridProps {
    projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
    const navigate = useNavigate();

    const handleProjectClick = (title: string) => {
        // Generate dynamic URL using the project title
        const urlTitle = title.toLowerCase().replace(/\s+/g, '-'); // Convert title to URL-friendly format
        navigate(`/proyectos/${urlTitle}`);
    };

    /*"https://mir-s3-cdn-cf.behance.net/projects/404/b33fa1185954143.Y3JvcCwxMzgwLDEwODAsMjczLDA.jpg", INJUVE MINIATURA*/

    return (
        <div className="grid-container">
            {projects.slice().reverse().map((project) => (
                <div key={project.id} className="grid-item" onClick={() => handleProjectClick(project.title)}>
                    <img src={project.miniatureUrl} alt={project.title} className="grid-image" />
                    <div className="grid-title">{project.title}</div>
                    <div className="grid-description">{project.description}</div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsGrid;
