import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            log: [],
        }
    }

    handlePlusClick = () => {
        this.setState(prevState => {
            const lastValue = prevState.log.length > 0 ? prevState.log[0] : 0;
            const newValue = lastValue + 1;
            return {
                log: [newValue, ...prevState.log],
            };
        });
    }

    handleMinusClick = () => {
        this.setState(prevState => {
            const lastValue = prevState.log.length > 0 ? prevState.log[0] : 0;
            const newValue = lastValue - 1;
            return {
                log: [newValue, ...prevState.log],
            };
        });
    }

    handleLogItemClick = (index) => {
        this.setState(prevState => {
            const newLog = [...prevState.log];
            newLog.splice(index, 1);
            return {
                log: newLog,
            };
        });
    }

    render() {
        const { log } = this.state;

        if (log.length === 0) {
            return (
                <div>
                    <div className="btn-group font-monospace" role="group">
                        <button type="button" className="btn btn-outline-success" onClick={this.handlePlusClick}>
                            +
                        </button>
                        <button type="button" className="btn btn-outline-danger" onClick={this.handleMinusClick}>
                            -
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button type="button" className="btn btn-outline-success" onClick={this.handlePlusClick}>
                        +
                    </button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.handleMinusClick}>
                        -
                    </button>
                </div>
                <div className="list-group">
                    {log.map((value, index) => (
                        <button
                            key={uniqueId()}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => this.handleLogItemClick(index)}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}
// END
