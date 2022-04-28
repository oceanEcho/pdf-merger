import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Navigation } from './components/Navigation';
import { Home } from './pages';

export default function App() {
  return (
    <Router>
      <Layout sidebarContent={<Navigation />}>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
