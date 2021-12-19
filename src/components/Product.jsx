
import React, {useState } from "react";

function Product(props) {

    const [productcount, setProductCount] = useState(0);

    function onProductRemove() {
        let Cart = window.localStorage.getItem('cart');
        let cart = '';
        if(Cart === '' || JSON.parse(Cart)[props.product.id] === undefined) {
            if(Cart === '') {
            cart = {};
            }else {
                cart = JSON.parse(Cart);
            }
            setProductCount((previousCount)=> {
                if(previousCount > 0) {
                cart[props.product.id] = {
                    quantity: previousCount-1,
                    price: props.product.price,
                    product: props.product.title,
                    currency: props.product.currency,
                };
                window.localStorage.setItem('cart', JSON.stringify(cart));
                 return previousCount - 1;
            }else {
                return previousCount;
            }
            })
           
        }else {
            
                 setProductCount((previousCount)=> {
                    if(previousCount > 0) {
                    cart = JSON.parse(Cart);
                    cart[props.product.id].quantity = previousCount-1;
                    cart[props.product.id].price = props.product.price * cart[props.product.id].quantity;
                    window.localStorage.setItem('cart', JSON.stringify(cart));
                     return previousCount - 1 ;
                    }else {
                        return previousCount;
                    }
             })
            
           
        }

        props.onChange();
    }
    function onProductAdded() {
        let Cart = window.localStorage.getItem('cart');
        let cart = '';
        if(Cart === '' || JSON.parse(Cart)[props.product.id] === undefined) {
            if(Cart === '') {
            cart = {};
            }else {
                cart = JSON.parse(Cart);
            }
            setProductCount((previousCount)=> {
                if(previousCount >= 0){
                cart[props.product.id] = {
                    quantity: previousCount+1,
                    price: props.product.price,
                    product: props.product.title,
                    currency: props.product.currency,
                };
                window.localStorage.setItem('cart', JSON.stringify(cart));
                return previousCount + 1;}  else {

                    return previousCount;
                } 
            })
           
        }else {
                 setProductCount((previousCount)=> {
                    if(previousCount >= 0){
                    cart = JSON.parse(Cart);
                    cart[props.product.id].quantity = previousCount+1;
                    cart[props.product.id].price = props.product.price * cart[props.product.id].quantity;
                    window.localStorage.setItem('cart', JSON.stringify(cart));
                     return previousCount + 1 ;
                    } else {
                        return previousCount;
                    }
             })
           
        }
        props.onChange();

    }

    return (
        <div className="max-w-6xl mx-auto mt-3">
            <div className="grid grid-cols-6 items-center gap-3">
                <div className="">
                    <img src={props.product.image} alt="product_image" />
                </div>
                <div className="col-span-2">
                    <div className="">{ props.product.title }</div>
                    <div className="">{ props.product.desc }</div>
                </div>
                <div className="flex items-center justify-center">
                    <button className="px-2 bg-gray-300 rounded" onClick={onProductRemove}>-</button>
                    <div className="mx-2">{productcount}</div>
                    <button className="px-2 bg-gray-300 rounded" onClick={onProductAdded}>+</button>
                </div>
                <div className="">{props.product.currency}{props.product.price}</div>
            </div>
        </div>
      );
}

export default Product; 