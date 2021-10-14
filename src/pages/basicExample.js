import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './home'
import About from './about'
import Dashboard from './dashboard'
import NotFoundPage from './notfound'
import MainLayout from '../layouts/mainLayout';

// You can think of these components as "pages"
// in your app.



// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
const routes = [
  {
    path: "/",
    exact : true,
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "*",
    component: NotFoundPage
  }
];

const BasicExample = () => {
  return (
    <Router>
      <MainLayout>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          {
            routes.map((route, index) => 
              <Route 
                key={index} 
                path={route.path} 
                component={route.component} 
                exact={route.exact} 
              />
            )
          }
        </Switch>
      </MainLayout>
    </Router>
  );
}



export default BasicExample;