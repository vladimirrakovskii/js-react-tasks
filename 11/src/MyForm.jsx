import React from 'react';

// BEGIN (write your solution here)
export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.email,
            password: props.password,
            address: props.address,
            city: props.city,
            country: props.country,
            acceptRules: props.acceptRules || false,
            isSubmitting: false,
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({isSubmitting: true});
    }
    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }
    handleAddressChange = (e) => {
        this.setState({address: e.target.value});
    }
    handleCityChange = (e) => {
        this.setState({city: e.target.value});
    }
    handleCountryChange = (e) => {
        this.setState({country: e.target.value});
    }
    handleRulesChange = (e) => {
        this.setState({acceptRules: e.target.checked});
    }
    handleBackClick = () => {
        this.setState({isSubmitting: false});
    }
    render() {
        const isSubmitting = this.state.isSubmitting;
        if (isSubmitting){
            return (
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.handleBackClick}>Back</button>
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>acceptRules</td>
                            <td>{String(this.state.acceptRules)}</td>
                        </tr>
                        <tr>
                            <td>address</td>
                            <td>{this.state.address}</td>
                        </tr>
                        <tr>
                            <td>city</td>
                            <td>{this.state.city}</td>
                        </tr>
                        <tr>
                            <td>country</td>
                            <td>{this.state.country}</td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td>{this.state.password}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
        else return (
            <form name="myForm" onSubmit={this.handleSubmit}>
                <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        onChange={this.handleEmailChange}
                        value={this.state.email}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="password" className="col-form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="address" className="col-form-label">Address</label>
                    <textarea
                        type="text"
                        className="form-control"
                        name="address"
                        id="address"
                        placeholder="1234 Main St"
                        onChange={this.handleAddressChange}
                        value={this.state.address}
                    ></textarea>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="col-form-label">City</label>
                    <input type="text" className="form-control" name="city" id="city"
                           onChange={this.handleCityChange}
                           value={this.state.city}/>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="country" className="col-form-label">Country</label>
                    <select id="country" name="country" className="form-control"
                            onChange={this.handleCountryChange} value={this.state.country}>
                        <option value="">Choose</option>
                        <option value="argentina">Argentina</option>
                        <option value="russia">Russia</option>
                        <option value="china">China</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="rules">
                            <input
                                id="rules"
                                type="checkbox"
                                name="acceptRules"
                                className="form-check-input"
                                onChange={this.handleRulesChange}
                                checked={this.state.acceptRules}
                            />
                            Accept Rules
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        )
    }
}
// END
