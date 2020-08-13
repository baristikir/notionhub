import React from 'react';
import { Route } from 'react-router-dom';

import ProjectList from './containers/ProjectListView';
import ProjectDetail from './containers/ProjectDetailView';
import Login from './containers/Login';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ProjectList}/>
        <Route exact path='/projects/:projectID' component={ProjectDetail}/>
        <Route exact path='/login' component={Login}/>

    </div>
);

export default BaseRouter;
