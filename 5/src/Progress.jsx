import React from 'react';

// BEGIN (write your solution here)
export default class Progress extends React.Component {
    render() {
        const { percentage } = this.props;
        const progressStyle = {
            width: percentage + "%",
        }
        const ariaValueNow = percentage
        return (
            <div className="progress">
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={ ariaValueNow }
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label="progressbar"
                    style={progressStyle}
                ></div>
            </div>
        )
    }
}
// END
