import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
export default class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            countries: [],
            isLoading: false,
        };
    }

    handleInputChange = async (e) => {
        const value = e.target.value;
        this.setState({ inputValue: value });
        if (value.trim().length > 0) {
            this.setState({ isLoading: true });
            try {
                const response = await axios.get("/countries", {
                    params: { term: value }
                });
                this.setState({
                    countries: response.data,
                    isLoading: false
                });
            } catch (error) {
                console.error('Error fetching countries:', error);
                this.setState({
                    countries: [],
                    isLoading: false
                });
            }
        } else {
            this.setState({ countries: [] });
        }
    }
    render() {
        const { inputValue, countries, isLoading } = this.state;
        return (
            <div>
                <form>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Country"
                        value={inputValue}
                        onChange={this.handleInputChange}
                    />
                </form>
                {isLoading && <div>Loading...</div>}
                {!isLoading && countries.length > 0 && (
                    <ul>
                        {countries.map(country => (
                            <li key={country}>{country}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}
// END
