import React from "react"
import { withRouter } from "react-router-dom";
import '../skelton/css/bootstrap.min.css'
import '../skelton/css/styles.css'
import '../skelton/images/favicon.png'
import investQwiseLoginPageImg from '../skelton/images/investQwiseLoginPage.png'

import FacebookLogin from './FacebookLogin'
import GoogleLogin from './GoogleLogin'
import LinkedInLogin from './LinkedInLogin'
import TwitterLogin from './TwitterLogin'
import App from '../../App'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            OnDemandHomeContainer: null
        } 
    }
     
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width = device-width, initial-scale = 1, shrink-to-fit = no" />
                    <title>InvestOwise</title>
                </head> 
                <body>
                    <div class="loginWrapper">
                        <div class="loginLeft"></div>
                        <div class="loginRight">
                            <div class="text-center pb-4">
                                <img src={investQwiseLoginPageImg} alt="" />
                            </div>
                            <div class="loginTitle text-center mb-3">Welcome to InvestOwise</div>
                            <div class="loginFldsWrap">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text userLoginIcon"></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Username" />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text passLoginIcon"></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Username" />
                                </div>
                                <div class="clearfix mb-3 mt-3">
                                    <div class="checkbox float-left">
                                        <label>
                                            <input type="checkbox" value="" />
                                            Remember Me
                              </label>
                                    </div>
                                    <a  class="float-right mt-1" >Forgot your password? Get help</a>
                                </div>
                                <button
                                    type="button"
                                    id="loginBtn"
                                    class="btn btn-primary loginBtn mb-3 text-uppercase" 
                                >Login</button>
                                <div class="text-center mt-2 mb-3">Don't have an account? <a >Sign Up Now</a></div>
                                <div class="orSpacer text-center mb-3">
                                    <span>Or</span>
                                </div>
                                <div class="text-center socialIconsWrap">
                                    <span>Continue with social media</span>
                                    <ul class="mt-4"> 
                                        <li><FacebookLogin /></li>
                                        <li><GoogleLogin /></li>
                                        <li><TwitterLogin /></li>
                                        <li><LinkedInLogin /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                </body>
            </html>
        )
    }
}
export default Login
