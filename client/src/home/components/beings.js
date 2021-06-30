// Dependencies:
import React from "react";
import Being from "./being";

// Beings component UI:
export default function Beings(props) {

    const BeingsList = props.beings.map( (being, index) => (
        <Being key={being._id} being={being} index={index}/>
    ));

    return (
        <ul className="list-group">
            <li className="list-group-item border-0">
                <div className="row">
                    <div className="col-6">
                        <p className="ml-1">Name</p>
                    </div>
                    <div className="col">
                        <p className="float-right">Galaxy</p>
                    </div>
                    <div className="col">
                        <p className="float-right">Planet</p>
                    </div>
                    <div className="col">
                        <p className="float-right">Priority</p>
                    </div>
                </div>
            </li>
            { BeingsList }
        </ul>
    );
} 