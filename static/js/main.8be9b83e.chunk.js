(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{27:function(t,e,a){},28:function(t,e,a){},71:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),i=(a(27),a(11)),s=a(4),h=a(5),l=a(7),u=a(6),d=(a(28),a(10)),m=(a(30),a(1)),p=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={searchQuery:""},t.handleSearchQueryChange=function(e){t.setState({searchQuery:e.currentTarget.value.toLowerCase()})},t.handleSubmit=function(e){e.preventDefault(),""!==t.state.searchQuery.trim()&&(t.props.onSubmitForm({image:t.state.searchQuery,page:1,hits:0}),t.setState({searchQuery:""}))},t}return Object(h.a)(a,[{key:"render",value:function(){return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{value:this.state.searchQuery,onChange:this.handleSearchQueryChange,className:"SearchForm-input",type:"text",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component);function g(t){var e=t.children;return Object(m.jsx)("ul",{className:"ImageGallery",children:e})}var b=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).writeSrcState=function(e){t.props.writeSrcState(e.target.dataset.src),t.props.onModal(!0)},t}return Object(h.a)(a,[{key:"render",value:function(){var t=this,e=this.props.imageGallery;return 0!==e.length&&e.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("img",{className:"ImageGalleryItem-image",src:e.webformatURL,alt:e.tags,"data-src":e.largeImageURL,onClick:t.writeSrcState})},e.id)}))}}]),a}(n.Component),f=a(21),j=a.n(f);var y=function(t,e){var a="".concat("https://pixabay.com/api","/?key=").concat("22631674-5d368c2f6a01c7affe232da9d","&q=").concat(t,"&page=").concat(e,"&image_type=photo&orientation=horizontal&safesearch=true&per_page=12");return j.a.get(a).then((function(t){return t}))},S=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).handleSubmit=function(e){e.preventDefault(),t.props.onSubmit({page:t.props.currentPage+1,hits:0})},t}return Object(h.a)(a,[{key:"render",value:function(){return 0!==this.props.totalHits&&Object(m.jsx)("button",{className:"Button",type:"submit",onClick:this.handleSubmit,children:"Load more"})}}]),a}(n.Component),v=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).onCloseModal=function(e){e.target!==e.currentTarget&&"Escape"!==e.code||t.props.onModal(!1)},t}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onCloseModal)}},{key:"render",value:function(){var t=this.props.modalSrc;return Object(m.jsx)("div",{className:"Overlay",onClick:this.onCloseModal,children:Object(m.jsx)("div",{className:"Modal",children:Object(m.jsx)("img",{src:t,alt:"modal img"})})})}}]),a}(n.Component),O=a(22),w=a.n(O),x=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={page:null,searchQuery:"",images:[],hits:0,showModal:!1,modalSrc:"",Loader:!1},t.onSearch=function(){var e=t.state,a=e.value,n=e.page;t.showLoader(!0),y(a,n).then((function(e){0===e.data.hits.length&&d.Notify.info("Sorry, there are no images matching your search query. Please try again."),t.setState((function(t){return{images:[].concat(Object(i.a)(t.images),Object(i.a)(e.data.hits)),hits:t.hits+e.data.hits.length}})),t.state.hits>=e.data.totalHits&&t.setState({hits:0}),t.scrollToBottom()})).catch((function(t){d.Notify.info("Sorry, there are no images matching your search query. Please try again.")})).finally((function(){return t.showLoader(!1)}))},t.showLoader=function(e){return t.setState({Loader:e})},t.writeToState=function(e){e.image?t.setState({images:[],value:e.image,page:e.page,hits:e.hits}):t.setState({page:e.page,hits:e.hits})},t.handelSearchbar=function(e){t.setState({searchQuery:e})},t.writeSrcState=function(e){t.setState({modalSrc:e})},t.scrollToBottom=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},t.onModal=function(e){t.setState({showModal:e})},t}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(t,e){this.state.searchQuery===e.searchQuery&&this.state.page===e.page||this.onSearch()}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{onSubmitForm:this.writeToState}),Object(m.jsx)(g,{children:Object(m.jsx)(b,{imageGallery:this.state.images,writeSrcState:this.writeSrcState,onModal:this.onModal})}),this.state.Loader&&Object(m.jsx)(w.a,{className:"Loader",type:"Puff",color:"#3f51b5",height:80,width:80,timeout:500}),Object(m.jsx)(S,{totalHits:this.state.hits,onSubmit:this.writeToState,currentPage:this.state.page}),this.state.showModal&&Object(m.jsx)(v,{modalSrc:this.state.modalSrc,showLoader:this.state.showModal,onModal:this.onModal})]})}}]),a}(n.Component),C=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;a(t),n(t),r(t),o(t),c(t)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),C()}},[[71,1,2]]]);
//# sourceMappingURL=main.8be9b83e.chunk.js.map