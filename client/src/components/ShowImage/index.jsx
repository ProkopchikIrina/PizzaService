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
            imageSrc: '',//#' + this.state.productId
            productId: this.props.productId
        };

        this.getImage(this.props.image); //src={ this.state.imageSrc }
    }

    getImage (image) {
        // if(!image) {
        //     image = 'DEFAULT.png'
        // }
            let {state} = this;
            storage.child(`${image}`).getDownloadURL().then((url) => {
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
            <img onLoad={this.getImage(this.props.image)} src={ this.state.imageSrc } alt="Image" width="100" height="100" id = {this.state.productId}/>
        );
    }
}