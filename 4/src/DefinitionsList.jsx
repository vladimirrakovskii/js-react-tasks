import React from 'react';

// BEGIN (write your solution here)
export default class DefinitionsList extends React.Component {
    render() {
        const { data } = this.props;
        if (data.length === 0) {
            return null;
        }
        else return (
            <dl>
                {data.map(item => (<ListItem dt={item.dt} dd={item.dd} id={item.id} />))}
            </dl>
        )
    }
}
class ListItem extends React.Component {
    render() {
        const { dt, dd, id } = this.props;
        return (
            <>
                <dt key={ id }>{ dt }</dt>
                <dd>{ dd }</dd>
            </>
        )
    }
}
// END
