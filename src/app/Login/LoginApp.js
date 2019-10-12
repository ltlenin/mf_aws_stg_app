import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../_helpers';
import { alertActions } from '../../_actions';
import { PrivateRoute } from '../../_components';
//import { HomePage } from '../HomePage';
import   LoginPage from  '../Login/Login'
import { RegisterPage } from '../../RegisterPage';
import MainApp from '../../App'
import { withRefreshedStore } from '../../app/reducers/storeManager'


class LoginApp extends React.Component {
    constructor(props) {
        super(props);
      
        history.listen((location, action) => {
            // clear alert on location change 
            this.props.clearAlerts(); 
        });
    }
    // componentWillMount() {
    //     withRefreshedStore(import('../Profile/containers/ProfileContainer')).then((module) => {
    //       this.setState({ OnDemandHomeContainer: module.default });
    //     });
    //   }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={MainApp} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

export default connect(mapState, actionCreators)(LoginApp);
 