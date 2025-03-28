import React, { useState } from "react";
import DefaultIcon from "@/components/DefaultIcon";
export default function Header({ cart }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseClicked = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Header">
      <div className="right">
        <div className="menu">
          <svg
            width="23"
            height="27"
            viewBox="0 0 32 34"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="menuIcon"
          >
            <g clipPath="url(#clip0_2_31)">
              <path
                d="M1.33332 8.50002H30.6667C31.0203 8.50002 31.3594 8.35076 31.6095 8.08508C31.8595 7.81941 32 7.45907 32 7.08335C32 6.70763 31.8595 6.34729 31.6095 6.08162C31.3594 5.81594 31.0203 5.66669 30.6667 5.66669H1.33332C0.979696 5.66669 0.640558 5.81594 0.390509 6.08162C0.140461 6.34729 -1.52588e-05 6.70763 -1.52588e-05 7.08335C-1.52588e-05 7.45907 0.140461 7.81941 0.390509 8.08508C0.640558 8.35076 0.979696 8.50002 1.33332 8.50002V8.50002Z"
                fill="black"
              />
              <path
                d="M1.33332 15.5833H20C20.3536 15.5833 20.6927 15.4341 20.9428 15.1684C21.1928 14.9027 21.3333 14.5424 21.3333 14.1667C21.3333 13.7909 21.1928 13.4306 20.9428 13.1649C20.6927 12.8993 20.3536 12.75 20 12.75H1.33332C0.979696 12.75 0.640558 12.8993 0.390509 13.1649C0.140461 13.4306 -1.52588e-05 13.7909 -1.52588e-05 14.1667C-1.52588e-05 14.5424 0.140461 14.9027 0.390509 15.1684C0.640558 15.4341 0.979696 15.5833 1.33332 15.5833V15.5833Z"
                fill="black"
              />
              <path
                d="M20 26.9166H1.33332C0.979696 26.9166 0.640558 27.0659 0.390509 27.3316C0.140461 27.5972 -1.52588e-05 27.9576 -1.52588e-05 28.3333C-1.52588e-05 28.709 0.140461 29.0694 0.390509 29.335C0.640558 29.6007 0.979696 29.75 1.33332 29.75H20C20.3536 29.75 20.6927 29.6007 20.9428 29.335C21.1928 29.0694 21.3333 28.709 21.3333 28.3333C21.3333 27.9576 21.1928 27.5972 20.9428 27.3316C20.6927 27.0659 20.3536 26.9166 20 26.9166Z"
                fill="black"
              />
              <path
                d="M30.6667 19.8334H1.33332C0.979696 19.8334 0.640558 19.9826 0.390509 20.2483C0.140461 20.514 -1.52588e-05 20.8743 -1.52588e-05 21.25C-1.52588e-05 21.6258 0.140461 21.9861 0.390509 22.2518C0.640558 22.5175 0.979696 22.6667 1.33332 22.6667H30.6667C31.0203 22.6667 31.3594 22.5175 31.6095 22.2518C31.8595 21.9861 32 21.6258 32 21.25C32 20.8743 31.8595 20.514 31.6095 20.2483C31.3594 19.9826 31.0203 19.8334 30.6667 19.8334Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_31">
                <rect width="32" height="34" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="searchInput">
          <input type="text" className="search-bar"></input>
          <span className="material-symbols-outlined search">search</span>
        </div>
      </div>
      <div className="left">
        <div className={`cart ${isOpen ? "cartOpen" : ""}`}>
          <div className="cart-icon-container" onClick={handleMouseClicked}>
            <svg
              className="cart-icon"
              width="27"
              height="27"
              viewBox="0 0 35 35"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.25 26.3333C9.55417 26.3333 8.18208 27.6458 8.18208 29.25C8.18208 30.8542 9.55417 32.1667 11.25 32.1667C12.9458 32.1667 14.3333 30.8542 14.3333 29.25C14.3333 27.6458 12.9458 26.3333 11.25 26.3333ZM2 3V5.91667H5.08333L10.6333 16.9854L8.55208 20.5583C8.30542 20.9667 8.16667 21.4479 8.16667 21.9583C8.16667 23.5625 9.55417 24.875 11.25 24.875H29.75V21.9583H11.8975C11.6817 21.9583 11.5121 21.7979 11.5121 21.5938L11.5583 21.4188L12.9458 19.0417H24.4313C25.5875 19.0417 26.605 18.4438 27.1292 17.5396L32.6483 8.075C32.7717 7.87083 32.8333 7.62292 32.8333 7.375C32.8333 6.57292 32.1396 5.91667 31.2917 5.91667H8.49042L7.04125 3H2ZM26.6667 26.3333C24.9708 26.3333 23.5987 27.6458 23.5987 29.25C23.5987 30.8542 24.9708 32.1667 26.6667 32.1667C28.3625 32.1667 29.75 30.8542 29.75 29.25C29.75 27.6458 28.3625 26.3333 26.6667 26.3333Z" />
            </svg>

            <svg
              className={`arrow-icon ${isOpen ? "openArrow" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className={`dropDownCart ${isOpen ? "open" : ""}`}>
            {(cart || []).length > 0 ? (
              cart.map((item, index) => (
                <div className="item-inCart" key={index}>
                  <div className="drop-item-name">{item.name}</div>
                  <div className="shoe-cart-container">
                    <img className="shoe-cart" src={item.img} alt={item.name} />
                  </div>
                </div>
              ))
            ) : (
              <div className="item-inCart">Your cart is empty</div>
            )}
          </div>
        </div>
        {/* <DefaultIcon /> */}
      </div>
    </div>
  );
}
