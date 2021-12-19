import logo from "../logo.svg";
import React, { useState } from "react";

function NavBar(props) {
  const [showCart, setShowCart] = useState(false);

  let cart = props.cart == "" ? {} : JSON.parse(props.cart);
  let total = 0;
  let currency = "$";
  for (let item in cart) {
    total += parseFloat(cart[item].price);
    currency = cart[item].currency;
  }

  function onCartClick() {
    setShowCart(!showCart);
  }
  let lst = Object.keys(cart).map((item) => {
    return (
      <div key={item} className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <span className="ml-2">{cart[item].product}</span>
          <div>
            <span className="text-gray-400">{cart[item].currency}</span>{" "}
            <span className="ml-2">{cart[item].price}</span>
          </div>
        </div>
        <div className="flex items-center">
            <div>Qty {cart[item].quantity}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-gray-600 -py-5 px-10">
      <nav className="flex justify-between items-center">
        <img src={logo} className="h-16 w-16" alt="logo" />
        <div className="flex">
          <div className="relative ">
            <button onClick={onCartClick}>
              <div className="text-white">
                {currency}
                {total}
              </div>
              <div className="flex items-center">
                <span className="text-white">
                  {Object.keys(cart).length} items
                </span>
                <span className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </button>
            {showCart ? (
              <div className="absolute -left-64 top-16 w-96 h-96 rounded bg-gray-500">
                {lst}
              </div>
            ) : (
              ""
            )}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
