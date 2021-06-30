// ==============================================
// Home Component:
// ==============================================

// Dependencies:
import React from "react";
import queryString from "query-string";
import ReactModal from "react-modal";
import { Modal } from "react-bootstrap";

// Components:
import Search from "./components/search";
import Beings from "./components/beings";

// Services:
import { beingService } from "../services";
import SuspectCreation from "./components/suspect-creation";

// Function to check if a planet is a prime:
const isPrime = num => {
    let primes = [2];

    for (let n = 3; n <= num; n += 2) {
        for (let i = 0; i < primes.length; i++) {
            if (n % primes[i] == 0) primes.push(n);
        }
    }

    return primes[primes.length - 1] == num;
}

// Home Component:
export default class Home extends React.Component {
    componentDidMount = async () => {
    
        // API Calls:
        const beings = await beingService.getBeings(this.state.search);
    
        // Set State:
        this.setState({
            beings
        });
    };

    constructor(props) {
        super(props);

        this.state = {
            beings: [],
            search: "",
            creationIsOpen: false,
            creation: {
                name: "",
                priority: 5,
                galaxy: "",
                planet: "",
                description: ""
            },
            lockPlanet: false
        }

        this.openCreation = this.openCreation.bind(this);
        this.closeCreation = this.closeCreation.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._handleCreationSubmit = this._handleCreationSubmit.bind(this);
        this._handleSearch = this._handleSearch.bind(this);
        this._handleSearchSubmit = this._handleSearchSubmit.bind(this);
    }

    openCreation() {
        this.setState({
            creationIsOpen: true
        });
    }

    closeCreation() {
        this.setState({
            creationIsOpen: false
        });
    }

    _handleChange = event => {
        const target = event.target;
        const { name, value } = target;

        let creation = this.state.creation;
        creation[name] = value;

        if (isPrime(this.state.creation.galaxy)) {
            creation.planet = "Pluto";
            this.setState({
                creation,
                lockPlanet: true
            });
        } else {
            this.setState({
                creation,
                lockPlanet: false
            });
        }
    }

    _handleSearch = event => {
        const target = event.target;
        const { value } = target;

        this.setState({
            search: value
        });
    }

    _handleSearchSubmit = async event => {
        event.preventDefault();

        try {
            const beings = await beingService.getBeings(this.state.search);

            this.setState({
                beings
            });
        } catch(e) {
            console.log(e);
        }
    }

    _handleCreationSubmit = async event => {
        event.preventDefault();

        try {
            const status = await beingService.createBeing(this.state.creation);

            if (status) {
                this.closeCreation();
                // TODO: Set up adding on client side to reduce calls to server
                // For now just call the get request.
                const beings = await beingService.getBeings(this.state.search);
                this.setState({
                    beings,
                    creation: {
                        name: "",
                        priority: 5,
                        galaxy: "",
                        planet: "",
                        description: ""
                    }
                });
            }
        } catch(e) {
            // TODO: Create an error message.
            console.log(e);
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row mb-3">
                    <div className="col">
                        <h3 className="text-info float-left">Suspects</h3>
                    </div>
                    <div className="col">
                        <button onClick={ this.openCreation } className="btn btn-info float-right">Add Suspect</button>
                    </div>
                </div>
                <Search search={ this.state.search } submitSearch={ this._handleSearchSubmit } handleChange={ this._handleSearch }/>
                <Beings beings={this.state.beings} />
                <Modal keyboard={false} backdrop="static" onHide={ this.closeCreation } show={ this.state.creationIsOpen }>
                    <SuspectCreation submit={this._handleCreationSubmit} lockPlanet={this.state.lockPlanet} handleChange={this._handleChange} creation={this.state.creation} close={ this.closeCreation } />
                </Modal>
            </div>
        );
    }
}