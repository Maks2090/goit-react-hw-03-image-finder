import { Component } from "react";
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {

    writeSrcState = (e) => {
        this.props.writeSrcState(e.target.dataset.src);
        this.props.onModal(true);
    };
    render() {
        const { imageGallery } = this.props;
        return (
            imageGallery.length !== 0 &&
            imageGallery.map((image) => (
                <li key={image.id}>
                    <img
                        className="ImageGalleryItem-image"
                        src={image.webformatURL}
                        alt={image.tags}
                        data-src={image.largeImageURL}
                        onClick={this.writeSrcState}
                    />
                </li>
            ))
        );
    }
}

ImageGalleryItem.propTypes = {
    imageGallery: PropTypes.arrayOf(PropTypes.object),
    onModal: PropTypes.func,
    writeSrcState: PropTypes.func,
  };