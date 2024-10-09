import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Grid.css'; // Import the CSS for the grid

interface Data {
    id: number;
    title: string;
    description: string;
    miniature: string;
    route: string;
    year: string;
}

interface GridProps {
    data: Data[];
    isHome: boolean;
}

const Grid: React.FC<GridProps> = ({ data, isHome }) => {
    const navigate = useNavigate();

    const handleItemClick = (title: string, route: string) => {
        // Generate dynamic URL using the project title
        const urlTitle = title.toLowerCase().replace(/\s+/g, '-'); // Convert title to URL-friendly format
        navigate(`/${route}/${urlTitle}`);
    };

    /*"https://mir-s3-cdn-cf.behance.net/projects/404/b33fa1185954143.Y3JvcCwxMzgwLDEwODAsMjczLDA.jpg", INJUVE MINIATURA*/

    useEffect(() => {console.log})

    return (
        <div className="grid-container">
            {data && data.slice().reverse().map((item) => (
                <div key={item.id} className="grid-item" onClick={() => handleItemClick(item.title, item.route)}>
                    <div className="grid-image-container">
                        {item.miniature.match("(.*?)\\s(.*?)") ? <h3 className='grid-quote'>{item.miniature}</h3> : <img src={item.miniature} alt={item.title} className="grid-image" />}
                    </div>
                    <div className="grid-title">{isHome ? item.route.toUpperCase() : item.title}</div>
                    <div className="grid-description">{isHome ? item.title : item.year}</div>
                </div>
            ))}
        </div>
    );
};

export default Grid;
