import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const ProblemsPage = React.lazy(() =>
  import('./problems')
);
const PassagesPage = React.lazy(() =>
  import('./passages')
);
const LessonsPage = React.lazy(() =>
  import('./lessons')
);

class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect exact from={`${match.url}/`} to={`${match.url}/problems`} />
              <Route
                path={`${match.url}/problems`}
                render={props => <ProblemsPage {...props} />}
              />
              <Route
                path={`${match.url}/passages`}
                render={props => <PassagesPage {...props} />}
              />
              <Route
                path={`${match.url}/lessons`}
                render={props => <LessonsPage {...props} />}
              />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
