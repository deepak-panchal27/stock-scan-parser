import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import routes from '../routes' 

function RouterProvider() {
  return (
    <Router>
      <Routes>
        {
          routes.map(route => 
            <Route key={route.path} path={route.path} element={<route.component/>} exact={route.exact} />
          )
        } 
      </Routes>
    </Router>
  )
}

export default RouterProvider;