// Dependencies:
import React from "react";
import { Modal } from "react-bootstrap";

// Search component UI:
export default function SuspectCreation(props) {
    return (
        <div>
            <Modal.Header>
                <Modal.Title>Add a suspect to the list</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input required name="name" onChange={props.handleChange} value={props.creation.name} type="text" className="form-control" id="name" placeholder="Enter a name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="galaxy">Galaxy</label>
                        <input required name="galaxy" onChange={props.handleChange} value={props.creation.galaxy} max="999" min="1" type="number" className="form-control" id="galaxy" placeholder="Enter a galaxy" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="planet">Planet</label>
                        <input required readOnly={props.planetLock} name="planet" onChange={props.handleChange} value={props.creation.planet} type="text" className="form-control" id="planet" placeholder="Enter a planet" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="priority">Priority</label>
                        <select required name="priority" onChange={props.handleChange} value={props.creation.priority} className="form-control" id="priority">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" onChange={props.handleChange} value={props.creation.description} className="form-control" id="description" rows="2"></textarea>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.close} className="btn btn-secondary">
                    Close
                </button>
                <button onClick={props.submit} className="btn btn-primary">
                    Save
                </button>
            </Modal.Footer>
        </div>
    );
} 