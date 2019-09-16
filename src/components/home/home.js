import React from "react";
import { Link } from 'react-router';

export class Homepage extends React.Component {
    render () {
        return (
            <div class="jumbotran">
                <p>React App</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}