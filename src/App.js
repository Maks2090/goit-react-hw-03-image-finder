import './styles.css';
import { Component } from 'react';
import { Notify } from "notiflix";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem'
import fetchImeges from './Api/fetchImeges';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from "react-loader-spinner";

export default class App extends Component {
  state = {
    page: null,
    searchQuery: "",
    images: [],
    hits: 0,
    showModal: false,
    modalSrc: "",
    Loader: false
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.searchQuery !== prevState.searchQuery ||
      this.state.page !== prevState.page
    ) {
      this.onSearch();
    }
  }

  onSearch = () => {

    const { value, page } = this.state;
    this.showLoader(true);
    fetchImeges(value, page)
      .then((images) => {
        if (images.data.hits.length === 0) {
          Notify.info(
            "Sorry, there are no images matching your search query. Please try again."
          );
        }
        this.setState((prevState) => {
          return {
            images: [...prevState.images, ...images.data.hits],
            hits: prevState.hits + images.data.hits.length,
          };


        })
        if (this.state.hits >= images.data.totalHits) {
          this.setState({ hits: 0 });
        }
        this.scrollToBottom();
      })
      .catch((error) => {
        Notify.info(
          "Sorry, there are no images matching your search query. Please try again."
        );
      })
      .finally(() => this.showLoader(false));
  }

  showLoader = (status) => {
    return this.setState({ Loader: status });
  };

  writeToState = (data) => {
    data.image
      ? this.setState({
        images: [],
        value: data.image,
        page: data.page,
        hits: data.hits,
      })
      : this.setState({ page: data.page, hits: data.hits });
  };


  handelSearchbar = searchQuery => {
    this.setState({ searchQuery })
  }

  writeSrcState = (data) => {
    this.setState({
      modalSrc: data,
    });
  };

  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  onModal = (data) => {
    this.setState({
      showModal: data,
    });
  };

  render() {
   

    return (
      <div>
        <Searchbar
          onSubmitForm={this.writeToState}
        />


        <ImageGallery>
          <ImageGalleryItem
            imageGallery={this.state.images}
            writeSrcState={this.writeSrcState}
            onModal={this.onModal}
          />
        </ImageGallery>

        {this.state.Loader && (
          <Loader className="Loader" type="Puff" color="#3f51b5" height={80} width={80} timeout={500}/>
        )}

        <Button
          totalHits={this.state.hits}
          onSubmit={this.writeToState}
          currentPage={this.state.page}
        />
        {this.state.showModal && (
          <Modal
            modalSrc={this.state.modalSrc}
            showLoader={this.state.showModal}
            onModal={this.onModal}
          />
        )}



      </div >
    )
  }
}
