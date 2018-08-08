import React, { Component } from 'react';

class HeaderText extends Component {
    render() {
        return (
            <h1 style={styles.text}>{this.props.text}</h1>
        );
    }
}

var styles = {
    text: {
        color: '#FF9633',
        fontFamily: 'Didot, serif',
        fontSize: 100
    }
}

export default HeaderText;
