import React, {PropTypes} from 'react';

export class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p>Header goes here...</p>
                {this.props.childeren}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};