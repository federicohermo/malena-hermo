// components/SearchBar.tsx
import React from "react";
import '../styles/SearchBar.css';

interface SearchBarProps {
    setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value); // Update the search query in the parent component
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="→ Buscá lo que quieras..."
                onChange={handleInputChange} // Update search query on input change
            />
        </div>
    );
};

export default SearchBar;
