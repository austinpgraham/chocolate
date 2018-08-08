import React, { Component } from 'react';

class PrimaryButton extends Component {

    constructor(props) {
        super(props);
        this.state = {style: styles.defaultButton}
        this.doClick = this.doClick.bind(this);
    }

    doClick() {
        this.props.onClick();
    }

    render () {
        return (
            <button onClick={this.doClick} style={this.props.disabled ? styles.disabledButton : styles.defaultButton} disabled={this.props.disabled}>
                {this.props.text}
            </button>
        );
    }
}

var styles = {
    defaultButton: {
        border: '1px solid #FF9633',
        borderRadius: 4,
        color: 'white',
        backgroundColor: '#FF9633',
        fontFamily: 'helvetica',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 4,
        marginRight: 4,
        width: 175,
        height: 50,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)'
    },
    disabledButton: {
        border: '1px solid gray',
        borderRadius: 4,
        color: 'white',
        backgroundColor: 'gray',
        fontFamily: 'helvetica',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 4,
        marginRight: 4,
        width: 175,
        height: 50,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)'
    }
}

export default PrimaryButton;
