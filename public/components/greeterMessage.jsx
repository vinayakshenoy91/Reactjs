import React from 'react';

class GreeterMessage extends React.Component{
    render() {
        var nameLocal = this.props.name;
        var messageLocal = this.props.message;
        return (
            <div>
                <h1>Hi {nameLocal}</h1>
                <p>{messageLocal}</p>
            </div>
        );

    }
}
;

module.exports = GreeterMessage;