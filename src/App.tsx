import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import AddGroupPage from './pages/AddGroupPage';
import GroupPage from './pages/GroupPage';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/group/:groupId" component={GroupPage}/>
        <Route path="/group" component={AddGroupPage}/>
        <Route path="/" component={HomePage}/>
      </Switch>
    </main>
  );
}

export default App;
