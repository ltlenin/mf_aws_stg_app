import React, { Component } from 'react';
import config from './config'

class GoogleLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        (function () {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        })();
    }

    //Triggering login for google
    googleLogin = () => {
        window.gapi.auth.signIn({
            callback: function (authResponse) {
                this.googleSignInCallback(authResponse)
            }.bind(this),
            clientid: config.google, //Google client Id
            cookiepolicy: "single_host_origin",
            requestvisibleactions: "http://schema.org/AddAction",
            scope: "https://www.googleapis.com/auth/plus.login email"
        });
    }

    googleSignInCallback = (e) => {
        console.log(e)
        if (e["status"]["signed_in"]) {
            window.gapi.client.load("plus", "v1", function () {
                if (e["access_token"]) {
                    this.getUserGoogleProfile(e["access_token"])
                } else if (e["error"]) {
                    console.log('Import error', 'Error occured while importing data')
                }
            }.bind(this));
        } else {
            console.log('Oops... Error occured while importing data')
        }
    }

    getUserGoogleProfile = accesstoken => {
        var e = window.gapi.client.plus.people.get({
            userId: "me"
        });
        e.execute(function (e) {
            if (e.error) {
                console.log(e.message);

                console.log('Import error - Error occured while importing data')
                return

            } else if (e.id) {
                //Profile data 
                console.clear()  
                let  username = e.emails[0].value;
                let  password = 'password';
                if (username && password) { 
                    this.props.handleSocialSubmit(e)
                } 
                // this.setState({ lastname: e.emails[0].value });
                // console.log(e.name.givenName + " " + e.name.familyName + " " + e.emails[0].value)
                return;
            }
        }.bind(this));
    }

    render() {
        return (
            <a  className="google" alt="google" onClick={() => this.googleLogin()}></a>
        )
    }
}

export default GoogleLogin;