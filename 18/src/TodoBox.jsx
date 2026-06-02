import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTaskText: '',
        };
    }
    async componentDidMount() {
        const response = await axios.get(routes.tasksPath());
        this.setState({ tasks: response.data });
    }
    handleInputChange = (e) => {
        this.setState({ newTaskText: e.target.value });
    };
    addTask = async (e) => {
        e.preventDefault();
        const { newTaskText, tasks } = this.state;
        if (newTaskText.trim() === '') return;

        const response = await axios.post(routes.tasksPath(), { text: newTaskText });
        this.setState({
            tasks: [...tasks, response.data],
            newTaskText: '',
        });
    };
    toggleTaskState = async (id) => {
        const { tasks } = this.state;
        const task = tasks.find((task) => task.id === id);
        const route = task.state === 'active'
            ? routes.finishTaskPath(id)
            : routes.activateTaskPath(id);
        const response = await axios.patch(route);
        const taskIndex = tasks.findIndex((t) => t.id === id);
        const updatedTasks = update(tasks, {
            [taskIndex]: { $set: response.data },
        });
        this.setState({ tasks: updatedTasks });
    };
    renderTasks = (tasks, filter) => {
        return tasks
            .filter((task) => task.state === filter)
            .map((task) => (
                <Item key={task.id} task={task} onClick={this.toggleTaskState} />
            ));
    };
    tasksLength = (tasks, filter) => {
        return tasks.filter((task) => task.state === filter).length;
    };
    render() {
        const { tasks, newTaskText } = this.state;

        return (
            <div>
                <div className="mb-3">
                    <form className="todo-form mx-3" onSubmit={this.addTask}>
                        <div className="d-flex col-md-3">
                            <input
                                type="text"
                                value={newTaskText}
                                onChange={this.handleInputChange}
                                required
                                className="form-control me-3"
                                placeholder="I am going..."
                            />
                            <button type="submit" className="btn btn-primary">add</button>
                        </div>
                    </form>
                </div>

                {this.tasksLength(tasks, 'active') !== 0 && (
                    <div className="todo-active-tasks">
                        {this.renderTasks(tasks, 'active')}
                    </div>
                )}

                {this.tasksLength(tasks, 'finished') !== 0 && (
                    <div className="todo-finished-tasks">
                        {this.renderTasks(tasks, 'finished')}
                    </div>
                )}
            </div>
        );
    }
}
// END
