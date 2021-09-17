import { Component } from "react";
import PropTypes from 'prop-types';


class Button extends Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit({ page: this.props.currentPage + 1, hits: 0 });
    };
  
    render() {
      const { totalHits } = this.props;
  
      return (
        totalHits !== 0 && (
          <button
            className="Button"
            type="submit"
            onClick={this.handleSubmit}
          >
            Load more
          </button>
        )
      );
    }
  }

  export default Button;

  Button.propTypes = {
    totalHits: PropTypes.number,
    onSubmit: PropTypes.func,
    currentPage: PropTypes.number,
  };