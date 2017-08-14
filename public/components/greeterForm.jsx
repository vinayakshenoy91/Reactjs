import React from 'react';

var GreeterForm = React.createClass({
        onFormSubmit: function (e) {
            e.preventDefault();
            var name = this.refs.name.value;

            if (typeof name === 'string' && name.length > 0) {
                this.refs.name.value = '';
                this.props.onNewName(name);
            }

        },
        render: function () {
            return (
                <div>
                    <form onSubmit={this.onFormSubmit}>
                        <input id="inputName" type="text" ref="name"/>
                        <button>Set name</button>
                    </form>
                </div>
            );
        }
    })
;


module.exports=GreeterForm;


