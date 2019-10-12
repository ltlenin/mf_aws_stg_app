import React from "react"
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions'

import '../skelton/css/bootstrap.min.css'
import '../skelton/css/styles.css'
import '../skelton/images/favicon.png'
import investQwiseLoginPageImg from '../skelton/images/investQwiseLoginPage.png'


import FacebookLogin from './FacebookLogin'
import GoogleLogin from './GoogleLogin'
import LinkedInLogin from './LinkedInLogin'
import TwitterLogin from './TwitterLogin'

class Login extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSocialSubmit = this.handleSocialSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    handleSocialSubmit(e) {
        alert("handleSocialSubmit")
        this.setState({ submitted: true });
        this.setState({ username: e.emails[0].value });
        this.setState({ password: 'password: ' });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <html lang="en">
                <head>
                    <title>InvestOwise</title>
                </head>
                <body>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div class="loginWrapper">
                            <div className="loginLeft"></div>
                            <div class="loginRight">
                                <div className="text-center pb-4">
                                    <img src={investQwiseLoginPageImg} alt="" />
                                </div>
                                <div className="loginTitle text-center mb-3">Welcome to InvestOwise</div>
                                <div className="loginFldsWrap">
                                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')} >
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text userLoginIcon"></span>
                                            </div>
                                            <input
                                                name="username"
                                                type="text"
                                                className="form-control"
                                                placeholder="Username"
                                                value={username}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        {submitted && !username &&
                                            <div className="help-block">Username is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text passLoginIcon"></span>
                                            </div>

                                            <input
                                                name="password"
                                                type="text"
                                                className="form-control"
                                                placeholder="Password"
                                                value={password}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        {submitted && !password &&
                                            <div className="help-block">Password is required</div>
                                        }
                                    </div>
                                    <div className="clearfix mb-3 mt-3">
                                        <div className="checkbox float-left">
                                            <label>
                                                <input type="checkbox" value="" />
                                                Remember Me
                                            </label>
                                        </div>
                                        <a  className="float-right mt-1" >Forgot your password? Get help</a>
                                    </div>
                                    <div className="form-group">
                                        <button
                                            className="btn btn-primary loginBtn mb-3 text-uppercase"
                                        >Login</button>
                                        {loggingIn &&
                                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                        }
                                        <div className="text-center mt-2 mb-3">Don't have an account?
                                                <Link to="/register" className="btn btn-link">Register</Link>
                                        </div>
                                    </div>
                                    <div className="orSpacer text-center mb-3">
                                        <span>Or</span>
                                    </div>
                                    <div className="text-center socialIconsWrap">
                                        <span>Continue with social media</span>
                                        <ul className="mt-4">
                                            <li><FacebookLogin /></li>
                                            <li><GoogleLogin
                                                data={this.state}
                                                handleSocialSubmit={this.handleSocialSubmit} /></li>
                                            <li><TwitterLogin /></li>
                                            <li><LinkedInLogin /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </body>
            </html>
        )
    }
}
function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

//const connectedLoginPage = connect(mapState, actionCreators)(Login);
export default connect(mapState, actionCreators)(Login)
