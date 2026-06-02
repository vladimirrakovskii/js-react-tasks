import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskText: '',
            tasks: [],
        }
    }

    handleInputChange = (e) => {
        this.setState({ taskText: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.taskText.trim() === '') return;

        const newTask = {
            id: uniqueId(),
            text: this.state.taskText,
        };

        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask],
            taskText: '',
        }));
    }

    handleRemove = (id) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== id),
        }));
    }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.handleSubmit}>
                        <div className="me-3">
                            <input
                                type="text"
                                value={this.state.taskText}
                                required=""
                                className="form-control"
                                placeholder="I am going..."
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                {this.state.tasks.map((task) => (
                    <Item
                        key={task.id}
                        task={task.text}
                        onRemove={() => this.handleRemove(task.id)}
                    />
                ))}
            </div>
        )
    }
}
// END
