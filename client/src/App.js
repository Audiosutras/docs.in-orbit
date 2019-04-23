import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Progress from './pages/Progress';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Progress} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
