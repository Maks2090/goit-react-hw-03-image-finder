import { Component } from "react";
import PropTypes from 'prop-types';


export default class Searchbar extends Component {
    state = {
        searchQuery: "",
    }

    handleSearchQueryChange = e => {

        this.setState({ searchQuery: e.currentTarget.value.toLowerCase() })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.searchQuery.trim() === '') {
            return;
        }
        
        this.props.onSubmitForm({ image: this.state.searchQuery, page: 1, hits: 0 })
        this.setState({ searchQuery: '' });
    }

    render() {
        return (
            <header className="Searchbar">

                <form className="SearchForm" onSubmit={this.handleSubmit}>

                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        value={this.state.searchQuery}
                        onChange={this.handleSearchQueryChange}
                        className="SearchForm-input"
                        type="text"
                        
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>

            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmitForm: PropTypes.func,
  };