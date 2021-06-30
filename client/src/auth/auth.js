// ==============================================
// Auth Component:
// ==============================================

// Dependencies:
import React from "react";
import { authenticationService } from "../services";

// Home Component:
export default class Home extends React.Component {
    componentDidMount = async () => {

        document.title = "Login";
    
        // API Calls:

    };

    constructor(props) {
        super(props);

        this.state = {
            password: ""
        }

        this._handleChange = this._handleChange.bind(this);
        this._onLogin = this._onLogin.bind(this);
    }

    // Event Listener to change state on input:
    _handleChange = event => {
        const target = event.target;
        const { value } = target;

        this.setState({
            password: value
        });
    }

    // Event Listener to log in user:
    _onLogin = async e => {
        e.preventDefault();
        try {
            const status = await authenticationService.login(this.state.password);
            if (status) this.props.history.push("/");
        } catch (e) {
            this.setState({
                errorMessage: true
            });
        }
    }


    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    
    
                    <form>
                        <input onChange={this._handleChange} value={this.state.password} type="password" id="password" className="fadeIn third" name="password" placeholder="password" />
                        <input onClick={this._onLogin} type="submit" className="fadeIn fourth" value="Log In" />
                    </form>
    
                </div>
            </div>
        )
    }
}