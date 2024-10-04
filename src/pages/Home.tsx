// Home.tsx
import React, { useState } from 'react';
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import ProjectsGrid from "../components/ProjectsGrid";
import projectData from "../data/Projects.json";

const Home: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>(''); // State to store the search query
    const projects = projectData;

    // Filter the projects based on the search query (matching title, description, or tags)
    const filteredProjects = projects.filter((project) => {
        const searchTerm = searchQuery.toLowerCase();
        const { title, description, tags } = project;
        return (
            title.toLowerCase().includes(searchTerm) ||
            description.toLowerCase().includes(searchTerm) ||
            (tags && tags.some((tag: string) => tag.toLowerCase().includes(searchTerm)))
        );
    });

    return (
        <div className="home">
            <Navigation />
            {/* Pass the search handler to SearchBar */}
            <SearchBar setSearchQuery={setSearchQuery} />
            {/* Pass the filtered projects to the ProjectsGrid */}
            <ProjectsGrid projects={filteredProjects} />
        </div>
    );
};

export default Home;
