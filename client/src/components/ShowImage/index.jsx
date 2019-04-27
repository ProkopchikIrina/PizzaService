import React from "react";
import firebase from 'firebase';

const config = {
    apiKey: "d8a38055e25c42b2b4464fb48b2ff5dc23b97bd5",
    authDomain: "imagesstorage-e5c86.firebaseapp.com",
    databaseURL: "https://imagesstorage-e5c86.firebaseio.com",
    storageBucket: "imagesstorage-e5c86.appspot.com",
    messagingSenderId: "472126861593"
};

firebase.initializeApp(config);
const storage = firebase.storage().ref();

export default class ShowImage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            imageSrc: '',
            productId: this.props.productId
        };

        this.getImage(this.props.image); //src={ this.state.imageSrc }
    }

    getImage (image) {
        if(!image) {
            image = 'DEFAULT.png'
        }
            storage.child(`${image}`).getDownloadURL().then((url) => {
                this.setState({
                    imageSrc: url + '?alt=media&token=' + url.downloadTokens
                });
                document.querySelector('img#' + this.state.productId).src = url;
                console.log('src' + this.state.imageSrc);
                console.log('url' + url);
            }).catch((error) => {
            })
    }

    render() {
        return (
            <div>
                <img alt="Image" width="100" height="100" id = {this.state.productId}/>
            </div>
        );
    }
}