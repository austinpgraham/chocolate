import React, { Component } from 'react';
import Title from '../components/text/Title';
import TextInput from '../components/text/TextInput';
import ErrorText from '../components/text/ErrorText';
import PrimaryButton from '../components/buttons/PrimaryButton';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import { ROOT } from '../constants';

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {is_loading: false, errorText: null,
                      username: "Username",
                      first_name: "First Name",
                      last_name: "Last Name",
                      password: "Password",
                      confirm_password: "Confirm Password",
                      email: "Email",
                      student_id: "Student ID",
                      has_password_error: false,
                      has_email_error: false};
        this.renderPasswordError = this.renderPasswordError.bind(this);
        this.renderEmailError = this.renderEmailError.bind(this);
        this.renderError = this.renderError.bind(this);
        this.renderLoader = this.renderLoader.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleStudentIDChange = this.handleStudentIDChange.bind(this);
        this.doRegister = this.doRegister.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }

    handleUsernameChange = function(e) {
        this.setState({username: e.target.value, errorText: null})
    }

    handleFirstNameChange = function(e) {
        this.setState({first_name: e.target.value, errorText: null})
    }

    handleLastNameChange = function(e) {
        this.setState({last_name: e.target.value, errorText: null})
    }

    handlePasswordChange = function(e) {
        this.setState({password: e.target.value, errorText: null});
        this.setState({has_password_error: e.target.value !== this.state.confirm_password});
    }

    handleConfirmPasswordChange = function(e) {
        this.setState({confirm_password: e.target.value, errorText: null});
        this.setState({has_password_error: this.state.password !== e.target.value});
    }

    validateEmail = function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleEmailChange = function(e) {
        this.setState({email: e.target.value})
        this.setState({has_email_error: !this.validateEmail(e.target.value)});
    }

    handleStudentIDChange = function(e) {
        this.setState({student_id: e.target.value, errorText: null})
    }

    renderError() {
        if(this.state.errorText != null) {
            return <ErrorText text={this.state.errorText}/>;
        }
        return null;
    } 

    renderPasswordError() {
        if(this.state.has_password_error) {
            return <ErrorText text="Passwords do not match."/>;
        }
        return null;
    } 

    renderEmailError() {
        if(this.state.has_email_error) {
            return <ErrorText text="Invalid Email"/>;
        }
        return null;
    } 

    renderLoader() {
        if(this.state.is_loading) {
            return <Loader type="ThreeDots" color="gray" height={70} width={70} />
        }
        return null;
    }

    doRegister () {
        if (this.state.password.length <= 0 || this.state.password === "Password") {
            this.setState({errorText: "Password cannot be empty"});
        }
        if (this.state.student_id.length <= 0 || this.state.student_id === "Student ID") {
            this.setState({errorText: "Student ID cannot be empty"});
        }
        if (this.state.first_name.length <= 0 || this.state.first_name === "First Name") {
            this.setState({errorText: "First Name cannot be empty"});
        }
        if (this.state.last_name.length <= 0 || this.state.last_name === "Last Name") {
            this.setState({errorText: "Last Name cannot be empty"});       
        }
        if (this.state.username.length <= 0 || this.state.username === "Username") {
            this.setState({errorText: "Username cannot be empty"});
        }

        var newUser = {
            username: this.state.username,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            fbyf: this.state.student_id,
            email: this.state.email
        }
        this.setState({is_loading: true});
        var url = ROOT + "/users";
        axios.post(url, newUser).then(response =>
            window.location.assign("/")
        ).catch(error =>
            this.setState({errorText: error.response.data["message"], is_loading: false})
        );
    }

    render() {
        return (
            <div style={styles.formContainer}>
                <Title text="Welcome!" />
                <TextInput placeholder={this.state.username} onChange={this.handleUsernameChange} required />
                <TextInput placeholder={this.state.first_name} onChange={this.handleFirstNameChange} required />
                <TextInput placeholder={this.state.last_name} onChange={this.handleLastNameChange} required />
                <TextInput placeholder={this.state.password} onChange={this.handlePasswordChange} type="password" required />
                <TextInput placeholder={this.state.confirm_password} onChange={this.handleConfirmPasswordChange} type="password" required />
                {this.renderPasswordError()}
                <TextInput placeholder={this.state.email} onChange={this.handleEmailChange} required />
                {this.renderEmailError()}
                <TextInput placeholder={this.state.student_id} onChange={this.handleStudentIDChange} required />
                <PrimaryButton text="Create" onClick={this.doRegister} disabled={this.state.has_email_error || this.state.has_password_error}/>
                {this.renderError()}
                {this.renderLoader()}
            </div>
        );
    }
}

var styles = {
    formContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
}

export default RegisterForm;
