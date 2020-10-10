import RouteWithHeader from 'layouts/RouteWithHeader';
import { LandingPage, LoginPage, MainPage } from 'pages';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <RouteWithHeader exact path="/" component={LandingPage} />
        <RouteWithHeader exact path="/login" component={LoginPage} />
        <RouteWithHeader exact path="/main" component={MainPage} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
