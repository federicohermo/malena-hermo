// App.tsx
import React from "react";
import {BrowserRouter} from 'react-router-dom';
import { ApplicationAccessRoutes } from './Acceses';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>  
      <ApplicationAccessRoutes/>
    </BrowserRouter>
  );
}

export default App;
