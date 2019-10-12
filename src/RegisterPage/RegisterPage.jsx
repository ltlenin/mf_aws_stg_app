import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import investQwiseLoginPageImg from '../../src/app/skelton/images/investQwiseLoginPage.png'
class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstname: '',
                lastname: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
         
        this.setState({ submitted: true });
        const { user } = this.state; 
        if (user.firstname && user.lastname && user.username && user.password) { 
            this.props.register(user);
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
            <html lang="en">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Register</h2>
                    <body>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div class="loginWrapper">
                                <div className="loginLeft"></div>
                                <div class="loginRight">
                                    <div className="text-center pb-4">
                                        <img src={investQwiseLoginPageImg} alt="" />
                                        <div className="loginTitle text-center mb-3"></div>
                                        <div className="loginFldsWrap">
                                            <div className={'form-group' + (submitted && !user.firstname ? ' has-error' : '')}>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text userLoginIcon"></span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="firstname"
                                                        placeholder="First Name"
                                                        value={user.firstname}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                {submitted && !user.firstname &&
                                                    <div className="help-block">First Name is required</div>
                                                }
                                            </div>
                                            <div className={'form-group' + (submitted && !user.lastname ? ' has-error' : '')}>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text userLoginIcon"></span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="lastname"
                                                        placeholder="Last Name"
                                                        value={user.lastname}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                {submitted && !user.lastname &&
                                                    <div className="help-block">Last Name is required</div>
                                                }
                                            </div>
                                            <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text userLoginIcon"></span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="username"
                                                        placeholder="User Name"
                                                        value={user.username}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                {submitted && !user.username &&
                                                    <div className="help-block">User Name is required</div>
                                                }
                                            </div>
                                            <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text userLoginIcon"></span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="password"
                                                        placeholder="User Name"
                                                        value={user.password}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                {submitted && !user.password &&
                                                    <div className="help-block">Password is required</div>
                                                }
                                            </div>

                                            <div className="form-group">
                                                <button className="btn btn-primary">Register</button>
                                                {registering &&
                                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                                }
                                                <Link to="/login" className="btn btn-link">Cancel</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </body>
                </div>
            </html>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };