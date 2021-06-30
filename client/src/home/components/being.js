// Dependencies:
import React from "react";

// Being component UI:
export default function Being(props) {
    const { being, index } = props;
    let classes = "list-group-item border-left-0 border-right-0 border-top";

    if (index >= 1) {
        classes = "list-group-item border-left-0 border-right-0 border-top-0";
    }
    return (
        <li className={classes}>
            <div className="row">
                <div className="col-6">
                    <a className="ml-1 text-info">{being.name}</a>
                </div>
                <div className="col">
                    <span className="float-right text-info">{being.galaxy}</span>
                </div>
                <div className="col">
                    <span className="float-right text-info">{being.planet}</span>
                </div>
                <div className="col">
                    <span className="float-right text-info">{being.priority}</span>
                </div>
            </div>
        </li>
    );
}