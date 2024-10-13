import React from 'react';
import Grid from "../components/Grid";
import data from "../data/Data.json"


const Internships: React.FC = () => {
    // Example data for the grid
    const internships = data.filter(item => item.tags.includes("pasantía"));

    return (
        <div className="internships">
            <Grid data={internships} isHome={false} />
        </div>
    );
};

export default Internships;