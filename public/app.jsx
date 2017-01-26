var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('./components/GreeterMessage');
var GreeterForm = require('./components/GreeterForm');



var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is from the component!'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },

    handleNewData: function (updates) {
        this.setState(updates);
    },


    render: function(){
        var name= this.state.name;
        var message= this.state.message;
        return(
            <div>

                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});

var firstName='Nikhil';


ReactDOM.render(
    <Greeter name={firstName} message='This is a Default message!'/>,
    document.getElementById('app')
);
