import React from 'react';

import Home from './components/content/Home';
import About from './components/content/About';
import Contact from './components/content/Contract';
import Tasks from './components/content/Tasks';
import Task from './components/content/task';
import Login from './components/content/Login';

import Notfound from './components/content/Notfound';

const routes = [
    {
        path: ['/', '/home'],
        exact: true,
        main: () => <Home />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/tasks',
        exact: true,
        main: ({match,location}) => <Tasks match={match} location={location}/>
    },
    {
        path: '/task/:slug',
        exact: false,
        main: ({match}) => <Task match={match} />
    },
    {
        path: '/login',
        exact: true,
        main: ({location}) => <Login location={location} />
    },
    {
        path: '',
        exact: false,
        main: () => <Notfound />
    }
];

export default routes;
