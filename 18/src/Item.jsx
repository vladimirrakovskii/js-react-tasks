import React from 'react';

// BEGIN (write your solution here)
export default class Item extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        const { onClick, task } = this.props;
        onClick(task.id);
    };

    render() {
        const { task } = this.props;
        const { id, text, state } = task;
        const isFinished = state === 'finished';

        return (
            <div className="row">
                <div className="col-1">{id}</div>
                <div className="col">
                    {isFinished ? (
                        <s><a href="#" className="todo-task" onClick={this.handleClick}>{text}</a></s>
                    ) : (
                        <a href="#" className="todo-task" onClick={this.handleClick}>{text}</a>
                    )}
                </div>
            </div>
        );
    }
}
// END
