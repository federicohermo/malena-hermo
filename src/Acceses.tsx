import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header";
import ProjectPage from './pages/ProjectPage'; // New page for individual project
import NotFound from './components/NotFound';
import "./styles/App.css";
import Projects from "./pages/Projects";

export function ApplicationAccessRoutes(){
    const AvailableRoutes =()=>{
        return(
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/:title" element={<ProjectPage />} />
                    <Route path="/proyectos" element={<Projects />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
        )
    }
    return(
        <div className="App">
            <Header />
            <Header display={true} />
            <AvailableRoutes />
            
            <footer className="footer">
                <p>Malena Hermo 2024 | malenahermo.com.ar</p> 
            </footer>
        </div>
    ) 
}