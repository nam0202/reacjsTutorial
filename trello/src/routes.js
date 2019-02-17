import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFound';
import BoardsListsPage from './pages/BoardsPage/BoardsListsPage';
import BoardsActionPage from './pages/BoardsActionPage/BoardsActionPage';
import BoardPage from './pages/BoardsPage/BoardPage';


const routes =[
    {
        path:['/home','/'],
        exact:true,
        main: ({history}) =><HomePage history={history} />
    },
    {
        path:'/boards',
        exact:true,
        main: ({match,history}) =><BoardsListsPage match = {match} history={history} />
    },
    {
        path:'/boards/add',
        exact:true,
        main: ({history}) =><BoardsActionPage history = {history} />
    },
    {
        path:'/boards/:id/edit',
        exact:true,
        main: ({match,history}) =><BoardsActionPage match = {match} history={history}/>
    },
    {
        path:'/boards/:id',
        exact:false,
        main: ({match,history}) =><BoardPage match = {match} history={history}/>
    },
    {
        path:'',
        exact: false,
        main: () => <NotFoundPage />
    }

];

export default routes;