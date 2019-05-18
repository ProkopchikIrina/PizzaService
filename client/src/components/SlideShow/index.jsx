import React from 'react';
import {Carousel} from 'react-responsive-carousel'; //onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import {Button, Spinner} from 'reactstrap';
import {inject, observer} from "mobx-react";
import FirebaseStorage from '../../stores/FirebaseStorage';

@inject('productStore', 'orderItemStore')
@observer
export default class SlideShow extends React.Component {
    // products = [];

    constructor(props) {
        super(props);
        this.state = {products: null};
        this.props.productStore.loadAll().then(()=>
        this.setState({products: this.props.productStore.products})
        );
    }

    render() {
        if(!this.state.products) {
            return  (
                <Spinner className="spinner" type="grow" color="primary" />
            )
        }
        console.log(this.state.products);
        return (
            <Carousel className = "carousel"  autoPlay interval={2000} infiniteLoop>
                {/*{this.state.products.forEach((product)=>*/}
                     {/*{*/}
                        {/*return <div>*/}
                        <div>
                <img alt='' id = {this.state.products[0].id} src={this.getImageUrl(this.state.products[0].image, this.state.products[0].id)} />
                <p className='title'>{this.state.products[0].title}</p>
                <Button className="legend1" color="secondary" size="lg" block onClick={() => this.addToCart(this.state.products[0], 1)}>Добавить в корзину</Button>
            </div>
                <div>
                    <img alt='' id = {this.state.products[1].id} src={this.getImageUrl(this.state.products[1].image, this.state.products[1].id)} />
                    <p className='title'>{this.state.products[1].title}</p>
                    <Button className="legend1" color="secondary" size="lg" block onClick={() => this.addToCart(this.state.products[1], 1)}>Добавить в корзину</Button>
                </div>
                <div>
                    <img alt='' id = {this.state.products[2].id} src={this.getImageUrl(this.state.products[2].image, this.state.products[2].id)} />
                    <p className='title'>{this.state.products[2].title}</p>
                    <Button className="legend1" color="secondary" size="lg" block onClick={() => this.addToCart(this.state.products[2], 1)}>Добавить в корзину</Button>
                </div>
                <div>
                    <img alt='' id = {this.state.products[3].id} src={this.getImageUrl(this.state.products[3].image, this.state.products[3].id)} />
                    <p className='title'>{this.state.products[3].title}</p>
                    <Button className="legend1" color="secondary" size="lg" block onClick={() => this.addToCart(this.state.products[3], 1)}>Добавить в корзину</Button>
                </div>
                <div>
                    <img alt='' id = {this.state.products[4].id} src={this.getImageUrl(this.state.products[4].image, this.state.products[4].id)} />
                    <p className='title'>{this.state.products[4].title}</p>
                    <Button className="legend1" color="secondary" size="lg" blockonClick={() => this.addToCart(this.state.products[4], 1)}>Добавить в корзину</Button>
                </div>

                <div>
                    <img alt='' id = {this.state.products[5].id} src={this.getImageUrl(this.state.products[5].image, this.state.products[5].id)} />
                    <p className='title'>{this.state.products[5].title}</p>
                    <Button cclassName="legend1" color="secondary" size="lg" blockonClick={() => this.addToCart(this.state.products[5], 1)}>Добавить в корзину</Button>
                </div>

                <div>
                    <img alt='' id = {this.state.products[6].id} src={this.getImageUrl(this.state.products[6].image, this.state.products[6].id)} />
                    <p className='title'>{this.state.products[6].title}</p>
                    <Button className="legend1" color="secondary" size="lg" block onClick={() => this.addToCart(this.state.products[6], 1)}>Добавить в корзину</Button>
                </div>

                <div>
                    <img alt='' id = {this.state.products[7].id} src={this.getImageUrl(this.state.products[7].image, this.state.products[7].id)} />
                    <p className='title'>{this.state.products[7].title}</p>
                    <Button className="legend1" color="secondary" size="lg" block onClick={() => this.addToCart(this.state.products[7], 1)}>Добавить в корзину</Button>
                </div>
            </Carousel>
        );
    }


    static getRandomProducts(products, count) {
        let random = [];
        console.log('prod' + products);
        for(let i = 0; i<count; i++){
            random.push(products[Math.floor(Math.random()*products.length)])
        }
        console.log('prod2' + random);
        return random;
    }

    getImageUrl (image, id) {
        let {state} = this;
        FirebaseStorage.storage.child(`${image}`).getDownloadURL().then((url) => {
            const result = url + '?alt=media&token=' + url.downloadTokens;
            document.getElementById(id).src = url;
            console.log(url);
            console.log(result);
            return result;
        }).catch((error) => {
        })
    }

    addToCart(product, count) {
        let orderItem = {product: product, count: count};
        this.props.orderItemStore.addToShoppingCart(orderItem);
}
};
