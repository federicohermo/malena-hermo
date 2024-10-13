import React from 'react';
import Grid from "../components/Grid";
import data from "../data/Data.json"


const Drawings: React.FC = () => {
    // Example data for the grid
    const drawings = data.filter(item => item.tags.includes("croquis"));

    return (
        <div className="drawings">
            <Grid data={drawings} isHome={false} />
        </div>
    );
};

export default Drawings;