import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header";
import ProjectPage from './pages/ProjectPage'; // New page for individual project
import WritingPage from './pages/WritingPage'; // New page for individual writing
import NotFound from './components/NotFound';
import Projects from "./pages/Projects";
import Writings from "./pages/Writings"
import "./styles/App.css";


export function ApplicationAccessRoutes(){
    const AvailableRoutes =()=>{
        return(
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/proyectos" element={<Projects />} >
                        <Route path=":title" element={<ProjectPage />} />
                    </Route>
                    <Route path="/escritos" element={<Writings />}>
                        <Route path=":title" element={<WritingPage />} />
                    </Route>
                    <Route path="*" element={<NotFound route=""/>} />
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