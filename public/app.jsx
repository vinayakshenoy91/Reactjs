var GreeterMessage = React.createClass({


    render: function () {
        var nameLocal = this.props.name;
        var messageLocal = this.props.message;
        return (
            <div>
                <h1>Hi {nameLocal}</h1>
                <p>{messageLocal}</p>
            </div>
        );

    }
});


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

ReactDOM.render(<Greeter/>, document.getElementById('app'));