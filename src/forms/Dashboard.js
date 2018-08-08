import React, { Component } from 'react';
import PrimaryButton from '../components/buttons/PrimaryButton';
import axios from 'axios';
import { ROOT } from '../constants';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.doLogout = this.doLogout.bind(this);
    }

    doLogout() {
        var url = ROOT + "/auth/logout";
        axios.get(url).then( response =>
            window.location.assign("/")
        ).catch( error => 
            console.log(error.response)
        );
    }

    render() {
        return (
            <PrimaryButton text="Logout" onClick={this.doLogout} disabled={false} />
        );
    }
}

var styles = {
    formContainer:{

    },
}

export default Dashboard;
