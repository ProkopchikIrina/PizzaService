import React from "react";
import FirebaseStorage from '../../stores/FirebaseStorage';
import './style.css';

export default class ShowImage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            imageSrc: '',//#' + this.state.productId
            productId: this.props.productId
        };

        this.getImage(this.props.image);
    }

    getImage (image) {
            let {state} = this;
        FirebaseStorage.storage.child(`${image}`).getDownloadURL().then((url) => {
                state[image] = url + '?alt=media&token=' + url.downloadTokens;
                document.getElementById(this.state.productId).src = url;
                this.setState(state);
                console.log(url);
                console.log(this.state.imageSrc);
            }).catch((error) => {
            })
    }

    render() {
        return (
            <img className="preview" src={ this.state.imageSrc } alt="Image" id = {this.state.productId}/>
        );
    }
}