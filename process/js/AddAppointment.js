var React = require('react');

var AddAppointment = React.createClass({
    toggleAptDisplay: function() {
        this.props.handleToggle();
    },

    handleAdd: function(e) {
        var tempItem = {
            userEmail: this.refs.inputUserEmail.value
        }// tempItem
        e.preventDefault();
        if (this.validateEmail(this.refs.inputUserEmail.value)) {
            this.props.signupUser(tempItem);
        } else {
            this.props.showInvalidEmail();
        }
        
    },// handleAdd

    validateEmail: function (value) {
        // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    },

    render: function() {
        var displayAptBody = {
            display: this.props.bodyVisible ? 'block': 'none'
        };
        
        var displaySignupResponse = {
            display: this.props.signupResponseVisible ? 'block': 'none'
        };

        var displayInvalidEmail = {
            display: this.props.signupInvalidEmailVisible ? 'block': 'none'
        };

        return (
            <div className="panel panel-primary">
                <div className="panel-heading apt-addheading" onClick={ this.toggleAptDisplay }>
                <span className="glyphicon glyphicon-plus"></span> Free Gifts</div>
                <div className="panel-body" style={displayAptBody}>
                    <div className="form-group">
                        <label className="control-label" for="signup">Signup for free gifts</label>
                    </div>
                    <form className="add-appointment form-horizontal"
                        onSubmit={ this.handleAdd }>
                        <div className="form-group">
                        <label className="col-sm-2 control-label" for="email">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"
                            id="email" ref="inputUserEmail" placeholder="Email" />
                        </div>
                        </div>
                    
                        <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary pull-right">Signup</button>
                        </div>
                        </div>
                    </form>
                    <div className="panel-body" style={displaySignupResponse}>
                        Thank you for signing up. Please don't forget to review us on Amazon :-)
                    </div>
                    <div className="panel-body" style={displayInvalidEmail}>
                        The entered email address is invalid. Please enter a valid address :-)
                    </div>
                </div>

            </div>
        )// return
    }// render

});// AddAppointment

module.exports = AddAppointment;