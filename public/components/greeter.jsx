/**
 * Created by vinayakshenoyk on 13/08/17.
 */
import React from 'react';
var GreeterMessage=require('greeterMessage');
var GreeterForm=require('greeterForm');

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is Greeter'
        };
    },

    getInitialState: function () {
        return {
            name: this.props.name
        };
    },

    handleNewName: function (name) {
        this.setState({
            name: name
        });
    },

    render: function () {

        var name = this.state.name;
        var message = this.props.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName}/>
            </div>

        );
    }
});

module.exports=Greeter;