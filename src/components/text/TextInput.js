import React, { Component } from 'react';

class TextInput extends Component {
    render() {
        var {type, placeholder, ...other} = this.props;
        return(
            <input type={type} placeholder={placeholder} style={styles.input} {...other}/>
        );
    }
}

var styles = {
    input: {
        height: 45,
        width: 350,
        borderRadius: 4,
        border: '1px solid white',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        marginTop: 4,
        marginBottom: 4,
        paddingLeft: 4,
        fontFamily: 'Didot, sansserif',
        fontSize: 17
    }
}

export default TextInput;
