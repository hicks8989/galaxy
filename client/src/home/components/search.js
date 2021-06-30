// Dependencies:
import React from "react";

// Search component UI:
export default function Search(props) {
    return (
        <div className="input-group mb-3">
            <input onChange={props.handleChange} value={props.search} type="search" className="form-control rounded" placeholder="Search" />
            <button onClick={props.submitSearch} type="button" className="btn btn-outline-primary ml-2">search</button>
        </div>
    );
} 