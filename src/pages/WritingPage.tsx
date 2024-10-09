// pages/ProjectPage.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import writings from '../data/Data.json'; // Import the JSON file
import NotFound from '../components/NotFound';
import '../styles/WritingPage.css'

const WritingPage: React.FC = () => {
    const { title } = useParams<{ title: string }>(); // Get the project title from URL params

    // Find the project that matches the title
    const writing = writings.find((writing) => writing.title.toLowerCase().replace(/\s+/g, '-') === title);

    if (!writing) {
        return <NotFound route='escritos'/>;
    }

    // Custom link component to open in a new tab
    const MarkdownLink = (props: any) => {
        return (
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                {props.children}
            </a>
        );
    };

    return (
        <div className="writing-page">
            <h3>{writing.title}</h3>
            <div>
                {writing.content && writing.content.length > 0 && writing.content.map((paragraph: string, index: number) => (
                    <ReactMarkdown 
                        key={index}
                        components={{
                            a: MarkdownLink,  // Override the rendering of <a> tags
                        }}
                    >
                        {paragraph}
                    </ReactMarkdown>
                ))}
            </div>
        </div>
    );
};

export default WritingPage;
