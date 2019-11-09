import React from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import './App.styl';

const App: React.FC = () => {
  return (
    <HashRouter>
      { renderRoutes(routes) }
    </HashRouter>
  );
}

export default App;
