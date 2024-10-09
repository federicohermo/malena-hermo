import React from 'react';
import Grid from "../components/Grid";
import { Outlet, useParams } from 'react-router-dom';
import data from "../data/Data.json"


const Writings: React.FC = () => {
    // Example data for the grid
    const writings = data.filter(item => item.route.includes("escritos"));
    const { title } = useParams<{ title: string }>();

    return (
        <div className="writings">
            {title !== undefined ?
            <Outlet />
            :
            <Grid data={writings} isHome={false} />}
        </div>
    );
};

export default Writings;