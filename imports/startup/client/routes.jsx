import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../../ui/App.jsx';
import Login from '../../ui/Login.jsx';
import SignUp from '../../ui/SignUp.jsx';
import NotFoundPage from '../../ui/NotFoundPage.jsx';
import QuestionsList from '../../ui/QuestionsList.jsx';
import QuestionPage from '../../ui/QuestionPage.jsx';

browserHistory.listen(function (location) {
    console.log("Page: " + location.pathname);
});

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={QuestionsList} />
      <Route path="login" component={Login} />
      <Route path="signup" component={SignUp} />
      <Route path=":questionId" component={QuestionPage} />
    </Route>
    <Route path="*" component={NotFoundPage}/>
  </Router>
);
