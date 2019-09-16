// import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/comments/CommentDetail';
import ApprovalCard from './components/comments/ApprovalCard';

// create a react component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Please have a look at the comment below and either approve or reject.</h4> <hr/>
                <CommentDetail author="Jack" timeAgo="Today at 10AM" content="Keep up the good work!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <CommentDetail author="Jill@com" timeAgo="Yesterday at 9PM" content="Nice post" avatar={faker.image.avatar()} />
            <CommentDetail author="Sam's" timeAgo="Yesterday at 6PM" content="Useful content" avatar={faker.image.avatar()} />
            <CommentDetail author="Wal-mart" timeAgo="Two days ago" content="Nice blog post" avatar={faker.image.avatar()} />
        </div>
    );
};

//Take the react component and display on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);