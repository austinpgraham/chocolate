import React, { Component } from 'react';

class ErrorText extends Component {
    render() {
        return (
            <p style={styles.text}>{this.props.text}</p>
        );
    }
}

var styles = {
    text: {
        color: 'red',
        fontWeight: 'bold',
        fontFamily: 'Didot, serif',
        fontSize: 15
    }
}

export default ErrorText;