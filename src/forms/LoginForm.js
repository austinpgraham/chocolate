import React, { Component } from 'react';
import Title from '../components/text/Title';
import TextInput from '../components/text/TextInput';
import ErrorText from '../components/text/ErrorText';
import PrimaryButton from '../components/buttons/PrimaryButton';
import { ROOT } from '../constants';
import axios from 'axios';
import Loader from 'react-loader-spinner';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.doLogin = this.doLogin.bind(this);
        this.navigateToRegister = this.navigateToRegister.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.renderError = this.renderError.bind(this);
        this.renderLoader = this.renderLoader.bind(this);
        this.state = {username: "Username", password: "Password", errorText: null, is_loading: false}
    }

    doLogin() {
        this.setState({is_loading: true, errorText: null});
        const URL = ROOT + "/auth/login";
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post(URL, user).then(response =>
            window.location.assign('/dashboard/' + this.state.username)
        ).catch(error =>
            this.setState({errorText: error.response.data["message"], is_loading: false})
        )
    }

    navigateToRegister() {
        this.setState({is_loading: true, errorText: null});
        window.location.assign("/register");
    }

    handleUsernameChange = function(e) {
        this.setState({username: e.target.value})
    }

    handlePasswordChange = function(e) {
        this.setState({password: e.target.value})
    }

    renderError() {
        if(this.state.errorText != null) {
            return <ErrorText text={this.state.errorText}/>;
        }
        return null;
    } 

    renderLoader() {
        if(this.state.is_loading) {
            return <Loader type="ThreeDots" color="gray" height={70} width={70} />
        }
        return null;
    }

    render() {
        return (
            <div style={styles.container}>
                <Title text="Chocolate"/>
                <TextInput placeholder={this.state.username} onChange={this.handleUsernameChange} required/>
                <TextInput placeholder={this.state.password} type="password" onChange={this.handlePasswordChange} required/>
                <div style={styles.buttonContainer}>
                    <PrimaryButton text="Login" onClick={this.doLogin} />
                    <PrimaryButton text="Register" onClick={this.navigateToRegister} />
                </div>
                {this.renderLoader()}
                {this.renderError()}
            </div>
        );
    }
}

var styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default LoginForm;
