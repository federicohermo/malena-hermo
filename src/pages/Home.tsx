// Home.tsx
import React, { useState } from 'react';
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import data from "../data/Data.json";

const Home: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>(''); // State to store the search query
    const items = data;

    // Filter the items based on the search query (matching title, description, or tags)
    const filteredData = items.filter((item) => {
        const searchTerm = searchQuery.toLowerCase();
        const { title, description, tags } = item;
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
            <Grid data={filteredData} />
        </div>
    );
};

export default Home;
